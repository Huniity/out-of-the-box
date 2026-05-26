import { fetchWithConfig } from './index';
import { semanaLabiaProjects } from '../../utils/metrics';
import { mapSemanaLabia } from '../../api/mappers';

export const semanaLabiaApi = {
    getProjects: async () => {
        try {
            const data = await fetchWithConfig('/semana-labia/');
            return mapSemanaLabia(Array.isArray(data) ? data : data.results || []);
        } catch (error) {
            console.warn("API offline - fallback Semana Labia:", error);
            // @ts-ignore
            return mapSemanaLabia(semanaLabiaProjects);
        }
    }
};