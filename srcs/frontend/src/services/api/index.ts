const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "/api";

const TTL = 5 * 60 * 1000
const cache = new Map<string, { data: any; ts: number }>()

export const bustCache = () => cache.clear()

const getHeaders = (): HeadersInit => {
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    };

    const token = localStorage.getItem("token");

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
};

export const fetchWithConfig = async <T = unknown>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> => {
    const baseUrl = API_BASE_URL.replace(/\/$/, "");
    const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    const url = `${baseUrl}${path}`;

    const isGet = !options.method || options.method.toUpperCase() === 'GET'

    if (isGet) {
        const hit = cache.get(url)
        if (hit && Date.now() - hit.ts < TTL) return hit.data
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
            headers: {
                ...getHeaders(),
                ...options.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        if (response.status === 204) return null as T;

        const data = await response.json() as T;
        if (isGet) cache.set(url, { data, ts: Date.now() })
        return data;
    } finally {
        clearTimeout(timeout);
    }
};