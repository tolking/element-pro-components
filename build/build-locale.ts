import fg from 'fast-glob'
import { defineConfig } from 'vite'
import { toAbsolute } from './utils'

export default defineConfig({
  build: {
    target: 'es2015',
    outDir: toAbsolute('../lib/locale'),
    lib: {
      entry: fg.sync(toAbsolute('../src/locale/*.ts')),
    },
  },
})
