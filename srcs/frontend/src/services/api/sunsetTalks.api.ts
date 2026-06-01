import { fetchWithConfig } from './index'
import type { SunsetTalksContract } from '../../api/contracts'

type Raw = SunsetTalksContract[] | { results?: SunsetTalksContract[] }

export const sunsetTalksApi = {
    getTalks: async (): Promise<SunsetTalksContract[]> => {
        const data = await fetchWithConfig<Raw>('/sunset-talks/')
        return Array.isArray(data) ? data : (data.results ?? [])
    }
}
