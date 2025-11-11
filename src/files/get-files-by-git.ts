import { spawnSync } from 'child_process'
import * as path from 'path'
import { minimatch } from 'minimatch'

export async function getFilesByGit(
  include: string[],
  exclude: string[]
): Promise<string[] | null> {
  const foundFiles: string[] = []
  const mm = exclude.map((exclude) => new minimatch.Minimatch(exclude))

  for (const target of include) {
    const result = spawnSync(
      'git',
      ['ls-files', '--cached', '--others', '--exclude-standard'],
      { cwd: target }
    )

    if (result.status !== 0) {
      return null
    }

    const files = result.stdout.toString().trim().split('\n')
    foundFiles.push(
      ...files.reverse().map((file) => path.resolve(target, file))
    )
  }

  return foundFiles.filter((file) => !mm.some((mm) => mm.match(file)))
}
