export interface PageContract {
    id: number;
    name: string;
    main_white_title: string;
    main_green_title: string;
    main_description: string;
    views: number;
    is_live: boolean;
    cta_button_link: string;
    cta_button_text: string;
    start_event_date: string | null;
    end_event_date: string | null;
}

export interface ExposicoesContract {
    id: number;
    title: string;
    category: 'DESIGN' | 'FOTO' | 'JOGOS' | 'OUTROS';
    area?: string | null;
    synopsis: string;
    artists: string;
    image: string | null;
    opening_hours: string;
    start_date: string;
    end_date: string;
    location: string;
    is_active: boolean;
}

export interface SunsetTalksContract {
    id: number;
    title: string;
    description: string;
    speaker_name: string;
    speaker_activity: string;
    area?: string | null;
    speaker_info_link: string | null;
    social_link: string | null;
    registration_link: string | null;
    category: string | null;
    category_other: string | null;
    image: string | null;
    start_datetime: string;
    location: string;
    is_active: boolean;
    type?: string | null;
    day?: number | null;
    moderator?: string | null;
    priority: number;
}

export interface WorkshopsContract {
    id: number;
    title: string;
    description: string;
    mentor_name: string;
    mentor_social: string | null;
    area?: string | null;
    category: string | null;
    duration: string;
    max_participants: number;
    registration_link: string | null;
    start_datetime: string;
    location: string;
    is_active: boolean;
}

export interface CinemaContract {
    id: number;
    title: string;
    director_team: string;
    synopsis: string;
    duration: string;
    area?: string | null;
    social_link: string | null;
    image: string | null;
    start_datetime: string;
    location: string;
    is_active: boolean;
}

export interface ConcertosContract {
    id: number;
    band_name: string;
    description: string;
    area?: string | null;
    info_link: string | null;
    social_link: string | null;
    image: string | null;
    start_datetime: string;
    location: string;
    is_active: boolean;
}

export interface SpeedHuntingContract {
    id: number;
    company_name: string;
    company_logo: string | null;
    company_description: string | null;
    category: string | null;
    area?: string | null;
    start_datetime: string;
    location: string;
    is_active: boolean;
}

export interface SemanaLabiaContract {
    id: number;
    title: string;
    description: string;
    featured_projects: string;
    image: string | null;
    start_datetime: string;
    end_datetime: string;
    location: string;
    is_active: boolean;
    created_at: string;
}

export interface HighlightContract {
    title: string
    subtitle: string
    tag: 'CONCERTO' | 'TALK' | 'WORKSHOP' | 'CINEMA' | 'EXPOSIÇÃO'
    start_datetime: string | null
    location: string
    image: string | null
    priority: number
}
