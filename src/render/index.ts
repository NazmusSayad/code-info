import { MappedLang } from '../lib/map-lang'
import overview from './overview'

export type RenderOptions = {
  renderOverview: boolean
  renderLanguages: boolean
  renderMostUsedBySize: boolean
  renderMostUsedByLine: boolean
}

export default function (fileInfo: MappedLang, options: RenderOptions) {
  if (options.renderOverview) {
    overview(fileInfo)
  }
}
