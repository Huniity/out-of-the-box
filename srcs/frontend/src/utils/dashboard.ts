
//Hidden fields that shouldn't be displayed in the table
export const hiddenFields = new Set([
    "id",
    "created_at",
    "updated_at"
]);

export const imageFields = new Set(["image", "company_logo"]);

// Maps Page.name → URL slug (used for navigation and API endpoints)
export const PAGE_SLUG_MAP: Record<string, string> = {
    "Home":          "",
    "Exposições":    "exposicoes",
    "Palestras":     "palestras",
    "Sunset Talks":  "sunset-talks",
    "Workshops":     "workshops",
    "Projeções":     "projecoes",
    "Cinema":        "cinema",
    "Concertos":     "concertos",
    "Speed Hunting": "speed-hunting",
    "Semana Lábia":  "semana-labia",
};

type PageFallback = {
    main_white_title?: string;
    main_green_title?: string;
    main_description?: string;
    cta_button_text?: string;
    cta_button_link?: string;
    start_event_date?: string;
    end_event_date?: string;
};

// Fallback content shown when the DB hasn't returned data yet (or API is unreachable)
export const PAGE_FALLBACKS: Record<string, PageFallback> = {
    exposicoes: {
        main_white_title: "A Obra Ganha",
        main_green_title: "Vida",
        main_description: "Descobre as exposições que revelam o talento e a criatividade dos alunos das áreas de Design, Fotografia e Videojogos.",
        start_event_date: "2026-07-03",
        end_event_date:   "2026-07-17",
    },
    palestras: {
        main_white_title: "As Grandes",
        main_green_title: "Vozes",
        main_description: "Conecta-te com os profissionais que estão a ditar o rumo da indústria. Explora as palestras, workshops e debates do Out of the Box 2026.",
        start_event_date: "2026-07-03",
        end_event_date:   "2026-07-17",
    },
    "sunset-talks": {
        main_white_title: "Sunset",
        main_green_title: "Talks",
        main_description: "Conecta-te com os profissionais que estão a ditar o rumo da indústria. Explora as palestras, workshops e debates do Out of the Box 2026.",
        start_event_date: "2026-07-03",
        end_event_date:   "2026-07-17",
    },
    workshops: {
        main_white_title: "Work",
        main_green_title: "shops",
        main_description: "Descobre as sessões práticas da Out of the Box Faro 2026. Explora workshops por área formativa e conhece as equipas que vão desafiar-te a aprender, criar e experimentar.",
        cta_button_text:  "Garante o teu lugar!",
        cta_button_link:  "https://docs.google.com/forms",
        start_event_date: "2026-07-03",
        end_event_date:   "2026-07-17",
    },
    projecoes: {
        main_white_title: "ETIC",
        main_green_title: "EM CARTAZ",
        main_description: "Apresentação dos projetos finais das turmas de Realização, Cinema e TV da ETIC_Algarve. Sessões abertas ao público, entrada livre.",
        cta_button_text:  "Explorar Curtas Metragens",
        cta_button_link:  "https://www.youtube.com/watch?v=z69B4lJ-sUE",
        start_event_date: "2026-07-03",
        end_event_date:   "2026-07-17",
    },
    cinema: {
        main_white_title: "ETIC",
        main_green_title: "EM CARTAZ",
        main_description: "Apresentação dos projetos finais das turmas de Realização, Cinema e TV da ETIC_Algarve. Sessões abertas ao público, entrada livre.",
        cta_button_text:  "Explorar Curtas Metragens",
        cta_button_link:  "https://www.youtube.com/watch?v=z69B4lJ-sUE",
        start_event_date: "2026-07-03",
        end_event_date:   "2026-07-17",
    },
    concertos: {
        main_white_title: "Concertos",
        main_green_title: "Live",
        main_description: "A música ao vivo e os happenings dão ritmo ao Out of the Box. Aqui encontras o evento de abertura Live In Sight e todas as atuações dos alunos durante o festival.",
        cta_button_text:  "Live In Sight",
        cta_button_link:  "https://www.eticalgarve.com/comunidade/live-insight/",
        start_event_date: "2026-07-03",
        end_event_date:   "2026-07-17",
    },
    "speed-hunting": {
        main_white_title: "Speed",
        main_green_title: "Hunting",
        main_description: "Encontros rápidos entre empresas e alunos da ETIC_Algarve para apresentação de portfólio, conversa profissional e criação de oportunidades.",
        cta_button_text:  "Saiba mais sobre a programação",
        cta_button_link:  "/palestras",
        start_event_date: "2026-07-09",
        end_event_date:   "2026-07-10",
    },
    "semana-labia": {
        main_white_title: "Semana Lábia",
        main_green_title: "2026",
        main_description: "Uma secção dedicada aos projetos da Semana Lábia 2026, a semana intensiva e multidisciplinar de criação e aprendizagem em contexto real da ETIC_Algarve.",
        cta_button_text:  "Explora Mais",
        cta_button_link:  "https://www.eticalgarve.com/comunidade/labia/",
    },
};

//Fields that should be displayed first in the dashboard table
export const dashboardFields = [
    "title", 
    "description", 
    "is_active"
];


export const fieldLabels: Record<string, string> = {
    name: "Nome",
    main_title: "Título",
    main_white_title: "Título Branco",
    main_green_title: "Título Verde",
    main_description: "Descrição",
    views: "Visitas",
    is_live: "Ao Vivo",
    cta_button_link: "Link do Botão",
    cta_button_text: "Texto do Botão",
    event_date: "Data do Evento",
    title: "Título",
    description: "Descrição",
    is_active: "Ativo",
    start_datetime: "Início",
    end_datetime: "Fim",
    created_at: "Criado",
    updated_at: "Atualizado",
    speaker_name: "Speaker",
    speaker_role: "Categoria",
    company: "Empresa",
    location: "Local",
    artist_name: "Artista",
    lineup: "Lineup",
    capacity: "Capacidade",
    materials_required: "Materiais Necessários",
    mentor_name: "Mentor",
    registration_required: "Requer Inscrição",
    duration_minutes: "Duração (minutos)",
    director_name: "Realizador",
    company_name: "Empresa",
    recruiter_name: "Recrutador",
    max_candidates: "Máx. Candidatos",
    featured_projects: "Projeto em Destaque",
};

/**
 * Formats two ISO date strings (YYYY-MM-DD) into Portuguese range text.
 * e.g. "2026-07-09" + "2026-07-10" → "9 a 10 de julho 2026"
 */
export function formatEventDateRange(start: string | null, end: string | null): string {
    if (!start) return '';
    const [y, m, d1] = start.split('-').map(Number);
    const d2 = end ? end.split('-')[2].replace(/^0/, '') : null;
    const month = new Date(y, m - 1).toLocaleString('pt-PT', { month: 'long' });
    return d2 && d2 !== String(d1)
        ? `${d1} a ${d2} de ${month} ${y}`
        : `${d1} de ${month} ${y}`;
}

const formatFieldName = (field: string): string => {
    return field
        .split("_")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
};

export const getFieldLabel = (field: string): string => {
    return fieldLabels[field] ?? formatFieldName(field);
};

//Formats values that display in the table
export const formatValue = (val: unknown): string => {
    if (val === null || val === undefined) return "—";
    if (typeof val === "boolean") return val ? "Sim" : "Não";
    if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}T/.test(val)) {
        return new Date(val).toLocaleString();
    }
    return String(val);
}