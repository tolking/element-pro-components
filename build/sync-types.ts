import fg from 'fast-glob'
import { copyFileRecursive, toAbsolute } from './utils'

function transform(input: string) {
  const outDir = input.replace(/\/types\//, '/lib/')
  copyFileRecursive(input, outDir)
}

;(() => {
  fg.sync([
    toAbsolute('../types/locale/*'),
    toAbsolute('../types/styles/*'),
  ]).map(transform)
  console.log('sync-types done')
})()
