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
  const cwd = path.resolve(flags.cwd)
  const ext = flags.ext?.filter(Boolean) ?? []
  const exclude = flags.exclude?.filter(Boolean) ?? []

  const targetedFiles = getTargetFiles({
    cwd: cwd,
    extensions: ext,
    exclude: exclude,
    include: folders.length ? folders : [cwd],
  })

  const fileInfo = getFileInfo(targetedFiles)
  const mappedFiles = mapLang(fileInfo, flags.unknown)
  const totalLanguages = Object.keys(mappedFiles).length

  render(mappedFiles, {
    renderOverview: true,
    renderLanguages: totalLanguages > 1 && true,
    renderMostUsedBySize: totalLanguages > 1 && true,
    renderMostUsedByLine: totalLanguages > 1 && true,
  })
})

export default app
