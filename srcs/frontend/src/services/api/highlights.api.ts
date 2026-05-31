import { fetchWithConfig } from '.'
import type { HighlightContract } from '../../api/contracts'

export const highlightsApi = {
    getHighlights: () => fetchWithConfig<HighlightContract[]>('/highlights/'),
}
