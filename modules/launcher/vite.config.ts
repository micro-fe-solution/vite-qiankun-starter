import { defineConfig, mergeConfig } from 'vite'
import { getViteConfig } from 'vite-micro-utils'

const isPord = process.env.NODE_ENV === 'production';
const cdns = [
  'https://cdn.staticfile.org/react/18.2.0/umd/react.production.min.js',
  'https://cdn.staticfile.org/react/18.2.0/umd/react.production.min.js',
]

const sharedConfig = getViteConfig({
  root: __dirname,
  externals: isPord
    ? {
      react: 'React',
      'react-dom': 'ReactDOM',
    }: {},
  html: {
    entry: '/src/main.tsx',
    template: 'index.html',
    inject: {
      data: {
        injectScript: isPord ? cdns.reduce((prev, cur) => { return prev += `<script src="${cur}"></script>`},'') : undefined
      },
    },
  },
  visualizer: process.env.ANALYZE === '1',
})

// https://vitejs.dev/config/
export default defineConfig(
  mergeConfig(sharedConfig, {
    optimizeDeps: {
      include: ['react/jsx-runtime'],
    },
    pluginImport: {
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style/css`,
        },
      ]
    },
    server: {
      host: true,
      port: 8700,
      proxy: {
        '/map': 'http://localhost:8701',
        '/video-monitor': 'http://localhost:8702',
        '/vue': 'http://localhost:8703',
      },
    },
  })
)
