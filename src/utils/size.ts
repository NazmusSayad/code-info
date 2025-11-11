export function bytesToUnit(bytes: number, decimals: number = 2) {
  if (bytes === 0) return { size: 0, unit: 'B' }
  const k = 1024
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const size = parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))
  const text = `${size}${units[i]}`
  return { size, unit: units[i], text }
}
