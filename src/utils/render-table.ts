import CliTable3 from 'cli-table3'

type Abc<A extends string[]> = {
  readonly [K in keyof A]: any
}

export default function <const THeaders extends string[]>(
  headers: THeaders,
  ...rows: Abc<THeaders>[]
) {
  const table = new CliTable3({
    head: headers,
    colAligns: ['left', 'right', 'right', 'right'],
  })

  rows.forEach((row) => table.push(row as any))
  console.log(table.toString())
}
