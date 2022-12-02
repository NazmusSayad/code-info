import { Details } from './getDetails.js'

interface OverviewBasic {
  size: number
  files: number
  lines: number
  avgCharPerLine: number
}

interface OverviewLangStats {
  name: string
  percentage: number
}

export interface Overview {
  basic: OverviewBasic
  mostUsedBySize: OverviewLangStats[]
  mostUsedByLines: OverviewLangStats[]
}

const sortAlgoFn = (something: any[]) => {
  return something.sort((a: any, b: any) => b.percentage - a.percentage)
}

export default (details: Details[]): any => {
  const basic: OverviewBasic = {
    size: 0,
    lines: 0,
    files: 0,
    avgCharPerLine: 0,
  }
  const mostUsedBySize: OverviewLangStats[] = []
  const mostUsedByLines: OverviewLangStats[] = []

  details.forEach((dt) => {
    basic.size += dt.size
    basic.files += dt.files
    basic.lines += dt.lines
    basic.avgCharPerLine += dt.avgCharPerLine
  })

  basic.avgCharPerLine = Math.round(basic.avgCharPerLine / details.length)

  details.forEach((dt) => {
    const getPercentage = (key: string) => {
      // @ts-ignore
      return +((dt[key] / basic[key]) * 100).toFixed(1)
    }

    mostUsedBySize.push({
      name: dt.name,
      percentage: getPercentage('size'),
    })

    mostUsedByLines.push({
      name: dt.name,
      percentage: getPercentage('lines'),
    })
  })

  const output: Overview = {
    basic,
    mostUsedBySize: sortAlgoFn(mostUsedBySize),
    mostUsedByLines: sortAlgoFn(mostUsedByLines),
  }
  return output
}
