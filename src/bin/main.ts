import argv from './argv.js'
import path from 'path'
import Table from 'cli-table'
import ac from 'ansi-colors'

import getFilesInfo from '../scripts/getFilesInfo.js'
import getDetails from '../scripts/getDetails.js'
import getOverview from '../scripts/getOverview.js'

const targetDir = path.resolve(argv._[0] ?? '')

const details = getFilesInfo(targetDir, {
  exclude: argv['--exclude'],
  include: argv['--include'],
  type: argv['--type'],
})

const finalResult = getDetails(details)
const overview = getOverview(finalResult)

console.log()
const group = (label: string, options: any) => {
  console.log('', ac.blueBright.bold(label + ':'))
  console.log(
    new Table({
      colAligns: ['left', 'middle', 'right', 'right', 'right'],
      ...options,
    }).toString()
  )
  console.log()
}

const logLangStats = (stats: any) => {
  return {
    head: ['Name', 'Percentage'],
    rows: stats.map(({ name = '', percentage = '' }) => {
      return [name, percentage + '%']
    }),
  }
}

group('Basic Overview', {
  head: ['Files', 'Lines', 'ACPL', 'Size (bytes)'],
  rows: [
    [
      overview.basic.files.toString(),
      overview.basic.lines.toString(),
      overview.basic.avgCharPerLine.toString(),
      overview.basic.size.toString(),
    ],
  ],
})

group(
  'Most used languages by code lines',
  logLangStats(overview.mostUsedBySize)
)
group(
  'Most used languages by file sizes',
  logLangStats(overview.mostUsedByLines)
)

group('Languages details', {
  head: ['Name', 'Files', 'Lines', 'ACPL', 'Size (bytes)'],
  rows: finalResult.map(({ name, lines, size, files, avgCharPerLine }) => {
    return [name, files, lines, avgCharPerLine, size]
  }),
})
