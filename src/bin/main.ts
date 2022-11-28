import argv from './argv.js'
import getFileInfo from '../scripts/getFileInfo.js'
import getFiles from '../scripts/getFiles.js'

const cwd = process.cwd()
const filesList = getFiles(cwd, {
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
