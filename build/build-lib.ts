import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { name } from '../package.json'
import { camelize } from './utils'

export default defineConfig({
  build: {
    target: 'es2015',
    outDir: resolve(__dirname, '../lib'),
    lib: {
      entry: resolve(__dirname, '../src/index.ts'),
      name: camelize(name),
    },
    rollupOptions: {
      output: {
        exports: 'named',
        globals: (id: string) => {
          const name = id.replace(/^@/, '').split('/')[0]
          return camelize(name)
        },
      },
      external: (id: string) =>
        /^(vue|@vue|element-plus|resize-observer-polyfill)/.test(id),
    },
  },
  plugins: [vue()],
})
