import lsf from 'node-ls-files'
import fs from 'fs'
import path from 'path'
import gitIgnore from 'ignore'
import gitignoreParse from 'parse-gitignore'

const gitignorePath = path.resolve('.gitignore')

export default (targetDir, options) => {
  let ig = gitIgnore().add([
    'yarn.lock',
    'pnpm-lock.yaml',
    'package-lock.json',
    ...(options.exclude?.map((ext) => `*.${ext}`) ?? []),
    ...(options.include?.map((ext) => `!*.${ext}`) ?? []),
  ])

  if (fs.existsSync(gitignorePath)) {
    const gitignoreText = fs.readFileSync(gitignorePath, 'utf-8')
    const { patterns } = gitignoreParse(gitignoreText)
    ig = ig.add(patterns)
  }

  return lsf.sync(targetDir, {
    filter: ({}, relative) => {
      const igResult = ig.test(relative)
      return !igResult.ignored || igResult.unignored
    },
  })
}
