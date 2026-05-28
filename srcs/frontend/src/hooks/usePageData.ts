import { useState, useEffect } from 'react';
import type { ApiPage } from '../types/dashboard';
import { PAGE_SLUG_MAP, PAGE_FALLBACKS } from '../utils/dashboard';

export function usePageData(pageSlug: string) {
    const [page, setPage] = useState<ApiPage | null>(null);

    useEffect(() => {
        fetch('/api/pages/')
            .then(r => r.json())
            .then((pages: ApiPage[]) => {
                const match = pages.find(p => PAGE_SLUG_MAP[p.name] === pageSlug);
                if (match) setPage(match);
            })
            .catch(() => {});
    }, [pageSlug]);

    const fb = PAGE_FALLBACKS[pageSlug];

    return {
        main_white_title: page?.main_white_title ?? fb?.main_white_title ?? null,
        main_green_title: page?.main_green_title ?? fb?.main_green_title ?? null,
        main_description: page?.main_description ?? fb?.main_description ?? null,
        cta_button_text:  page?.cta_button_text  ?? fb?.cta_button_text  ?? null,
        cta_button_link:  page?.cta_button_link  ?? fb?.cta_button_link  ?? null,
        start_event_date: page?.start_event_date ?? fb?.start_event_date ?? null,
        end_event_date:   page?.end_event_date   ?? fb?.end_event_date   ?? null,
        is_live:          page?.is_live           ?? null,
        views:            page?.views             ?? null,
        page,
    };
}
