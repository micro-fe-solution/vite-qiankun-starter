import { defineConfig, mergeConfig } from 'vite'
import { getViteConfig } from 'vite-micro-utils'

const sharedConfig = getViteConfig({
  root: __dirname,
})

// https://vitejs.dev/config/
export default defineConfig(
  mergeConfig(sharedConfig, {
    server: {
      host: true,
      port: 8700,
      proxy: {
        '/map': 'http://localhost:8701',
        '/video-monitor': 'http://localhost:8702',
      },
    },
  })
)
