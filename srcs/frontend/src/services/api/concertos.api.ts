import { fetchWithConfig } from './index';
// Os dados precisam agora alinhar com a nova Contract Layer
import { concertosProgramme } from '../../utils/metrics';
import { mapConcertos } from '../../api/mappers';

export const concertosApi = {
    getConcertos: async () => {
        try {
            const data = await fetchWithConfig('/concertos/');
            return mapConcertos(Array.isArray(data) ? data : data.results || []);
        } catch (error) {
            console.warn("API offline - fallback Concertos:", error);
            // O ideal agora é que concertosProgramme em metrics.tsx siga o tipo ConcertosContract
            // @ts-ignore (desativado até utils/metrics.tsx ser atualizado no UI)
            return mapConcertos(concertosProgramme);
        }
    }
};