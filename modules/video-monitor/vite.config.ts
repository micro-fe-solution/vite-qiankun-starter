import { defineConfig, mergeConfig } from 'vite'
import { getViteConfig } from 'vite-micro-utils'

const sharedConfig = getViteConfig({
  root: __dirname,
  moduleName: 'video-monitor',
})

// https://vitejs.dev/config/
export default defineConfig(
  mergeConfig(sharedConfig, {
    server: {
      host: true,
      port: 8701,
    },
  })
)
