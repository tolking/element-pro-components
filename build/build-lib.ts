import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { name } from '../package.json'
import { camelize, toAbsolute } from './utils'

export default defineConfig({
  build: {
    target: 'es2015',
    outDir: toAbsolute('../lib'),
    lib: {
      entry: toAbsolute('../src/index.ts'),
      name: camelize(name),
      fileName: 'index',
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
        /^(vue|@vue|@vueuse|element-plus|@element-plus|lodash-unified)/.test(
          id,
        ),
    },
  },
  plugins: [vue()],
})
