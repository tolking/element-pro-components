import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import replace from '@rollup/plugin-replace'
import babel from 'rollup-plugin-babel'
import { name, version } from './package.json'

// Gets the components name and converts it to camelize
const pluginName = name.replace(/(^|-)(\w)/g, (a, b, c) => c.toUpperCase())

/**
 * type {import('vite').UserConfig}
 */
export default defineConfig({
  root: path.resolve(__dirname, 'example'),
  build: {
    target: 'es2015',
    outDir: path.resolve(__dirname, 'lib'),
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: pluginName,
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
      external: ['vue', 'vue-router', '@vue/shared', 'element-plus'],
      plugins: [
        replace({ 'process.env.VERSION': JSON.stringify(version) }),
        babel({
          exclude: 'node_modules/**',
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
          presets: [['@babel/preset-env']],
        }),
      ],
    },
  },
  plugins: [vue()],
})
