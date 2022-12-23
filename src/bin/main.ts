import argv from './argv.js'
import Table from 'cli-table'
import ac from 'ansi-colors'

import getAll from '../index.js'
import fileSize from '../data/fileSize.js'

const { overview, details } = getAll(argv._[0], {
  exclude: argv['--exclude'],
  include: argv['--include'],
  type: argv['--type'],
})

console.log()

const getFileSizeLabel = (label: string) => {
  return (
    label +
    // @ts-ignore
    ` (${fileSize[argv['--size']] ? argv['--size']?.toUpperCase() : 'Bytes'})`
  )
}
const getFileSize = (bytes: number) => {
  // @ts-ignore
  const base = fileSize[argv['--size']] ?? 0
  if (!base) return bytes
  return (bytes / base).toFixed(2)
}

const group = (label: string, options: any) => {
  console.log('', ac.blueBright.bold(label + ':'))
  console.log(
    new Table({
      colAligns: ['left', 'middle', 'right', 'right', 'right', 'right'],
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
  head: ['Files', 'Lines', 'LPF', 'CPL', getFileSizeLabel('Size')],
  rows: [
    [
      overview.basic.files,
      overview.basic.lines,
      overview.basic.avgLinePerFile,
      overview.basic.avgCharPerLine,
      getFileSize(overview.basic.size),
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
  head: ['Name', 'Files', 'Lines', 'LPF', 'CPL', getFileSizeLabel('Size')],
  rows: details.map(
    ({ name, lines, size, files, avgCharPerLine, avgLinePerFile }) => {
      return [
        name,
        files,
        lines,
        avgLinePerFile,
        avgCharPerLine,
        getFileSize(size),
      ]
    }
  ),
})
