import { FileInfo } from './get-file-info'
import { langExtMap, langList } from './lang-list'

export type MappedLang = Record<string, FileInfo[]>
export default function (
  fileRecords: FileInfo[],
  includeUnknown: boolean
): MappedLang {
  const output: MappedLang = {}

  fileRecords.forEach((fileInfo) => {
    const ext = fileInfo.path.split('.').pop()
    let langName = langList[langExtMap[ext]]?.name

    if (!langName) {
      if (includeUnknown) {
        langName = 'Unknown'
      } else {
        return
      }
    }

    output[langName] ??= []
    output[langName].push(fileInfo)
  })

  return output
}
