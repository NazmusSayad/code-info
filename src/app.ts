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
    unknown: NoArg.boolean().description('Include unknown language files'),
    files: NoArg.boolean().description('Render found files'),
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

  const filteredFiles = flags.ext?.length
    ? targetedFiles.filter((file) =>
        flags.ext.some((ext) => file.endsWith(ext))
      )
    : targetedFiles

  if (flags.files) {
    filteredFiles.forEach((file) => console.log(file))
  }

  renderFiles(filteredFiles, {
    includeUnknown: flags.unknown,
  })
})

export default app
