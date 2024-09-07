import ansiColors from 'ansi-colors'
import { MappedLang } from '../lib/map-lang'
import { bytesToUnit } from '../utils/size'

function getTotal(key: string, fileInfo: MappedLang) {
  return Object.values(fileInfo).reduce(
    (acc, val) => acc + val.reduce((acc, val: any) => acc + val[key], 0),
    0
  )
}

export default function (fileInfo: MappedLang) {
  console.log(ansiColors.bold.blue('Overview:'))

  const totalFiles = Object.values(fileInfo).reduce(
    (acc, val) => acc + val.length,
    0
  )
  const totalLines = getTotal('lines', fileInfo)
  const totalSize = getTotal('size', fileInfo)
  const size = bytesToUnit(totalSize)

  console.log(`Total files  : ${ansiColors.yellow(String(totalFiles))}`)
  console.log(`Total lines  : ${ansiColors.yellow(String(totalLines))}`)
  console.log(
    `Total size   : ${ansiColors.yellow(String(size.size))} ${size.unit}`
  )
}
