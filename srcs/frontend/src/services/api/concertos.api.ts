import { fetchWithConfig } from './index'
import type { ConcertosContract } from '../../api/contracts'

type Raw = ConcertosContract[] | { results?: ConcertosContract[] }

export const concertosApi = {
    getConcertos: async (): Promise<ConcertosContract[]> => {
        const data = await fetchWithConfig<Raw>('/concertos/')
        return Array.isArray(data) ? data : (data.results ?? [])
    }
}
