import { defineConfig, mergeConfig } from 'vite'
import { getViteConfig } from 'vite-micro-utils'

const isPord = process.env.NODE_ENV === 'production';
const sharedConfig = getViteConfig({
  root: __dirname,
  externals: isPord
    ? {
      react: 'React',
      'react-dom': 'ReactDOM',
    }: {},
  moduleName: 'video-monitor',
  visualizer: process.env.ANALYZE === '1',
})

// https://vitejs.dev/config/
export default defineConfig(
  mergeConfig(sharedConfig, {
    server: {
      host: true,
      port: 8702,
    },
  })
)
