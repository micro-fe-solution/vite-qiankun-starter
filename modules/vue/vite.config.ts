import { defineConfig, mergeConfig } from 'vite'
import { getViteConfig } from 'vite-micro-utils'

const sharedConfig = getViteConfig({
  root: __dirname,
  frame: 'vue',
  moduleName: 'vue',
  visualizer: process.env.ANALYZE === '1',
})

// https://vitejs.dev/config/
export default defineConfig(
  mergeConfig(sharedConfig, {
    server: {
      host: true,
      port: 8703,
    },
  })
)
