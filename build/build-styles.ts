import { readFile, readFileSync } from 'fs'
import fg from 'fast-glob'
import postcss from 'postcss'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import { writeFileRecursive, copyFileRecursive, toAbsolute } from './utils'

function transformSSR(input: string) {
  const fileContent = readFileSync(input, 'utf-8')
  return fileContent.replace(/import\s*'(.*)'/g, (_, item) => {
    let path = item

    if (/^element-plus/.test(item)) {
      path = item.replace(/\/es\//g, '/lib/') + '.js'
    } else if (!/\.css$/.test(item)) {
      path = `${path}.cjs`
    }

    return `require('${path}')`
  })
}

function transform(input: string) {
  const outDir = input.replace(/\/src\//, '/lib/').replace(/\.ts$/, '.js')

  if (input.endsWith('.css')) {
    readFile(input, (err, css) => {
      if (err) return console.error(err)
      postcss([postcssImport, postcssPresetEnv({ stage: 1 }), autoprefixer])
        .process(css, { from: input, to: outDir })
        .then((result) => {
          writeFileRecursive(outDir, result.css)
        })
    })
  } else {
    const SSROutDir = outDir.replace(/\.js$/, '.cjs')
    const SSRStyles = transformSSR(input)
    writeFileRecursive(SSROutDir, SSRStyles)
    copyFileRecursive(input, outDir)
  }
}

(() => {
  fg.sync(toAbsolute('../src/styles/*')).map(transform)
  console.log('build-styles done')
})()
