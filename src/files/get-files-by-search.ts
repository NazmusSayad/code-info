import * as fs from 'fs'
import { minimatch } from 'minimatch'
import * as path from 'path'

const coreIgnore = ['.git', '.DS_Store']
export async function getFilesBySearch(
  cwd: string,
  include: string[],
  exclude: string[]
) {
  const mm = exclude.map((exclude) => new minimatch.Minimatch(exclude))

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
        if (relativePath && mm.some((mm) => mm.match(relativePath))) return []

        return findFilesFromTarget(path.join(targetPath, child))
      })
    }

    return findFilesFromTarget(fullPath)
  })

  return Array.from(new Set(totalFiles.flat(Infinity)))
}
