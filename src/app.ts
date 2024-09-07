import NoArg from 'noarg'
import * as path from 'path'
import render from './render'
import getTargetFiles from './lib/get-target-files'
import getFileInfo from './lib/get-file-info'
import mapLang from './lib/map-lang'

const app = NoArg.create('app', {
  listArgument: {
    name: 'folders',
    type: NoArg.string(),
    description: 'List of folders to process',
  },

  flags: {
    cwd: NoArg.string().default('.').description('Root directory'),
    exclude: NoArg.array(NoArg.string()).description('Folders to exclude'),
    ext: NoArg.array(NoArg.string()).description('File extensions to include'),
    unknown: NoArg.boolean().description('Include unknown files'),
  },
})

app.on(([folders], flags) => {
  flags.cwd = path.resolve(flags.cwd)
  flags.ext = flags.ext?.filter(Boolean) ?? []
  flags.exclude = flags.exclude?.filter(Boolean) ?? []

  const targetedFiles = getTargetFiles({
    cwd: flags.cwd,
    extensions: flags.ext ?? [],
    exclude: flags.exclude ?? [],
    include: folders.length ? folders : [flags.cwd],
  })

  const fileInfo = getFileInfo(targetedFiles)
  const mappedFiles = mapLang(fileInfo, flags.unknown)
  render(mappedFiles, {
    renderOverview: true,
    renderLanguages: true,
    renderMostUsedBySize: false,
    renderMostUsedByLine: false,
  })
})

export default app
