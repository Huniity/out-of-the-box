import { fetchWithConfig } from './index';
import { sunsetTalksSessions } from '../../utils/metrics';
import { mapSunsetTalks } from '../../api/mappers';

export const sunsetTalksApi = {
    getTalks: async () => {
        try {
            const data = await fetchWithConfig('/sunset-talks/');
            return mapSunsetTalks(Array.isArray(data) ? data : data.results || []);
        } catch (error) {
            console.warn("API offline - fallback Sunset Talks:", error);
            return mapSunsetTalks(sunsetTalksSessions as any);
        }
    }
};