

export type ApiPage = {
    id: number;
    name: string;
    url: string;
    main_white_title: string;
    main_green_title: string;
    main_description: string;
    views: number;
    is_live: boolean;
    cta_button_link: string;
    cta_button_text: string;
    start_event_date: string | null;
    end_event_date: string | null;
};

export type DashboardNavProps = {
    activeTab: string;
    onTabChange: (tab: string) => void;
    onPagesLoaded: (pages: ApiPage[]) => void;
    onClose: () => void;
};

export type DashboardProps = {
    page: ApiPage;
};

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};