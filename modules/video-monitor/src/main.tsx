import 'regenerator-runtime/runtime.js';
import { createRoot } from 'react-dom/client';
import { unmountComponentAtNode } from 'react-dom';
import { renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import { App } from './App'

const appName = 'video-monitor'

export default function start(props: any = {}) {
  const { container } = props

  createRoot(container
    ? container.querySelector(`#${appName}-root`)
    : document.querySelector(`#${appName}-root`)
  ).render(
    <App />
  )
}

function applyProps(props: any) {}

renderWithQiankun({
  bootstrap() {
    console.log(`[${appName}] bootstrap`)
  },
  mount(props: any) {
    console.log(`[${appName}] mount`, props)
    applyProps(props)
    start(props)
  },
  update(props: any) {
    console.log(`[${appName}] update`, props)
    applyProps(props?.props ?? props)
  },
  unmount(props: any) {
    console.log(`[${appName}] unmount`)
    const { container } = props
    unmountComponentAtNode(
      container
        ? container.querySelector(`#${appName}-root`)
        : document.querySelector(`#${appName}-root`)
    )
  },
})

if (!window.__POWERED_BY_QIANKUN__) {
  start()
}

if (process.env.NODE_ENV === 'development') {
  import('@/hmr.fix')
}
