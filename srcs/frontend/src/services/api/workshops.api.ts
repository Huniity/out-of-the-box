import { fetchWithConfig } from './index'
import type { WorkshopsContract } from '../../api/contracts'

type Raw = WorkshopsContract[] | { results?: WorkshopsContract[] }

export const workshopsApi = {
    getWorkshops: async (): Promise<WorkshopsContract[]> => {
        const data = await fetchWithConfig<Raw>('/workshops/')
        return Array.isArray(data) ? data : (data.results ?? [])
    }
}
