import { fetchWithConfig } from './index';
import { workshopsWorkshops } from '../../utils/metrics';
import { mapWorkshops } from '../../api/mappers';

export const workshopsApi = {
    getWorkshops: async () => {
        try {
            const data = await fetchWithConfig('/workshops/');
            return mapWorkshops(Array.isArray(data) ? data : data.results || []);
        } catch (error) {
            console.warn("API offline - fallback Workshops:", error);
            return mapWorkshops(workshopsWorkshops);
        }
    }
};