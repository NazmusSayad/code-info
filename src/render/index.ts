import * as fs from 'fs'
import * as path from 'path'
import Table from 'cli-table3'
import { langList, langExtMap } from '../constants/lang-list'
import { bytesToUnit } from '../utils/size'
import ansiColors from 'ansi-colors'

type RenderOptions = {
  includeUnknown: boolean
}

export function renderFiles(files: string[], options: RenderOptions) {
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
    const idx = ext
      ? (langExtMap as Record<string, number | undefined>)[ext]
      : undefined
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
      byLang.set(lang, {
        count: 1,
        size,
        lines: fileLines,
        code: fileCode,
        blank: fileBlank,
      })
    }
  }

  const summary1 = new Table({
    head: ['Files', 'Lines', 'Size', 'Code', 'Blank', 'Languages'].map((h) =>
      ansiColors.dim.underline.white(h)
    ),
    colAligns: ['left', 'left', 'left', 'right', 'right', 'right'],
    chars: {
      'bottom-left': '',
      'bottom-mid': '',
      'bottom-right': '',
      'left-mid': '',
      'mid-mid': '',
      'right-mid': '',
      'top-left': '',
      'top-mid': '',
      'top-right': '',
      bottom: '',
      left: '',
      middle: '  ',
      mid: '',
      right: '',
      top: '',
    },
  })

  summary1.push([
    String(totalFiles),
    String(totalLines),
    bytesToUnit(totalSize).text,
    String(totalCodeLines),
    String(totalBlankLines),
    String(byLang.size),
  ])

  console.log(summary1.toString())

  const rows = Array.from(byLang.entries()).sort(
    (a, b) =>
      b[1].lines - a[1].lines ||
      b[1].size - a[1].size ||
      b[1].count - a[1].count
  )

  if (rows.length) {
    const langHead = ['Language', 'Files', 'Lines', 'Code', 'Blank', 'Size']

    const table = new Table({
      head: langHead.map((h) => ansiColors.dim.underline.white(h)),
      colAligns: ['left', 'right', 'right', 'right', 'right', 'right'],
      chars: {
        'bottom-left': '',
        'bottom-mid': '',
        'bottom-right': '',
        'left-mid': '',
        'mid-mid': '',
        'right-mid': '',
        'top-left': '',
        'top-mid': '',
        'top-right': '',
        bottom: '',
        left: '',
        middle: '  ',
        mid: '',
        right: '',
        top: '',
      },
    })

    rows.forEach(([lang, v]) => {
      table.push([
        ansiColors.cyan(lang),
        String(v.count),
        String(v.lines),
        String(v.code),
        String(v.blank),
        bytesToUnit(v.size).text,
      ])
    })

    console.log('')
    console.log(table.toString())
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
