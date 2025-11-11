import NoArg from 'noarg'
import * as path from 'path'
import { renderFiles } from './render'
import { getTargetFiles } from './files/get-target-files'
import { langList } from './constants/lang-list'
import ansiColors from 'ansi-colors'

const app = NoArg.create('app', {
  listArgument: {
    name: 'folders',
    type: NoArg.string(),
    description: 'List of folders to process',
  },

  flags: {
    cwd: NoArg.string().default('.').description('Root directory'),
    unknown: NoArg.boolean().description('Include unknown language files'),
    verbose: NoArg.boolean().description('Verbose output'),

    ignore: NoArg.array(NoArg.string()).description('Folders to ignore'),
    lang: NoArg.array(NoArg.string()).description('Languages to include'),
    ext: NoArg.array(NoArg.string()).description('File extensions to include'),
  },
})

app.on(async ([folders], flags) => {
  const cwd = path.resolve(flags.cwd)
  const ignore = flags.ignore?.filter(Boolean) ?? []

  const targetedFiles = await getTargetFiles({
    cwd: cwd,
    exclude: ignore,
    include: folders.length ? folders : [cwd],
  })

  if (targetedFiles.length === 0) {
    return ansiColors.red('No files found')
  }

  if (flags.verbose) {
    console.log(targetedFiles)
  }

  const includedExtensions: string[] = []
  if (flags.ext?.length) {
    includedExtensions.push(...flags.ext.filter(Boolean))
  }

  if (flags.lang?.length) {
    flags.lang.forEach((name) => {
      const lang = langList.find(
        (l) => l.name === name || l.extensions.some((ext) => ext === name)
      )

      includedExtensions.push(...lang.extensions)
    })
  }

  const filteredFiles = flags.lang?.length
    ? targetedFiles.filter((file) =>
        includedExtensions.some((ext) => file.endsWith(`.${ext}`))
      )
    : targetedFiles

  if (flags.verbose) {
    console.log(filteredFiles)
  }

  renderFiles(filteredFiles, {
    includeUnknown: flags.unknown,
  })
})

export default app
