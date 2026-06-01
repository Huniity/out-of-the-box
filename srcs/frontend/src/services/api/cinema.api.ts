import { fetchWithConfig } from './index'
import type { CinemaContract } from '../../api/contracts'

type Raw = CinemaContract[] | { results?: CinemaContract[] }

export const cinemaApi = {
    getSessions: async (): Promise<CinemaContract[]> => {
        const data = await fetchWithConfig<Raw>('/cinema/')
        return Array.isArray(data) ? data : (data.results ?? [])
    }
}
