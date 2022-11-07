console.clear()
import fs from 'fs'
import cmd from 'child_process'
import builder from './builder.js'
const packagePath = './package.json'

const param = process.argv.at(-1)
const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

const updateVersion = (state = 1) => {
  const version = packageData.version.split('.').map((v) => +v)

  switch (param) {
    case 'patch':
      version[2] += state
      break

    case 'minor':
      version[1] += state
      version[2] = 0
      break

    case 'major':
      version[0] += state
      version[1] = 0
      version[2] = 0
      break

    default:
      throw new Error('Invalid update type')
  }

  packageData.version = version.join('.')
  fs.writeFileSync(packagePath, JSON.stringify(packageData, null, '  '))
}

builder.build()
updateVersion()

builder.runCmd('npm publish')
builder.runCmd('git add .')
builder.runCmd(`git commit -m "update ${param}@${packageData.version}"`)
builder.runCmd('git push')
