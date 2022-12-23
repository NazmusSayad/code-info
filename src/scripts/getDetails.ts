import { FileInfo } from './getFilesInfo'
import langList, { langExtList } from '../data/langList.js'

export interface Details {
  name: string
  size: number
  files: number
  lines: number
  avgCharPerLine: number
  avgLinePerFile: number
}

export default (details: FileInfo[]): Details[] => {
  const result: any = {}
  const finalResult: Details[] = []

  details.forEach((dt) => {
    const index = langExtList[dt.ext]
    result[index] ??= []
    result[index].push(dt)
  })

  for (let index in result) {
    const details: FileInfo[] = result[index]
    let totalCharPerLine: number = 0
    let totalSize: number = 0
    let totalLines: number = 0

    details.forEach((dt) => {
      totalCharPerLine += dt.avgCharPerLine
      totalLines += dt.lines.length
      totalSize += dt.size
    })

    finalResult.push({
      name: langList[+index].name,
      files: details.length,
      lines: totalLines,
      avgCharPerLine: Math.round(totalCharPerLine / details.length),
      avgLinePerFile: Math.round(totalLines / details.length),
      size: +totalSize.toFixed(1),
    })
  }

  return finalResult.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
}
