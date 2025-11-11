import NoArg from 'noarg'
import * as path from 'path'
import { renderFiles } from './render'
import { getTargetFiles } from './files/get-target-files'

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

app.on(async ([folders], flags) => {
  const cwd = path.resolve(flags.cwd)
  const exclude = flags.exclude?.filter(Boolean) ?? []

  const targetedFiles = await getTargetFiles({
    cwd: cwd,
    exclude: exclude,
    include: folders.length ? folders : [cwd],
  })

  renderFiles(targetedFiles)
})

export default app
