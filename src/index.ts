import { GetFiles } from './scripts/_getFiles.js'
import _getFilesInfo from './scripts/getFilesInfo.js'
import _getDetails from './scripts/getDetails.js'
import _getOverview from './scripts/getOverview.js'

export const getFilesInfo = _getFilesInfo
export const getDetails = _getDetails
export const getOverview = _getOverview

export default (dir?: string, config?: GetFiles) => {
  const files = getFilesInfo(dir, config)
  const details = getDetails(files)
  const overview = getOverview(details)

  return {
    files,
    overview,
    details,
  }
}
