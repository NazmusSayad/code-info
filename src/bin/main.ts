import getFiles from '../scripts/getFiles.js'

const cwd = process.cwd()
const argsEntries = process.argv
  .filter((arg) => arg.startsWith('--'))
  .map((arg) => {
    const argData = arg.replace(/^--/, '').split('=')
    if (argData.length !== 2) {
      throw new Error(`Invalid arg: ${arg}`)
    }
    return argData
  })

const args = Object.fromEntries(argsEntries)
for (let key in args) {
  switch (key) {
    case 'include':
    case 'exclude':
      args[key] = args[key].split(',')
      break
  }
}

const filesList = getFiles(cwd, args)
console.log(filesList)
