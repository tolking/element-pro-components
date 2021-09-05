import { resolve } from 'path'
import { copyFileSync, mkdir, writeFileSync } from 'fs'
import execa from 'execa'

export function toAbsolute(path: string): string {
  return resolve(__dirname, path).replace(/\\/, '/')
}

export function camelize(name: string): string {
  return name.replace(/(^|-)(\w)/g, (a, b, c) => c.toUpperCase())
}

export function hyphenate(name: string): string {
  return name.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

export async function getFileUpdatedTime(filePath: string): Promise<string> {
  const { stdout } = await execa('git', [
    '--no-pager',
    'log',
    '-1',
    '--format=%at',
    filePath,
  ])
  const time = Number.parseInt(stdout, 10) * 1000

  return new Date(time).toISOString()
}

export function writeFileRecursive(path: string, buffer: string): void {
  const lastPath = path.substring(0, path.lastIndexOf('/'))

  mkdir(lastPath, { recursive: true }, () => {
    writeFileSync(path, buffer)
  })
}

export function copyFileRecursive(src: string, dest: string): void {
  const lastPath = dest.substring(0, dest.lastIndexOf('/'))

  mkdir(lastPath, { recursive: true }, () => {
    copyFileSync(src, dest)
  })
}
