import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import Root from './App.vue'

import type { App } from 'vue'

const appName = 'vue'

let app: App;
async function start(props: any = {}) {
  const { container } = props
  app = createApp(Root)
  app.mount(
    container
      ? container.querySelector(`#${appName}-app`)
      : document.querySelector(`#${appName}-app`)
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
  unmount() {
    console.log(`[${appName}] unmount`)
    app.unmount()
  },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  start()
}
