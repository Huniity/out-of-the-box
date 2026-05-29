
import { useEffect, useMemo, useState } from 'react'
import { MoveDown, RefreshCw, CalendarDays, MapPin, Mic, ArrowRight, ChevronDown } from 'lucide-react'
import Fundo from '../assets/etic_algarve/FUNDO2.webp'
import StaticZigzagPath from '../components/core/StaticZigzagPath'
import { PrimaryButton, SecondaryButton } from '../components/buttons/MainButton'
import { usePageData } from '../hooks/usePageData'
import { formatEventDateRange, resolveMediaUrl } from '../utils/dashboard'
import PageStars from '../components/core/PageStars'
import leaf from '../assets/doodles/leaf3.webp'

type EventKind = 'SUNSET TALKS' | 'WORKSHOPS' | 'SPEED HUNTING' | 'EXPOSICOES' | 'CONCERTOS' | 'CINEMA'

type ProgramEvent = {
    id: string
    dateKey: string
    day: number
    weekday: string
    monthShort: string
    time: string
    location: string
    type: EventKind
    category: string
    title: string
    speaker_name: string
    speaker_activity: string
    description: string
    image: string
}

type SunsetTalkApi = {
    id: number
    title: string
    description: string
    speaker_name: string
    speaker_activity: string
    image: string | null
    start_datetime: string
    location: string
    is_active: boolean
}

type WorkshopApi = {
    id: number
    title: string
    description: string
    mentor_name: string
    duration: string
    image: string | null
    start_datetime: string
    location: string
    is_active: boolean
}

type SpeedHuntingApi = {
    id: number
    company_name: string
    company_logo: string | null
    start_datetime: string
    location: string
    is_active: boolean
}

type ExposicaoApi = {
    id: number
    title: string
    area: string
    synopsis: string
    artists: string
    image: string | null
    opening_hours: string
    start_date: string
    location: string
    is_active: boolean
}

type ConcertoApi = {
    id: number
    band_name: string
    description: string
    image: string | null
    start_datetime: string
    location: string
    is_active: boolean
}

type CinemaApi = {
    id: number
    title: string
    director_team: string
    synopsis: string
    duration: string
    image: string | null
    start_datetime: string
    location: string
    is_active: boolean
}

const typeColors: Record<EventKind, string> = {
    'SUNSET TALKS': '#c8ff00',
    'WORKSHOPS': '#60a5fa',
    'SPEED HUNTING': '#f97316',
    'EXPOSICOES': '#f472b6',
    'CONCERTOS': '#a78bfa',
    'CINEMA': '#22d3ee',
}

const pageSize = 6
const fallbackImage = Fundo

const monthShort = (date: Date) =>
    date.toLocaleString('pt-PT', { month: 'short' }).toUpperCase().replace('.', '')

const weekdayShort = (date: Date) =>
    date
        .toLocaleString('pt-PT', { weekday: 'short' })
        .toUpperCase()
        .replace('.', '')

const toDateKey = (date: Date) => {
    const y = date.getFullYear()
    const m = `${date.getMonth() + 1}`.padStart(2, '0')
    const d = `${date.getDate()}`.padStart(2, '0')
    return `${y}-${m}-${d}`
}

const normalizeFromDateTime = (
    dateIso: string,
    timeOverride?: string,
): Pick<ProgramEvent, 'dateKey' | 'day' | 'weekday' | 'monthShort' | 'time'> => {
    const date = new Date(dateIso)
    const time =
        timeOverride ??
        date.toLocaleTimeString('pt-PT', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })

    return {
        dateKey: toDateKey(date),
        day: date.getDate(),
        weekday: weekdayShort(date),
        monthShort: monthShort(date),
        time,
    }
}

const asArray = <T,>(data: unknown): T[] => {
    if (Array.isArray(data)) return data as T[]
    if (
        data &&
        typeof data === 'object' &&
        'results' in data &&
        Array.isArray((data as { results?: unknown }).results)
    ) {
        return (data as { results: T[] }).results
    }
    return []
}

const fetchList = async <T,>(url: string): Promise<T[]> => {
    const res = await fetch(url)
    if (!res.ok) return []
    const json = (await res.json()) as unknown
    return asArray<T>(json)
}

const Programacao = () => {
    const {
        main_white_title,
        main_green_title,
        main_description,
        start_event_date,
        end_event_date,
    } = usePageData('programacao')

    const [events, setEvents] = useState<ProgramEvent[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedDay, setSelectedDay] = useState<string>('')
    const [selectedType, setSelectedType] = useState<string>('TODAS')
    const [selectedSala, setSelectedSala] = useState<string>('TODAS')
    const [shown, setShown] = useState(pageSize)
    const [activeCard, setActiveCard] = useState<string | null>(null)

    useEffect(() => {
        let cancelled = false

        const loadEvents = async () => {
            setLoading(true)

            try {
                const sunset    = await fetchList<SunsetTalkApi>('/api/sunset-talks/')
                const workshops = await fetchList<WorkshopApi>('/api/workshops/')
                const speed     = await fetchList<SpeedHuntingApi>('/api/speed-hunting/')
                const expos     = await fetchList<ExposicaoApi>('/api/exposicoes/')
                const concertos = await fetchList<ConcertoApi>('/api/concertos/')
                const cinema    = await fetchList<CinemaApi>('/api/cinema/')

                const normalized: ProgramEvent[] = [
                    ...sunset
                        .filter(item => item.is_active)
                        .map((item): ProgramEvent => {
                            const date = normalizeFromDateTime(item.start_datetime)
                            return {
                                id: `sunset-${item.id}`,
                                ...date,
                                location: item.location || 'A confirmar',
                                type: 'SUNSET TALKS',
                                category: 'Talk',
                                title: item.title,
                                speaker_name: item.speaker_name,
                                speaker_activity: item.speaker_activity,
                                description: item.description,
                                image: item.image ? resolveMediaUrl(item.image) : fallbackImage,
                            }
                        }),
                    ...workshops
                        .filter(item => item.is_active)
                        .map((item): ProgramEvent => {
                            const date = normalizeFromDateTime(item.start_datetime)
                            return {
                                id: `workshop-${item.id}`,
                                ...date,
                                location: item.location || 'A confirmar',
                                type: 'WORKSHOPS',
                                category: 'Workshop',
                                title: item.title,
                                speaker_name: item.mentor_name,
                                speaker_activity: item.duration,
                                description: item.description,
                                image: item.image ? resolveMediaUrl(item.image) : fallbackImage,
                            }
                        }),
                    ...speed
                        .filter(item => item.is_active)
                        .map((item): ProgramEvent => {
                            const date = normalizeFromDateTime(item.start_datetime)
                            return {
                                id: `speed-${item.id}`,
                                ...date,
                                location: item.location || 'A confirmar',
                                type: 'SPEED HUNTING',
                                category: 'Networking',
                                title: item.company_name,
                                speaker_name: item.company_name,
                                speaker_activity: 'Encontro rápido com empresa',
                                description:
                                    'Sessão de ligação entre alunos e empresas para networking, portfólio e oportunidades.',
                                image: item.company_logo ? resolveMediaUrl(item.company_logo) : fallbackImage,
                            }
                        }),
                    ...expos
                        .filter(item => item.is_active)
                        .map((item): ProgramEvent => {
                            const openTime = item.opening_hours?.split(/[\s–-]/)[0].trim()
                            const date = normalizeFromDateTime(`${item.start_date}T00:00:00`, openTime)
                            return {
                                id: `expo-${item.id}`,
                                ...date,
                                location: item.location || 'A confirmar',
                                type: 'EXPOSICOES',
                                category: item.area,
                                title: item.title,
                                speaker_name: item.artists,
                                speaker_activity: item.opening_hours,
                                description: item.synopsis,
                                image: item.image ? resolveMediaUrl(item.image) : fallbackImage,
                            }
                        }),
                    ...concertos
                        .filter(item => item.is_active)
                        .map((item): ProgramEvent => {
                            const date = normalizeFromDateTime(item.start_datetime)
                            return {
                                id: `concerto-${item.id}`,
                                ...date,
                                location: item.location || 'A confirmar',
                                type: 'CONCERTOS',
                                category: 'Musica ao vivo',
                                title: item.band_name,
                                speaker_name: item.band_name,
                                speaker_activity: 'Concerto',
                                description: item.description,
                                image: item.image ? resolveMediaUrl(item.image) : fallbackImage,
                            }
                        }),
                    ...cinema
                        .filter(item => item.is_active)
                        .map((item): ProgramEvent => {
                            const date = normalizeFromDateTime(item.start_datetime)
                            return {
                                id: `cinema-${item.id}`,
                                ...date,
                                location: item.location || 'A confirmar',
                                type: 'CINEMA',
                                category: 'Projecao',
                                title: item.title,
                                speaker_name: item.director_team,
                                speaker_activity: item.duration,
                                description: item.synopsis,
                                image: item.image ? resolveMediaUrl(item.image) : fallbackImage,
                            }
                        }),
                ].sort((a, b) => {
                    const dateA = new Date(`${a.dateKey}T00:00:00`).getTime()
                    const dateB = new Date(`${b.dateKey}T00:00:00`).getTime()

                    if (dateA !== dateB) return dateA - dateB
                    return a.time.localeCompare(b.time)
                })

                if (!cancelled) setEvents(normalized)
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        loadEvents()
        return () => {
            cancelled = true
        }
    }, [])

    const eventDays = useMemo(
        () =>
            Array.from(new Map(events.map(event => [event.dateKey, event])).values()).map(item => ({
                value: item.dateKey,
                day: item.day,
                weekday: item.weekday,
                monthShort: item.monthShort,
            })),
        [events],
    )

    const allTypes = useMemo(() => ['TODAS', ...Array.from(new Set(events.map(event => event.type)))], [events])
    const allSalas = useMemo(() => ['TODAS', ...Array.from(new Set(events.map(event => event.location)))], [events])

    const clearFilters = () => {
        setSelectedDay('')
        setSelectedType('TODAS')
        setSelectedSala('TODAS')
        setShown(pageSize)
    }

    const filtered = useMemo(
        () =>
            events.filter(event => {
                const matchDay = selectedDay === '' || event.dateKey === selectedDay
                const matchType = selectedType === 'TODAS' || event.type === selectedType
                const matchSala = selectedSala === 'TODAS' || event.location === selectedSala
                return matchDay && matchType && matchSala
            }),
        [events, selectedDay, selectedType, selectedSala],
    )

    const visible = filtered.slice(0, shown)

    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* ── Hero ── */}
            <section className="relative h-[calc(100vh-66px)] flex items-stretch px-8 xl:px-20 overflow-hidden">
                        <img
              src={leaf}
              alt=""
              aria-hidden="true"
              className="
                  leaf-2 absolute pointer-events-none select-none z-[200]
                  w-[65%] right-[60%] top-[95%] -translate-y-1/2 rotate-[8deg]
                  sm:w-[65%] sm:left-[110%] sm:top-[70%] sm:rotate-[310deg]
                  md:w-[40%] md:right-[78%] md:top-[98%] md:rotate-[5deg]
                  lg:w-[30%] lg:left-[105%] lg:top-[70%] lg:rotate-[310deg]
              "
          />
                <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#c8ff00]/10 blur-3xl pointer-events-none" />
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#745ff2]/10 blur-3xl pointer-events-none" />
                <PageStars />
                <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-stretch gap-12">
                    <div className="flex-1 flex flex-col py-8">
                        <h1
                            className="font-black uppercase leading-none tracking-tight text-white m-0 mb-4"
                            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}
                        >
                            {main_white_title || 'PROGRAMACAO'}
                            <br />
                            <span className="text-[#c8ff00]">{main_green_title || 'COMPLETA'}</span>
                        </h1>

                        <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">
                            {main_description ||
                                'Explora todos os eventos do festival num unico calendario: talks, workshops, speed hunting, exposicoes, concertos e cinema.'}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8 text-xs text-white/60">
                            <span className="flex items-center gap-1.5">
                                <CalendarDays size={14} className="text-[#c8ff00]" />{' '}
                                {formatEventDateRange(start_event_date, end_event_date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <MapPin size={14} className="text-[#c8ff00]" /> IPDJ, Faro
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Mic size={14} className="text-[#c8ff00]" /> Entrada Livre
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <PrimaryButton href="#sessoes">
                                Ver Programacao{' '}
                                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </PrimaryButton>
                            <SecondaryButton href="#filtros">
                                Filtrar <ChevronDown size={14} className="transition-transform duration-200 group-hover:translate-y-1" />
                            </SecondaryButton>
                        </div>
                    </div>

                    <div className="hidden lg:block flex-1 relative overflow-hidden lg:min-h-0 -mr-8 xl:-mr-20">
                        <img src={Fundo} alt="Programacao" className="absolute inset-0 h-full w-full object-cover brightness-75" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                        <StaticZigzagPath
                            from={{ x: 20, y: 5 }}
                            to={{ x: 80, y: 95 }}
                            steps={4}
                            amplitude={20}
                            curve={1.2}
                            color="#c8ff00"
                            strokeWidth={4}
                            dashed
                            dashLength={10}
                            dashGap={8}
                            opacity={0.7}
                        />
                    </div>
                </div>
            </section>

            {/* ── Filter box ── */}
            <section id="filtros" className="px-8 xl:px-20 pb-8">
                <div className="bg-[#0d0d0d] border border-white/10 rounded-sm p-5">
                    <div className="flex flex-wrap items-end gap-4 justify-center ">
                        <div className="flex flex-col gap-1.5 min-w-[140px] ">
                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ">Categoria</label>
                            <div className="relative">
                                <select
                                    value={selectedType}
                                    onChange={e => {
                                        setSelectedType(e.target.value)
                                        setShown(pageSize)
                                    }}
                                    className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                                >
                                    {allTypes.map(type => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 min-w-[120px]">
                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Dia</label>
                            <div className="relative">
                                <select
                                    value={selectedDay}
                                    onChange={e => {
                                        setSelectedDay(e.target.value)
                                        setShown(pageSize)
                                    }}
                                    className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                                >
                                    <option value="">TODAS</option>
                                    {eventDays.map(day => (
                                        <option key={day.value} value={day.value}>
                                            {day.day} {day.monthShort}
                                        </option>
                                    ))}
                                </select>
                                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5 min-w-[140px]">
                            <label className="text-[10px] font-black text-white/30 uppercase tracking-widest">Sala</label>
                            <div className="relative">
                                <select
                                    value={selectedSala}
                                    onChange={e => {
                                        setSelectedSala(e.target.value)
                                        setShown(pageSize)
                                    }}
                                    className="w-full appearance-none bg-black border border-white/15 rounded-sm px-3 py-2.5 text-xs font-black uppercase tracking-widest text-white cursor-pointer focus:outline-none focus:border-[#c8ff00] transition-colors pr-7"
                                >
                                    {allSalas.map(sala => (
                                        <option key={sala} value={sala}>
                                            {sala}
                                        </option>
                                    ))}
                                </select>
                                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">▾</span>
                            </div>
                        </div>

                        <button
                            onClick={clearFilters}
                            className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#c8ff00] hover:opacity-70 transition-opacity pb-2.5"
                        >
                            <RefreshCw size={13} /> Limpar Filtros
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Date tabs ── */}
            <section className="px-8 xl:px-20 pb-8">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 justify-center">
                    {eventDays.map(day => {
                        const isActive = selectedDay === day.value
                        const hasSession = events.some(event => event.dateKey === day.value)

                        return (
                            <button
                                key={day.value}
                                onClick={() => {
                                    setSelectedDay(isActive ? '' : day.value)
                                    setShown(pageSize)
                                }}
                                className="flex-none flex flex-col items-center px-4 py-2.5 rounded-sm transition-all duration-200 w-[76px]"
                                style={{
                                    backgroundColor: isActive ? '#c8ff00' : 'transparent',
                                    border: `2px solid ${isActive ? '#c8ff00' : 'rgba(255,255,255,0.12)'}`,
                                    opacity: hasSession ? 1 : 0.35,
                                }}
                            >
                                <span className="text-xl font-black leading-none" style={{ color: isActive ? '#000' : '#fff' }}>
                                    {day.day}
                                </span>
                                <span
                                    className="text-[10px] font-black uppercase tracking-wide"
                                    style={{ color: isActive ? '#000' : 'rgba(255,255,255,0.5)' }}
                                >
                                    {day.monthShort}
                                </span>
                                <span
                                    className="text-[10px] font-bold uppercase tracking-widest"
                                    style={{ color: isActive ? '#000' : 'rgba(255,255,255,0.3)' }}
                                >
                                    {day.weekday}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </section>

            {/* ── Session list ── */}
            <section id="sessoes" className="px-8 xl:px-20 pb-16 flex flex-col gap-4">
                {loading && (
                    <div className="py-20 text-center text-white/40 text-sm font-bold uppercase tracking-widest">A carregar eventos...</div>
                )}

                {!loading && visible.length === 0 && (
                    <div className="py-20 text-center text-white/30 text-sm font-bold uppercase tracking-widest">
                        Sem sessoes para os filtros selecionados.
                    </div>
                )}

                {!loading &&
                    visible.map(event => {
                        const typeColor = typeColors[event.type]
                        const isActive  = activeCard === event.id

                        return (
                            <div
                                key={event.id}
                                className="overflow-hidden rounded-sm border border-white/10 bg-[#0d0d0d] hover:border-white/20 transition-all duration-200 group"
                            >
                                {/* Always-visible row */}
                                <div className="flex flex-row">
                                    {/* LEFT — date · time · location · badge */}
                                    <div className="flex-none w-36 flex flex-col justify-center gap-2 px-4 py-4 border-r border-white/10">
                                        <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: typeColor }}>
                                            {event.day} {event.monthShort}
                                        </p>
                                        <p className="font-black text-3xl leading-none" style={{ color: typeColor }}>
                                            {event.time}
                                        </p>
                                        <p className="text-[10px] text-white/35 font-bold uppercase tracking-widest leading-snug">
                                            {event.location}
                                        </p>
                                        <span
                                            className="block px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-black rounded-sm w-full text-center truncate"
                                            style={{ backgroundColor: typeColor }}
                                        >
                                            {event.type}
                                        </span>
                                    </div>

                                    {/* Image — desktop only */}
                                    <div className="hidden md:block flex-none w-44 shrink-0 overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover brightness-60 group-hover:brightness-75 group-hover:scale-105 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Content — desktop always, mobile: title + chevron toggle */}
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        {/* Desktop full content */}
                                        <div className="hidden md:flex flex-col gap-1 px-5 py-4">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-black text-base uppercase leading-tight tracking-tight text-white">{event.title}</h3>
                                                <span className="shrink-0 text-lg leading-none" style={{ color: typeColor }}>✳</span>
                                            </div>
                                            <p className="text-xs font-black uppercase tracking-wide" style={{ color: typeColor }}>{event.speaker_name}</p>
                                            <p className="text-xs text-white/40 mt-0.5">{event.speaker_activity}</p>
                                            <p className="text-xs text-white/35 leading-relaxed mt-1 line-clamp-3">{event.description}</p>
                                        </div>

                                        {/* Mobile tap-to-expand header */}
                                        <button
                                            className="md:hidden flex items-center gap-2 px-4 py-4 w-full text-left"
                                            onClick={() => setActiveCard(isActive ? null : event.id)}
                                        >
                                            <h3 className="flex-1 font-black text-sm uppercase leading-tight tracking-tight text-white line-clamp-2">{event.title}</h3>
                                            <ChevronDown
                                                size={16}
                                                className="shrink-0 text-white/40 transition-transform duration-200"
                                                style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                            />
                                        </button>
                                    </div>
                                </div>

                                {/* Mobile expanded content */}
                                {isActive && (
                                    <div className="md:hidden border-t border-white/10 flex overflow-hidden">
                                        <div className="flex-none w-28 shrink-0 overflow-hidden">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover brightness-60"
                                            />
                                        </div>
                                        <div className="flex-1 px-4 py-3 flex flex-col gap-1 min-w-0">
                                            <p className="text-xs font-black uppercase tracking-wide" style={{ color: typeColor }}>{event.speaker_name}</p>
                                            <p className="text-xs text-white/40">{event.speaker_activity}</p>
                                            <p className="text-xs text-white/35 leading-relaxed line-clamp-4">{event.description}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}

                {!loading && shown < filtered.length && (
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={() => setShown(count => count + pageSize)}
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm font-black uppercase tracking-widest text-white transition-all duration-200 hover:border-[#c8ff00] hover:text-[#c8ff00]"
                            style={{ border: '2px solid rgba(255,255,255,0.2)' }}
                        >
                            Carregar Mais <MoveDown size={16} />
                        </button>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Programacao
