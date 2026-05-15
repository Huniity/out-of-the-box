
//Hidden fields that shouldn't be displayed in the table
export const hiddenFields = new Set([
    "id", 
    "image", 
    "created_at", 
    "updated_at"
]);

//Fields that should be displayed first in the dashboard table
export const dashboardFields = [
    "title", 
    "description", 
    "is_active"
];


export const fieldLabels: Record<string, string> = {
    title: "Evento",
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