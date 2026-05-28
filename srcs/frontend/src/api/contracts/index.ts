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
    area: 'DESIGN' | 'FOTO' | 'GAMES' | 'LABIA';
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
    speaker_info_link: string | null;
    social_link: string | null;
    registration_link: string | null;
    image: string | null;
    start_datetime: string;
    location: string;
    is_active: boolean;
}

export interface WorkshopsContract {
    id: number;
    title: string;
    description: string;
    mentor_name: string;
    mentor_social: string | null;
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
