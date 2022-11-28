import argv from './argv.js'
import getFileInfo from '../scripts/getFileInfo.js'
import getFiles from '../scripts/getFiles.js'
import path from 'path'

const targetDir = path.resolve(argv._[0] ?? '')

const filesList = getFiles(targetDir, {
  exclude: argv['--exclude'],
  include: argv['--include'],
  type: argv['--type'],
})

console.log('Files:', filesList.length)

let lineCount = 0
filesList.forEach((file) => {
  const { lines } = getFileInfo(file)
  lineCount += lines.length
})

console.log('Lines:', lineCount)
