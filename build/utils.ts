import { copyFileSync, mkdir, writeFileSync } from 'fs'

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
