import * as fs from 'fs'

export type FileInfo = {
  path: string
  size: number
  words: number
  lines: number
  characters: number
}

function getInfo(filePath: string): FileInfo {
  const stat = fs.statSync(filePath)
  const content = fs.readFileSync(filePath, 'utf-8')

  return {
    path: filePath,
    size: stat.size,
    characters: content.length,
    words: content.split(' ').length,
    lines: content.split('\n').length,
  }
}

export default function (files: string[]) {
  return files.map((file) => getInfo(file))
}
