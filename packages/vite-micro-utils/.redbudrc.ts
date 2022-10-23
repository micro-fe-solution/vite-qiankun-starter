import { defineConfig } from 'redbud';

export default defineConfig({
  esm: {
    output: 'es',
    transformer: 'babel'
  },
  cjs: {
    output: 'lib',
    transformer: 'babel'
  },
  platform: 'node'
});
