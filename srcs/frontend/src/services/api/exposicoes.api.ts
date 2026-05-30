import { fetchWithConfig } from './index'
import type { ExposicoesContract } from '../../api/contracts'

type Raw = ExposicoesContract[] | { results?: ExposicoesContract[] }

export const exposicoesApi = {
    getExposicoes: async (): Promise<ExposicoesContract[]> => {
        const data = await fetchWithConfig<Raw>('exposicoes/')
        return Array.isArray(data) ? data : (data.results ?? [])
    }
}
