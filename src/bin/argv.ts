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

export default args
