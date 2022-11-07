console.clear()
const { default: local } = require('../dist/cjs/index.js')
console.log({ local })

console.log('-----------------------')

const { default: npm } = require('@nazmussayad/npm')
console.log({ npm })
