import fs from 'fs'
import path from 'path'
import cmd from 'child_process'
import lsFiles from 'node-ls-files'

class Build {
  #getCommand(path) {
    return `tsc -p ${path}`
  }

  runCmd(cmdStr) {
    try {
      const res = cmd.execSync(cmdStr)?.toString().trim()
      res && console.log(res)
    } catch (err) {
      const msg = (err.output ?? err.stderr)?.toString().trim()
      msg && console.log(msg)
    }
  }

  cjsCmd = 'tsconfig-cjs.json'
  mjsCmd = 'tsconfig-mjs.json'

  outputDir = './dist'
  mjsDir = './mjs'
  cjsDir = './cjs'

  __nodeCode = `// CommonJs module feature 
import{fileURLToPath as ______file___URL___To___Path______}from'url';
let __filename=______file___URL___To___Path______(import.meta.url);
let __dirname=______file___URL___To___Path______(new URL('.',import.meta.url));
`

  constructor() {
    this.cjsCmd = this.#getCommand(this.cjsCmd)
    this.mjsCmd = this.#getCommand(this.mjsCmd)

    this.outputDir = path.resolve(this.outputDir)
    this.cjsDir = path.join(this.outputDir, this.cjsDir)
    this.mjsDir = path.join(this.outputDir, this.mjsDir)
  }

  build() {
    console.log('Cleaning up...')
    this.cleanBuild()
    this.copyFiles()

    console.log('Build started...')
    this.runCjsBuild()
    this.runMjsBuild()
  }

  cleanBuild() {
    if (!fs.existsSync(this.outputDir)) return
    const list = fs.readdirSync(this.outputDir)
    list.forEach((item) => {
      fs.rmSync(path.join(this.outputDir, item), {
        recursive: true,
        force: true,
      })
    })
  }

  copyFiles() {
    this.addPackageData(this.outputDir, 'commonjs')
    this.addPackageData(this.cjsDir, 'commonjs')
    this.addPackageData(this.mjsDir, 'module')
  }

  runCjsBuild() {
    this.runCmd(this.cjsCmd)
  }

  runMjsBuild() {
    this.runCmd(this.mjsCmd)

    const files = lsFiles.sync(this.mjsDir, {
      filter: /\.m?js$/,
    })
    files.forEach((file) => this.prepend__nodeCode(file))
  }

  addPackageData(dir, type) {
    const content = {
      type,
    }
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    const target = path.join(dir, './package.json')
    fs.writeFileSync(target, JSON.stringify(content))
  }

  prepend__nodeCode(file) {
    const data = fs.readFileSync(file, 'utf-8')

    if (data.includes('__filename') || data.includes('__dirname')) {
      fs.writeFileSync(file, this.__nodeCode + data)
    }
  }
}

export default new Build()
