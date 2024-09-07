import ansiColors = require('ansi-colors')
import { MappedLang } from '../lib/map-lang'
import { bytesToUnit } from '../utils/size'

export default function (fileInfo: MappedLang) {
  console.log(ansiColors.bold('Overview:'))

  const totalFiles = Object.values(fileInfo).reduce(
    (acc, val) => acc + val.length,
    0
  )
  console.log(`Total files  : ${ansiColors.yellow(String(totalFiles))}`)

  const totalLines = Object.values(fileInfo).reduce(
    (acc, val) => acc + val.reduce((acc, val: any) => acc + val.lines, 0),
    0
  )
  console.log(`Total lines  : ${ansiColors.yellow(String(totalLines))}`)

  const totalSize = Object.values(fileInfo).reduce(
    (acc, val) => acc + val.reduce((acc, val: any) => acc + val.size, 0),
    0
  )
  const size = bytesToUnit(totalSize)
  console.log(
    `Total size   : ${ansiColors.yellow(String(size.size))} ${size.unit}`
  )

  const topUsedLang = Object.entries(fileInfo).sort(
    ([, a], [, b]) => b.length - a.length
  )
  console.log(`Most used languages:`)
  for (const [lang, files] of topUsedLang) {
    console.log(`  ${ansiColors.cyan(lang)}: ${files.length} files`)
  }
}
