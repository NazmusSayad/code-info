import { GetFiles } from './scripts/_getFiles.js'
import getFilesInfo from './scripts/getFilesInfo.js'
import getDetails from './scripts/getDetails.js'
import getOverview from './scripts/getOverview.js'

export { getFilesInfo, getDetails, getOverview }
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
