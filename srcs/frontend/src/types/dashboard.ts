

export type ApiPage = {
    id: number;
    name: string;
    url: string;
    description: string;
    views: number;
    is_hidden: boolean;
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