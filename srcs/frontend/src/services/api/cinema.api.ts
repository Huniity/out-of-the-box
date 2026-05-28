import { fetchWithConfig } from './index';
import { projecoesSessions } from '../../utils/metrics';
import { mapCinema } from '../../api/mappers';

export const cinemaApi = {
    getSessions: async () => {
        try {
            const data = await fetchWithConfig('/cinema/');
            return mapCinema(Array.isArray(data) ? data : data.results || []);
        } catch (error) {
            console.warn("API offline - fallback Cinema/Projeções:", error);
            // @ts-ignore
            return mapCinema(projecoesSessions);
        }
    }
};