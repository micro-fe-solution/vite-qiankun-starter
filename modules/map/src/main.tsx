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

function render(props: any = {}) {
  const { container } = props

  root = createRoot(container
    ? container.querySelector(`#${appName}-root`)
    : document.getElementById(`#${appName}-root`)
  )

  root.render(<App />)
}

function applyProps(props: any) {}

renderWithQiankun({
  mount(props: any) {
    console.log(`[${appName}] mount`)
    applyProps(props)
    render(props)
  },
  bootstrap() {
    console.log(`[${appName}] bootstrap`)
  },
  update(props: any) {
    console.log(`[${appName}] update`)
    applyProps(props?.props ?? props)
  },
  unmount() {
    console.log(`[${appName}] unmount`)
    root?.unmount();
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

if (process.env.NODE_ENV === 'development') {
  import('@/hmr.fix')
}
