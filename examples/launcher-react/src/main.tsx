import React from 'react'
import { createRoot } from 'react-dom/client';
import {
  registerMicroApps,
  runAfterFirstMounted,
  start,
} from 'qiankun';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Root from './App';

import 'antd/dist/antd.css';

import { apps } from '../micro.config.json';

const isDev = process.env.NODE_ENV === 'development';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: (
          <div>
            <h1>Hello World</h1>
            <Link to="about">About Us</Link>
          </div>
        ),
      },
    ],
  },
]);

async function main() {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

function initMicroApps() {
  registerMicroApps(apps, {
    beforeLoad: [
      async (app) => {
        console.log(
          '[LifeCycle] before load %c%s',
          'color: green;',
          app.name,
        );
      },
    ],
    beforeMount: [
      async (app) => {
        console.log(
          '[LifeCycle] before mount %c%s',
          'color: green;',
          app.name,
        );
      },
    ],
    afterUnmount: [
      async (app) => {
        console.log(
          '[LifeCycle] after unmount %c%s',
          'color: green;',
          app.name,
        );
      },
    ],
  })

  start({ sandbox: { experimentalStyleIsolation: true } });

  runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
  });
}

// init main application first
main().then(() => {
  initMicroApps();
});