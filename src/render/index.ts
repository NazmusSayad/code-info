import { Table } from 'cli-table3'

type RenderOptions = {
  includeUnknown: boolean
}

export function renderFiles(files: string[], options: RenderOptions) {
  const fs = require('fs') as typeof import('fs')
  const path = require('path') as typeof import('path')
  const { langList, langExtMap } = require('../constants/lang-list') as typeof import('../constants/lang-list')
  const { bytesToUnit } = require('../utils/size') as typeof import('../utils/size')
  const colors = require('ansi-colors') as typeof import('ansi-colors')

  let totalFiles = 0
  let totalSize = 0
  let totalLines = 0
  let totalCodeLines = 0
  let totalBlankLines = 0
  let indentTabsLines = 0
  let indentSpacesLines = 0
  let gcdSpaces = 0

  const byLang = new Map<
    string,
    { count: number; size: number; lines: number; code: number; blank: number }
  >()

  for (const file of files) {
    const ext = path.extname(file).slice(1).toLowerCase()
    const idx = ext ? (langExtMap as Record<string, number | undefined>)[ext] : undefined
    const lang = idx !== undefined ? langList[idx].name : 'Unknown'

    if (!options.includeUnknown && lang === 'Unknown') continue

    let size = 0
    try {
      size = fs.statSync(file).size
    } catch {}

    let fileLines = 0
    let fileCode = 0
    let fileBlank = 0
    try {
      const content = fs.readFileSync(file, 'utf8')
      const lines = content.split(/\r?\n/)
      for (const line of lines) {
        fileLines += 1
        if (line.trim().length === 0) {
          fileBlank += 1
        } else {
          fileCode += 1
          const m = line.match(/^[ \t]+/)
          if (m && m[0].length) {
            if (m[0][0] === '\t') {
              indentTabsLines += 1
            } else {
              indentSpacesLines += 1
              const n = m[0].match(/^ +/)?.[0].length ?? 0
              if (n > 0) {
                gcdSpaces = gcdSpaces === 0 ? n : gcd(gcdSpaces, n)
              }
            }
          }
        }
      }
    } catch {}

    totalFiles += 1
    totalSize += size
    totalLines += fileLines
    totalCodeLines += fileCode
    totalBlankLines += fileBlank

    const prev = byLang.get(lang)
    if (prev) {
      prev.count += 1
      prev.size += size
      prev.lines += fileLines
      prev.code += fileCode
      prev.blank += fileBlank
    } else {
      byLang.set(lang, { count: 1, size, lines: fileLines, code: fileCode, blank: fileBlank })
    }
  }

  const totalHuman = bytesToUnit(totalSize)
  const indentSummary =
    indentTabsLines > indentSpacesLines
      ? 'Tabs'
      : indentSpacesLines > 0
      ? gcdSpaces > 0
        ? `Spaces (${gcdSpaces})`
        : 'Spaces'
      : 'Mixed/None'

  console.log(colors.bold(colors.cyan('Code Statistics')))
  console.log(
    colors.dim('Files') +
      ': ' +
      colors.bold(String(totalFiles)) +
      '  ' +
      colors.dim('Size') +
      ': ' +
      colors.bold(`${totalHuman.size} ${totalHuman.unit}`) +
      '  ' +
      colors.dim('Lines') +
      ': ' +
      colors.bold(String(totalLines))
  )
  console.log(
    colors.dim('Code') +
      ': ' +
      colors.green(String(totalCodeLines)) +
      '  ' +
      colors.dim('Blank') +
      ': ' +
      colors.yellow(String(totalBlankLines)) +
      '  ' +
      colors.dim('Indentation') +
      ': ' +
      colors.magenta(indentSummary)
  )

  const rows = Array.from(byLang.entries()).sort(
    (a, b) => b[1].lines - a[1].lines || b[1].size - a[1].size || b[1].count - a[1].count
  )

  if (rows.length) {
    const header = ['Language', 'Files', 'Lines', 'Code', 'Blank', 'Size']
    const plain = rows.map(([lang, v]) => {
      const h = bytesToUnit(v.size)
      return [
        lang,
        String(v.count),
        String(v.lines),
        String(v.code),
        String(v.blank),
        `${h.size} ${h.unit}`,
      ]
    })
    const colWidths = header.map((h, i) =>
      Math.max(
        h.length,
        ...plain.map((r) => r[i].length)
      )
    )

    const padRow = (cells: string[]) =>
      cells
        .map((c, i) => (i === 0 ? c.padEnd(colWidths[i]) : c.padStart(colWidths[i])))
        .join('  ')

    console.log('')
    console.log(colors.bold(colors.underline('By language')))
    console.log(colors.bold(padRow(header)))
    for (let i = 0; i < plain.length; i++) {
      const r = plain[i]
      const colored = [
        colors.cyan(r[0]),
        colors.white(r[1]),
        colors.white(r[2]),
        colors.green(r[3]),
        colors.yellow(r[4]),
        colors.white(r[5]),
      ]
      console.log(padRow(colored))
    }
  }
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const t = b
    b = a % b
    a = t
  }
  return a
}
