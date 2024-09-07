import * as fs from 'fs'
import * as path from 'path'
import createIg from './create-ig'

type GetTargetFiles = {
  cwd: string
  include: string[]
  exclude: string[]
  extensions: string[]
}

const coreIgnore = ['.git', '.DS_Store']
export default function (config: GetTargetFiles) {
  const ig = createIg(config.cwd, config.exclude)

  const totalFiles = config.include.map((item) => {
    const fullPath = path.resolve(config.cwd, item)

    function findFilesFromTarget(targetPath: string) {
      const stat = fs.statSync(targetPath)
      if (!stat.isDirectory()) {
        if (config.extensions.length) {
          const ext = path.extname(targetPath).slice(1)
          if (!config.extensions.includes(ext)) return []
        }

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
