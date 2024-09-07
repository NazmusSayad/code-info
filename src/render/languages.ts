import ansiColors from 'ansi-colors'
import { MappedLang } from '../lib/map-lang'
import renderTable from '../utils/render-table'
import { bytesToUnit } from '../utils/size'

export default function (fileInfo: MappedLang) {
  const topUsedLang = Object.entries(fileInfo).sort(
    ([, a], [, b]) => b.length - a.length
  )

  console.log(ansiColors.bold.blue('Languages:'))

  renderTable(
    ['Language  ', '  Files', '  Lines', '  Size'],
    ...topUsedLang.map(([lang, files]) => {
      const totalLines = files.reduce((acc, val) => acc + val.lines, 0)
      const totalSize = bytesToUnit(
        files.reduce((acc, val) => acc + val.size, 0)
      )

      return [
        ansiColors.cyan(lang),
        ansiColors.yellow(String(files.length)),
        ansiColors.yellow(String(totalLines)),
        `${ansiColors.yellow(String(totalSize.size))} ${totalSize.unit}`,
      ] as const
    })
  )
}
