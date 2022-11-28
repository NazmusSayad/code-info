import { readFileSync } from 'fs'

export default (filePath: string) => {
  const data = readFileSync(filePath, 'utf8')
  const lines = data.split('\n')
  return {
    path: filePath,
    lines: lines.map((line) => line.length),
  }
}
