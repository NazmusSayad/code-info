import * as fs from 'fs'
import * as path from 'path'
import createIg from './create-ig'

const coreIgnore = ['.git', '.DS_Store']
export async function getFilesBySearch(
  cwd: string,
  include: string[],
  exclude: string[]
) {
  const ig = createIg(cwd, [
    ...exclude,
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
  ])

  const totalFiles = include.map((item) => {
    const fullPath = path.resolve(cwd, item)

    function findFilesFromTarget(targetPath: string) {
      const stat = fs.statSync(targetPath)
      if (!stat.isDirectory()) {
        return targetPath
      }

      return fs.readdirSync(targetPath).map((child) => {
        const childPath = path.join(targetPath, child)

        // Ignore core files
        if (coreIgnore.includes(child)) return []

        // Ignore gitignore files
        const relativePath = path.relative(fullPath, childPath)
        if (relativePath && ig.ignores(relativePath)) return []

        return findFilesFromTarget(path.join(targetPath, child))
      })
    }

    return findFilesFromTarget(fullPath)
  })

  return Array.from(new Set(totalFiles.flat(Infinity)))
}
