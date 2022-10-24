import 'regenerator-runtime/runtime.js';
import { createRoot } from 'react-dom/client';
import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'
import { App } from './App'

import type { Root } from 'react-dom/client'

const appName = 'map'
let root: Root;

export default function start(props: any = {}) {
  const { container } = props

  root = root || createRoot(container
    ? container.querySelector(`#${appName}-root`)
    : document.querySelector(`#${appName}-root`)
  )

  root.render(
    <App />
  )
}

function applyProps(props: any) {}

renderWithQiankun({
  bootstrap() {
    console.log(`[${appName}] bootstrap`)
  },
  mount(props: any) {
    // console.log(`[${appName}] mount`, props)
    applyProps(props)
    start(props)
  },
  update(props: any) {
    // console.log(`[${appName}] update`, props)
    applyProps(props?.props ?? props)
  },
  unmount(props: any) {
    console.log(`[${appName}] unmount`)
    root?.unmount();
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  start()
}

if (process.env.NODE_ENV === 'development') {
  import('@/hmr.fix')
}
