
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
    "Workshops":     "workshops",
    "Projeções":     "projecoes",
    "Concertos":     "concertos",
    "Speed Hunting": "speed-hunting",
    "Semana Lábia":  "semana-labia",
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