import fs from 'fs'
import path from 'path'
import gitIgnore from 'ignore'
import ls from 'node-ls-files'
import gitignoreParse from 'parse-gitignore'
import { langExtList } from '../data/langList.js'
const gitignorePath = path.resolve('./.gitignore')

export interface GetFiles {
  exclude?: string[]
  include?: string[]
  type?: string[]
}

export default (
  targetDir: string = '.',
  { exclude = [], include = [], type = [] }: GetFiles = {}
) => {
  // Gitignore.....
  let ig = gitIgnore().add([
    'yarn.lock',
    'pnpm-lock.yaml',
    'package-lock.json',
    ...exclude.map((ext) => `*.${ext}`),
    ...include.map((ext) => `!*.${ext}`),
  ])

  if (fs.existsSync(gitignorePath)) {
    const gitignoreText = fs.readFileSync(gitignorePath, 'utf-8')

    // @ts-ignore
    const { patterns } = gitignoreParse(gitignoreText)
    ig = ig.add(patterns)
  }

  return ls.sync(targetDir, {
    filter: ({ ext }: any, relative: string) => {
      const igResult = ig.test(relative)
      if (igResult.ignored && !igResult.unignored) return

      if (type.length) {
        return type.includes(ext.slice(1))
      }

      if (langExtList[ext.slice(1)] !== undefined) return true
    },
  })
}
