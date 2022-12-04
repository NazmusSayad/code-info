import arg from 'arg'

const args = arg({
  '--type': [String],
  '--exclude': [String],
  '--include': [String],

  '-t': '--type',
  '-e': '--exclude',
  '-i': '--include',
})

if ((args['--exclude'] || args['--include']) && args['--type']) {
  throw new Error(
    'Exclude or include cannot be specified when type is specified'
  )
}
const makeArray = (flag: '--type' | '--exclude' | '--include') => {
  const array = args[flag]
  if (!array) return

  const newArray = array?.map((str: string) => str.split(',')).flat()
  args[flag] = newArray
}

makeArray('--type')
makeArray('--exclude')
makeArray('--include')
export default args
