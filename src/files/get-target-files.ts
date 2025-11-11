import { getFilesByGit } from './get-files-by-git'
import { getFilesBySearch } from './get-files-by-search'
import * as path from 'path'
import * as fs from 'fs'

export type GetTargetFiles = {
  cwd: string
  include: string[]
  exclude: string[]
}

export async function getTargetFiles(config: GetTargetFiles) {
  const include: string[] = []

  for (const item of config.include) {
    const resolvedPath = path.resolve(config.cwd, item)

    if (
      !fs.existsSync(resolvedPath) ||
      !fs.statSync(resolvedPath).isDirectory() ||
      include.some((p) => resolvedPath.startsWith(p))
    ) {
      continue
    }

    include.push(resolvedPath)
  }

  const files = await getFilesByGit(include, config.exclude)
  if (files !== null) return files

  const filesBySearch = await getFilesBySearch(
    config.cwd,
    include,
    config.exclude
  )

  return filesBySearch
}
