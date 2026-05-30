import { fetchWithConfig } from './index'
import type { SemanaLabiaContract } from '../../api/contracts'

type Raw = SemanaLabiaContract[] | { results?: SemanaLabiaContract[] }

export const semanaLabiaApi = {
    getProjects: async (): Promise<SemanaLabiaContract[]> => {
        const data = await fetchWithConfig<Raw>('/semana-labia/')
        return Array.isArray(data) ? data : (data.results ?? [])
    }
}
