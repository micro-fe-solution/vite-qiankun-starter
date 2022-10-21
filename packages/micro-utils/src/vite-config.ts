import { mergeConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'
import vitePluginImp from 'vite-plugin-imp'

interface Options {
  frame?: 'react' | 'vue';
  micro?: boolean;
  moduleName?: string;
  dirName?: string;
}

export const getViteConfig = ({
  frame = 'react',
  micro = true,
  moduleName = '',
  dirName = process.cwd(),
}: Options = {}) => {
  const serverConfig = {
    strictPort: true,
    proxy: {},
  }

  const initialPlugins = {
    vue: [vue()],
    react: [
      react(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/es/${name}/style/css`,
          },
          {
            libName: '@ant-design/icons',
            libDirectory: '',
            camel2DashComponentName: false,
          },
        ],
      }),
    ]
  }[frame];

  const sharedViteConfig = {
    base: dirName,
    server: serverConfig,
    preview: serverConfig,
    resolve: {
      alias: [
        // fix less import by: @import ~
        // less import no support webpack alias '~' · Issue #2185 · vitejs/vite
        // https://github.com/vitejs/vite/issues/2185
        { find: /^~/, replacement: '' },
        { find: '@', replacement: path.resolve(dirName, './src') },
        {
          find: 'mqtt',
          replacement: 'mqtt/dist/mqtt.js',
        },
      ],
    },
    plugins: initialPlugins,
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        },
      },
    },
  }

  if (!micro) {
    return sharedViteConfig
  }

  const microViteConfig = mergeConfig(sharedViteConfig, {
    base: moduleName ? `/${moduleName}/` : '/',
    plugins: [qiankun(moduleName, {})],
    build: {
      rollupOptions: {
        external: ['@/hmr.fix'],
      },
    },
  })

  return microViteConfig
}
