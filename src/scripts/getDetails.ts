import { FileInfo } from './getFilesInfo'
import langList from '../data/langList.js'

export interface Details {
  name: string
  size: number
  files: number
  lines: number
  avgCharPerLine: number
}

export default (details: FileInfo[]): Details[] => {
  const result: any = {}
  const finalResult: Details[] = []

  details.forEach((dt) => {
    result[dt.ext] ??= []
    result[dt.ext].push(dt)
  })

  for (let key in result) {
    const details: FileInfo[] = result[key]
    let totalCharPerLine: number = 0
    let totalSize: number = 0
    let totalLines: number = 0

    details.forEach((dt) => {
      totalCharPerLine += dt.avgCharPerLine
      totalLines += dt.lines.length
      totalSize += dt.size
    })

    finalResult.push({
      name: langList[key],
      files: details.length,
      lines: totalLines,
      avgCharPerLine: Math.round(totalCharPerLine / details.length),
      size: +totalSize.toFixed(1),
    })
  }

  return finalResult.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
}
