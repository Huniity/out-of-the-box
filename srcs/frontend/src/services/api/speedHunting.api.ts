import { fetchWithConfig } from './index';
import { speedHuntingCompanies } from '../../utils/metrics';
import { mapSpeedHunting } from '../../api/mappers';

export const speedHuntingApi = {
    getCompanies: async () => {
        try {
            const data = await fetchWithConfig('/speed-hunting/');
            return mapSpeedHunting(Array.isArray(data) ? data : data.results || []);
        } catch (error) {
            console.warn("API offline - fallback Speed Hunting:", error);
            return mapSpeedHunting(speedHuntingCompanies);
        }
    }
};