import fs from 'fs'
import path from 'path'
import getFiles, { GetFiles } from './_getFiles.js'

export interface FileInfo {
  path: string
  ext: string
  size: number
  avgCharPerLine: number
  lines: number[]
}

export default (targetDir?: string, config?: GetFiles): FileInfo[] => {
  const files = getFiles(targetDir, config)

  const fileDetails = files.map((filePath): FileInfo => {
    const extname = path.extname(filePath).slice(1)
    const rawData = fs.readFileSync(filePath, 'utf8')
    const rawLines = rawData.split('\n')

    const linesInfo = rawLines.map((line) => line.length)
    const totalChars = linesInfo.reduce((acc, curr) => acc + curr, 0)

    return {
      path: filePath,
      ext: extname,
      size: fs.lstatSync(filePath).size,
      avgCharPerLine: totalChars / linesInfo.length,
      lines: linesInfo,
    }
  })

  return fileDetails
}
