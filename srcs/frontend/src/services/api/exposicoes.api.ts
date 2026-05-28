import { fetchWithConfig } from './index';
import { exposicoesDestaques } from '../../utils/metrics';
import { mapExposicoes } from '../../api/mappers';

export const exposicoesApi = {
    getExposicoes: async () => {
        try {
            console.log("Fetching Exposições from API...");
            const data = await fetchWithConfig('exposicoes/');
            return mapExposicoes(Array.isArray(data) ? data : data.results || []);
        } catch (error) {
            console.log("Error fetching Exposições, using fallback data:", error);
            console.error("Error fetching Exposições:", error);
            console.warn("API offline - fallback Exposições:", error);
            return mapExposicoes(exposicoesDestaques);
        }
    }
};