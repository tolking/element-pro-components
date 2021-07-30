import { resolve } from 'path'
import { defineConfig } from 'vite'
import babel from 'rollup-plugin-babel'
import vue from '@vitejs/plugin-vue'
import { name } from './package.json'

const camelize = (name: string) =>
  name.replace(/(^|-)(\w)/g, (a, b, c) => c.toUpperCase())

export default defineConfig({
  build: {
    target: 'es2015',
    outDir: resolve(__dirname, 'lib'),
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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
      plugins: [
        babel({
          exclude: 'node_modules/**',
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
        }),
      ],
    },
  },
  plugins: [vue()],
})
