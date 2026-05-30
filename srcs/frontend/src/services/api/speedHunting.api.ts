import { fetchWithConfig } from './index'
import type { SpeedHuntingContract } from '../../api/contracts'

type Raw = SpeedHuntingContract[] | { results?: SpeedHuntingContract[] }

export const speedHuntingApi = {
    getCompanies: async (): Promise<SpeedHuntingContract[]> => {
        const data = await fetchWithConfig<Raw>('/speed-hunting/')
        return Array.isArray(data) ? data : (data.results ?? [])
    }
}
