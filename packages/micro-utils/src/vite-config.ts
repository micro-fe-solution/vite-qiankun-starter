import { mergeConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'
import vitePluginImp from 'vite-plugin-imp'

import type { UserConfig } from 'vite'
import type { GetViteConfigOptions, Frame } from './types';

const initialPluginsConfig: Record<Frame, UserConfig['plugins']> = {
  vue: [vue()],
  react: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style/css`,
        },
        // {
        //   libName: '@ant-design/icons',
        //   libDirectory: '',
        //   camel2DashComponentName: false,
        // },
      ],
    }),
  ]
};

export const getViteConfig = ({
  root = process.cwd(),
  frame = 'react',
  micro = true,
  moduleName = '',
}: GetViteConfigOptions = {}) => {
  const serverConfig = {
    strictPort: true,
    proxy: {},
  }

  const initialPlugins = initialPluginsConfig[frame];

  const sharedViteConfig = {
    root,
    server: serverConfig,
    preview: serverConfig,
    resolve: {
      alias: [
        // fix less import by: @import ~
        // less import no support webpack alias '~' · Issue #2185 · vitejs/vite
        // https://github.com/vitejs/vite/issues/2185
        { find: /^~/, replacement: '' },
        { find: '@', replacement: path.resolve(root, './src') },
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
    base: moduleName ?`/${moduleName}/` : undefined,
    plugins: [qiankun(moduleName, {})],
  })

  return microViteConfig
}
