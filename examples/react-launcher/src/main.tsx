import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  initGlobalState,
  registerMicroApps,
  runAfterFirstMounted,
  start,
} from 'qiankun';
import App from './App'
import './index.css';

import apps from '../micro.config';

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
});
}

async function render() {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

render().then(() => {
  initMicroApps();
});
