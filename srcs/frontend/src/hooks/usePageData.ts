import { useState, useEffect } from 'react';
import type { ApiPage } from '../types/dashboard';

export function usePageData(pageUrl: string) {
    const [page, setPage] = useState<ApiPage | null>(null);

    useEffect(() => {
        fetch('/api/pages/')
            .then(r => r.json())
            .then((pages: ApiPage[]) => {
                const match = pages.find(p => p.url === pageUrl);
                if (match) setPage(match);
            })
            .catch(() => {});
    }, [pageUrl]);

    return {
        main_white_title: page?.main_white_title ?? null,
        main_green_title: page?.main_green_title ?? null,
        main_description: page?.main_description ?? null,
        cta_button_text:  page?.cta_button_text  ?? null,
        cta_button_link:  page?.cta_button_link  ?? null,
        start_event_date: page?.start_event_date ?? null,
        end_event_date:   page?.end_event_date   ?? null,
        is_live:          page?.is_live           ?? null,
        views:            page?.views             ?? null,
        page,
    };
}
