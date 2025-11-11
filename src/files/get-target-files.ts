import { getFilesByGit } from './get-files-by-git'
import { getFilesBySearch } from './get-files-by-search'
import * as path from 'path'
import * as fs from 'fs'
import ansiColors from 'ansi-colors'

export type GetTargetFiles = {
  cwd: string
  include: string[]
  exclude: string[]
}

export async function getTargetFiles(
  config: GetTargetFiles
): Promise<string[]> {
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

  let files = await getFilesByGit(include, config.exclude)
  if (files === null) {
    ansiColors.red('Failed to get files by git, trying to use search...')

    const filesBySearch = await getFilesBySearch(
      config.cwd,
      include,
      config.exclude
    )

    files = filesBySearch
  }

  return files
}
