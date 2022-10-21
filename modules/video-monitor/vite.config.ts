import { defineConfig, mergeConfig } from 'vite'
import { getViteConfig } from 'vite-micro-utils'

const sharedConfig = getViteConfig({
  moduleName: 'video-monitor',
  dirname: __dirname,
})

// https://vitejs.dev/config/
export default defineConfig(
  mergeConfig(sharedConfig, {
    server: {
      host: true,
      port: 8071,
    },
  })
)
