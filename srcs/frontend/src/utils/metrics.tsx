import { CalendarDays, FolderOpen, Users, Star, Zap, Users2, Puzzle, Rocket, ChevronRight, ChevronDown, ArrowRight, Eye, MapPin, Ticket, Briefcase, MessageSquare, Link2, Shuffle, Music2, Play, Clock, Camera, Film, Code2, Megaphone, Gamepad2, Tv2 } from 'lucide-react'
import proj from '../assets/FUNDO.webp'
import Fundo from '../assets/FUNDO.webp'
import { ConcertosContract, CinemaContract, SpeedHuntingContract, SemanaLabiaContract, SunsetTalksContract, ExposicoesContract, WorkshopsContract } from '../api/contracts';

// SEMANA LABIA

export const semanaLabiaMetrics = [
    {
        icon: <CalendarDays size={38} strokeWidth={1.8} />,
        value: '1',
        label: 'SEMANA',
        desc: 'Uma semana intensiva de criação e colaboração.',
    },
    {
        icon: <FolderOpen size={38} strokeWidth={1.8} />,
        value: '12',
        label: 'PROJETOS',
        desc: 'Doze projetos desenvolvidos por equipas multidisciplinares.',
    },
    {
        icon: <Users size={38} strokeWidth={1.8} />,
        value: '104',
        label: 'FORMANDOS',
        desc: 'Cento e quatro formandos envolvidos no desafio.',
    },
    {
        icon: <Star size={38} strokeWidth={1.8} />,
        value: '',
        label: 'EQUIPAS MULTIDISCIPLINARES',
        desc: 'Aprendizagem em contexto real e fora da zona de conforto.',
    },
]

export const semanaLabiaProjects: SemanaLabiaContract[] = [
    { id: 1, title: 'NARRATIVAS VISUAIS', description: 'desc', featured_projects: 'projetos', image: null, start_datetime: '2026-07-03T10:00:00', end_datetime: '2026-07-10T18:00:00', location: 'IPDJ, Faro', is_active: true, created_at: '2024-05-26T00:00:00' },
]

export const semanaLabiaReasons = [
    {
        icon: <Zap size={38} strokeWidth={1.8} className="text-[#c8ff00]" />,
        title: 'DESAFIO REAL',
        desc: 'Trabalhas em projetos com objetivos concretos e prazos reais, tal como na indústria.',
    },
    {
        icon: <Users2 size={38} strokeWidth={1.8} className="text-[#c8ff00]" />,
        title: 'TRABALHO EM EQUIPA',
        desc: 'Aprendes a colaborar com colegas de outras áreas e a comunicar de forma eficaz.',
    },
    {
        icon: <Puzzle size={38} strokeWidth={1.8} className="text-[#c8ff00]" />,
        title: 'PROJETOS MULTIDISCIPLINARES',
        desc: 'Combinas diferentes competências e linguagens para criar soluções inovadoras.',
    },
    {
        icon: <Rocket size={38} strokeWidth={1.8} className="text-[#c8ff00]" />,
        title: 'PREPARAÇÃO PARA A INDÚSTRIA',
        desc: 'Desenvolves competências essenciais para o teu futuro profissional nas indústrias criativas.',
    },
]

export const semanaLabiaProcessSteps = [
    { icon: <Users size={38} strokeWidth={1.8} />, label: 'Equipas mistas e multidisciplinares' },
    { icon: <FolderOpen size={38} strokeWidth={1.8} />, label: 'Tema proposto pela escola' },
    { icon: <Zap size={38} strokeWidth={1.8} />, label: 'Criação e colaboração intensa' },
    { icon: <Eye size={38} strokeWidth={1.8} />, label: 'Apresentação do projeto mais completo' },
]


// SPEED HUNTING

export const speedHuntingMetrics = [
    {
        icon: <CalendarDays size={38} strokeWidth={1.8} />,
        value: '2',
        label: 'DIAS',
        desc: '9 e 10 de Julho de 2026 — dois dias de encontros.',
    },
    {
        icon: <MapPin size={38} strokeWidth={1.8} />,
        value: '',
        label: 'IPDJ, FARO',
        desc: 'Instalações do IPDJ — Instituto Português do Desporto e Juventude.',
    },
    {
        icon: <Users size={38} strokeWidth={1.8} />,
        value: '10+',
        label: 'EMPRESAS',
        desc: 'Empresas confirmadas de diferentes setores criativos.',
    },
    {
        icon: <Ticket size={38} strokeWidth={1.8} />,
        value: '',
        label: 'ENTRADA LIVRE',
        desc: 'Participação gratuita para todos os formandos da ETIC_Algarve.',
    },
]

export const speedHuntingCategories = ['TODAS', 'DESIGN', 'VÍDEO', 'SOM', 'PROGRAMAÇÃO', 'MARKETING', 'FOTOGRAFIA']

export const speedHuntingCompanies: SpeedHuntingContract[] = [
    { id: 1, company_name: 'ALGARVE CREATIVE', company_logo: null, start_datetime: '2026-07-09T10:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 2, company_name: 'PIXEL FORGE', company_logo: null, start_datetime: '2026-07-09T10:15:00', location: 'IPDJ, Faro', is_active: true },
    { id: 3, company_name: 'SONORA STUDIO', company_logo: null, start_datetime: '2026-07-09T10:30:00', location: 'IPDJ, Faro', is_active: true },
    { id: 4, company_name: 'LUMIA TECH', company_logo: null, start_datetime: '2026-07-09T10:45:00', location: 'IPDJ, Faro', is_active: true },
    { id: 5, company_name: 'BRAND HOUSE', company_logo: null, start_datetime: '2026-07-09T11:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 6, company_name: 'FRAME LAB', company_logo: null, start_datetime: '2026-07-09T11:15:00', location: 'IPDJ, Faro', is_active: true },
    { id: 7, company_name: 'CUBO INTERATIVO', company_logo: null, start_datetime: '2026-07-09T11:30:00', location: 'IPDJ, Faro', is_active: true },
    { id: 8, company_name: 'NORTE FILMES', company_logo: null, start_datetime: '2026-07-10T10:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 9, company_name: 'VOZES CRIATIVAS', company_logo: null, start_datetime: '2026-07-10T10:15:00', location: 'IPDJ, Faro', is_active: true },
    { id: 10, company_name: 'FOCO VISUAL', company_logo: null, start_datetime: '2026-07-10T10:30:00', location: 'IPDJ, Faro', is_active: true },
]

export const speedHuntingSteps = [
    { num: '01', icon: <Briefcase size={32} strokeWidth={1.5} />, title: 'PREPARA O TEU PORTFÓLIO', desc: 'Atualiza os teus melhores projetos e escolhe o que te representa.' },
    { num: '02', icon: <Users size={32} strokeWidth={1.5} />, title: 'APRESENTA-TE EM POUCOS MINUTOS', desc: 'Tens alguns minutos para te apresentares de forma clara e objetiva.' },
    { num: '03', icon: <MessageSquare size={32} strokeWidth={1.5} />, title: 'CONVERSA COM EMPRESAS', desc: 'Fala sobre o teu trabalho, interesses e recebe feedback.' },
    { num: '04', icon: <Link2 size={32} strokeWidth={1.5} />, title: 'CRIA CONTACTOS PARA O FUTURO', desc: 'Mantém a ligação e transforma a conversa de hoje em oportunidades amanhã.' },
]

export const speedHuntingTips = [
    'Portfólio atualizado e bem organizado',
    'Apresentação curta e objetiva (1–2 min)',
    'Mostra projetos relevantes para a área',
    'Leva contactos / LinkedIn / QR Code',
    'Atitude profissional e curiosidade',
]

// Concertos

export const concertosFeaturedEvent = {
    day: '3',
    month: 'JUL',
    time: '19:00',
    venue: 'IPDJ, Faro',
    tag: 'EVENTO DE ABERTURA',
    title: 'LIVE IN SIGHT',
    subtitle: 'Live de Abertura do Out of the Box – Faro 2026',
    desc: 'Um concerto especial que marca o arranque do festival. Música, audiovisual e energia coletiva para abrir 15 dias de criatividade sem limites.',
    badges: ['CONCERTO', 'ENTRADA LIVRE'],
}

export const concertosProgramme: ConcertosContract[] = [
    { id: 1, band_name: 'BEATS BY ETIC_Algarve', description: 'DJ SET', info_link: null, social_link: null, image: null, start_datetime: '2026-07-04T20:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 2, band_name: 'SOUND EXPERIMENTS', description: 'CONCERTO', info_link: null, social_link: null, image: null, start_datetime: '2026-07-05T19:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 3, band_name: 'ELECTRO / VISUAL SHOWCASE', description: 'SHOWCASE', info_link: null, social_link: null, image: null, start_datetime: '2026-07-06T20:30:00', location: 'IPDJ, Faro', is_active: true },
    { id: 4, band_name: 'NOISE & TEXTURES LIVE', description: 'LIVE', info_link: null, social_link: null, image: null, start_datetime: '2026-07-07T19:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 5, band_name: 'ALUNOS EM PALCO SESSÃO 1', description: 'CONCERTO', info_link: null, social_link: null, image: null, start_datetime: '2026-07-08T20:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 6, band_name: 'VIBE COLLECTIVE DJ SET', description: 'DJ SET', info_link: null, social_link: null, image: null, start_datetime: '2026-07-09T21:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 7, band_name: 'ACÚSTICO E EXPERIMENTAL', description: 'LIVE', info_link: null, social_link: null, image: null, start_datetime: '2026-07-10T20:30:00', location: 'IPDJ, Faro', is_active: true },
    { id: 8, band_name: 'HAPPENING MULTIDISCIPLINAR', description: 'HAPPENING', info_link: null, social_link: null, image: null, start_datetime: '2026-07-11T20:00:00', location: 'IPDJ, Faro', is_active: true },
]

export const concertosHappenings = [
    { title: 'FRAGMENTOS SONOROS', desc: 'Performance sonora' },
    { title: 'LUGARES INTERIORES', desc: 'Performance audiovisual' },
    { title: 'CORPOS EM MOVIMENTO', desc: 'Dança e projeção' },
    { title: 'PAISAGENS SONORAS', desc: 'Instalação sonora' },
    { title: 'INTERFERÊNCIAS AO VIVO', desc: 'Live experimental' },
]

export const concertosFeatures = [
    {
        icon: <Music2 size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'MÚSICA AO VIVO',
        desc: 'Concertos, DJ sets e lives com diferentes linguagens e sonoridades.',
    },
    {
        icon: <Shuffle size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'PERFORMANCES MULTIDISCIPLINARES',
        desc: 'Happenings que juntam música, vídeo, dança e arte digital.',
    },
    {
        icon: <Eye size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'EXPERIÊNCIAS IMERSIVAS',
        desc: 'Ambientes criativos que convidam à descoberta e participação.',
    },
]


// Projecoes

export const projecoesMetrics = [
    {
        icon: <CalendarDays size={38} strokeWidth={1.8} />,
        value: '',
        label: 'Quando?',
        desc: 'Durante o Out of the Box 2026 — uma semana de cinema.',
    },
    {
        icon: <MapPin size={38} strokeWidth={1.8} />,
        value: '',
        label: 'IPDJ, FARO',
        desc: 'Auditório Principal — exibições públicas e gratuitas.',
    },
    {
        icon: <Users size={38} strokeWidth={1.8} />,
        value: '',
        label: 'SESSÕES',
        desc: 'Sessões temáticas ao longo do festival.',
    },
    {
        icon: <Star size={38} strokeWidth={1.8} />,
        value: '',
        label: 'ENTRADA LIVRE',
        desc: 'Abertas ao público. A tua presença faz a diferença.',
    },
]

export const projecoesSessions: CinemaContract[] = [
    { id: 1, title: 'NARRATIVAS DO REAL', director_team: 'REALIZAÇÃO', synopsis: 'Curtas-metragens de ficção e documentário.', duration: '90m', social_link: null, image: null, start_datetime: '2026-07-09T19:00:00', location: 'AUDITÓRIO', is_active: true },
    { id: 2, title: 'OLHARES DO AMANHÃ', director_team: 'CINEMA', synopsis: 'Histórias, personagens e novas formas de ver o mundo.', duration: '90m', social_link: null, image: null, start_datetime: '2026-07-10T19:00:00', location: 'AUDITÓRIO', is_active: true },
    { id: 3, title: 'DE ATRÁS DAS CÂMARAS', director_team: 'TV', synopsis: 'Projetos de reportagem, entretenimento e formatos TV.', duration: '90m', social_link: null, image: null, start_datetime: '2026-07-11T19:00:00', location: 'AUDITÓRIO', is_active: true },
    { id: 4, title: 'EXPERIMENTAR É CRIAR', director_team: 'REALIZAÇÃO', synopsis: 'Trabalhos experimentais e autorais dos alunos.', duration: '90m', social_link: null, image: null, start_datetime: '2026-07-12T19:00:00', location: 'AUDITÓRIO', is_active: true },
    { id: 5, title: 'BEST OF OUT OF THE BOX', director_team: 'ESPECIAL', synopsis: 'Seleção dos melhores projetos do festival.', duration: '90m', social_link: null, image: null, start_datetime: '2026-07-16T19:00:00', location: 'AUDITÓRIO', is_active: true },
]

export const projecoesFeatures = [
    {
        icon: <Play size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'PROJETOS FINAIS',
        desc: 'Trabalhos originais de alunos das áreas de Realização, Cinema e TV.',
    },
    {
        icon: <Users size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'SESSÕES PÚBLICAS',
        desc: 'Exibição em auditório, abertas ao público durante o festival.',
    },
    {
        icon: <Star size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'CRIATIVIDADE SEM LIMITES',
        desc: 'Ficção, documentário, experimental, reportagem e muito mais.',
    },
]


// Workshops

export const workshopsAreas = [
    { icon: <Zap size={26} strokeWidth={1.5} />, name: 'DESIGN', color: '#c8ff00', desc: 'Comunicação visual, branding e design de experiências.' },
    { icon: <Camera size={26} strokeWidth={1.5} />, name: 'FOTOGRAFIA', color: '#f97316', desc: 'Imagem, luz e composição para contar histórias.' },
    { icon: <Film size={26} strokeWidth={1.5} />, name: 'VÍDEO', color: '#ec4899', desc: 'Realização, edição e produção audiovisual e cinematográfica.' },
    { icon: <Music2 size={26} strokeWidth={1.5} />, name: 'SOM', color: '#a855f7', desc: 'Captação, edição e produção de som profissional.' },
    { icon: <Code2 size={26} strokeWidth={1.5} />, name: 'PROGRAMAÇÃO', color: '#22c55e', desc: 'Desenvolvimento criativo, interativo e tecnológico.' },
    { icon: <Megaphone size={26} strokeWidth={1.5} />, name: 'MARKETING', color: '#f97316', desc: 'Estratégia, conteúdo e comunicação de impacto.' },
    { icon: <Gamepad2 size={26} strokeWidth={1.5} />, name: 'VIDEOJOGOS', color: '#3b82f6', desc: 'Design, narrativa e prototipagem de jogos.' },
    { icon: <Tv2 size={26} strokeWidth={1.5} />, name: 'CINEMA / TV', color: '#ec4899', desc: 'Escrita, produção e linguagens para ecrã e televisão.' },
]

export const workshopsAreaColor: Record<string, string> = {
    'DESIGN': '#c8ff00',
    'FOTOGRAFIA': '#f97316',
    'VÍDEO': '#ec4899',
    'SOM': '#a855f7',
    'PROGRAMAÇÃO': '#22c55e',
    'MARKETING': '#f97316',
    'VIDEOJOGOS': '#3b82f6',
    'CINEMA/TV': '#ec4899',
}

export const workshopsWorkshops: WorkshopsContract[] = [
    { id: 1, title: 'DESIGN QUE COMUNICA', description: 'Do briefing ao conceito final', mentor_name: 'EQUIPA DESIGN', duration: '3h', max_participants: 20, mentor_social: null, registration_link: null, image: null, start_datetime: '2026-07-04T10:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 2, title: 'LUZ, CÂMARA, AÇÃO!', description: 'Realização de vídeo na prática', mentor_name: 'EQUIPA VÍDEO', duration: '3h', max_participants: 20, mentor_social: null, registration_link: null, image: null, start_datetime: '2026-07-05T14:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 3, title: 'SOM EM DETALHE', description: 'Gravação, edição e mixagem', mentor_name: 'EQUIPA SOM', duration: '3h', max_participants: 20, mentor_social: null, registration_link: null, image: null, start_datetime: '2026-07-06T10:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 4, title: 'FOTOGRAFIA CRIATIVA', description: 'Composição e narrativa visual', mentor_name: 'EQUIPA FOTO', duration: '3h', max_participants: 20, mentor_social: null, registration_link: null, image: null, start_datetime: '2026-07-08T14:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 5, title: 'CÓDIGO CRIATIVO', description: 'Interatividade com Javascript', mentor_name: 'EQUIPA DEV', duration: '3h', max_participants: 20, mentor_social: null, registration_link: null, image: null, start_datetime: '2026-07-11T14:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 6, title: 'CONTEÚDO QUE MARCA', description: 'Estratégia e criação de campanhas', mentor_name: 'EQUIPA MARKETING', duration: '3h', max_participants: 20, mentor_social: null, registration_link: null, image: null, start_datetime: '2026-07-12T10:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 7, title: 'CRIAR PARA JOGAR', description: 'Design e prototipagem de jogos', mentor_name: 'EQUIPA GAMES', duration: '3h', max_participants: 20, mentor_social: null, registration_link: null, image: null, start_datetime: '2026-07-15T14:00:00', location: 'IPDJ, Faro', is_active: true },
    { id: 8, title: 'DO GUIÃO AO ECRÃ', description: 'Escrita e produção para TV/Cinema', mentor_name: 'EQUIPA CINEMA', duration: '3h', max_participants: 20, mentor_social: null, registration_link: null, image: null, start_datetime: '2026-07-17T10:00:00', location: 'IPDJ, Faro', is_active: true },
]

export const workshopsMetrics = [
    { icon: <CalendarDays size={38} strokeWidth={1.8} />, value: '', label: 'WORKSHOPS', desc: 'Workshops práticos, nas diferentes áreas formativas.' },
    { icon: <MapPin size={38} strokeWidth={1.8} />, value: '', label: 'IPDJ, FARO', desc: 'Instalações do IPDJ — Instituto Português do Desporto e Juventude.' },
    { icon: <Clock size={38} strokeWidth={1.8} />, value: '', label: 'POR SESSÃO', desc: 'Sessões  totalmente práticas.' },
    { icon: <Ticket size={38} strokeWidth={1.8} />, value: '', label: 'ENTRADA GRÁTIS', desc: 'Participação gratuita mediante disponibilidade e inscrição prévia.' },
]

export const workshopFilterAreas = ['TODAS', 'DESIGN', 'FOTOGRAFIA', 'VÍDEO', 'SOM', 'PROGRAMAÇÃO', 'MARKETING', 'VIDEOJOGOS', 'CINEMA/TV']


// Palestras

export const palestrasTypeColors: Record<SessionType, string> = {
    'PALESTRA': '#c8ff00',
    'WORKSHOP': '#60a5fa',
    'CONCERTOS': '#fb923c',
    'PROJEÇÕES': '#a855f7',
}



export const sunsetTalksSessions: SunsetTalksContract[] = [
    { id: 1, type: 'PALESTRA', title: 'O Futuro do Design é Humano', speaker_name: 'Inês Almeida', speaker_activity: 'Designer & Art Director', description: 'Uma reflexão sobre o papel do design num mundo cada vez mais tecnológico.', image: null, start_datetime: '2026-07-03T10:00:00', location: 'SALA 1', is_active: true, speaker_info_link: null, social_link: null, registration_link: null },
    { id: 2, type: 'PALESTRA', title: 'Criar Marcas que Ficam', speaker_name: 'Tiago Gouveia', speaker_activity: 'Brand Strategist', description: 'Como construir identidades visuais com significado e fazer marcas que deixam marca.', image: null, start_datetime: '2026-07-03T14:00:00', location: 'SALA 3', is_active: true, speaker_info_link: null, social_link: null, registration_link: null },
    { id: 3, type: 'PALESTRA', title: 'Do Algarve para o Mundo', speaker_name: 'Carlos Nobre', speaker_activity: 'Empreendedor Digital', description: 'Como construir uma carreira criativa internacional sem sair do Algarve.', image: null, start_datetime: '2026-07-04T14:30:00', location: 'SALA 2', is_active: true, speaker_info_link: null, social_link: null, registration_link: null },
    { id: 4, type: 'PALESTRA', title: 'Game Design do Zero', speaker_name: 'Filipe Guerreiro', speaker_activity: 'Game Designer', description: 'O processo de criação de um videojogo, desde o conceito inicial até ao lançamento.', image: null, start_datetime: '2026-07-05T11:00:00', location: 'SALA 3', is_active: true, speaker_info_link: null, social_link: null, registration_link: null },
    { id: 5, type: 'PALESTRA', title: 'UX/UI no Mercado Real', speaker_name: 'Vanessa Monteiro', speaker_activity: 'Product Designer', description: 'Da teoria ao projeto: como funciona o processo de design de produto em empresas tech.', image: null, start_datetime: '2026-07-07T10:00:00', location: 'SALA 3', is_active: true, speaker_info_link: null, social_link: null, registration_link: null },
    { id: 6, type: 'PALESTRA', title: 'Fotografia Documental', speaker_name: 'Pedro Tavares', speaker_activity: 'Fotógrafo Documental', description: 'Ética, técnica e oportunidades na fotografia documental e reportagem.', image: null, start_datetime: '2026-07-11T10:00:00', location: 'SALA 7', is_active: true, speaker_info_link: null, social_link: null, registration_link: null },
]

export const palestrasEventDays = [
    { day: 3, weekday: 'SEX' }, { day: 4, weekday: 'SÁB' }, { day: 5, weekday: 'DOM' },
    { day: 6, weekday: 'SEG' }, { day: 7, weekday: 'TER' }, { day: 8, weekday: 'QUA' },
    { day: 9, weekday: 'QUI' }, { day: 10, weekday: 'SEX' }, { day: 11, weekday: 'SÁB' },
    { day: 12, weekday: 'DOM' }, { day: 13, weekday: 'SEG' }, { day: 14, weekday: 'TER' },
    { day: 15, weekday: 'QUA' }, { day: 16, weekday: 'QUI' }, { day: 17, weekday: 'SEX' },
]

export const palestrasAllTypes = ['TODAS', 'PALESTRA', 'WORKSHOP', 'CONCERTOS', 'PROJEÇÕES'] as const
export const palestrasAllSalas = ['TODAS', 'SALA 1', 'SALA 2', 'SALA 3', 'SALA 4', 'SALA 5', 'SALA 6', 'SALA 7', 'SALA 8'] as const
export const palestrasPageSize = 4


// Exposições

export const exposicoesAreaColors: Record<ExhibitionArea, string> = {
    DESIGN: '#fb923c',
    FOTO: '#60a5fa',
    GAMES: '#c8ff00',
    LABIA: '#ec4899',
}

export const exposicoesAreaLabels: Record<ExhibitionArea, string> = {
    DESIGN: 'Design',
    FOTO: 'Fotografia',
    GAMES: 'Videojogos',
    LABIA: 'Espaço Lábia',
}


export const exposicoesDestaques: ExposicoesContract[] = [
    { id: 1, title: 'Identidades em Movimento', area: 'DESIGN', image: null, synopsis: 'Projetos de design gráfico que exploram identidade, cultura e comunicação visual.', artists: 'Turma de Design 2024', opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
    { id: 2, title: 'Olhares do Algarve', area: 'FOTO', image: null, synopsis: 'Fotografias que captam paisagens, pessoas e histórias que nos rodeiam.', artists: 'Turma de Fotografia 2024', opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
    { id: 3, title: 'Mundos Interativos', area: 'GAMES', image: null, synopsis: 'Experiências de jogo desenvolvidas pelos alunos, da ideia ao protótipo.', artists: 'Turma de Videojogos 2024', opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
    { id: 4, title: 'Narrativas Visuais', area: 'FOTO', image: null, synopsis: 'Projetos fotográficos que contam histórias através da luz e da composição.', artists: 'Turma de Fotografia 2024', opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
    { id: 5, title: 'Exposição Final OOTB', area: 'DESIGN', image: null, synopsis: 'Uma seleção dos melhores projetos do ano, reunidos numa exposição imperdível.', artists: 'Alunos ETIC_Algarve 2024', opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
]

export const exposicoesGalleryImages = [Fundo, Fundo, Fundo, Fundo, Fundo, Fundo]

export const exposicoesDestCardW = 216  // 200px card + 16px gap
export const exposicoesGalCardW = 212  // 200px card + 12px gap-3

export const exposicoesCriatividade = [
    { icon: <Star size={24} />, label: 'PROJETOS FINAIS', desc: 'Trabalhos originais desenvolvidos ao longo do curso, do conceito à apresentação final.' },
    { icon: <Eye size={24} />, label: 'MOSTRA PÚBLICA', desc: 'Aberta a todos, esta é uma oportunidade de conhecer e apoiar o talento emergente da ETIC_Algarve.' },
    { icon: <Zap size={24} />, label: 'TALENTO MULTIDISCIPLINAR', desc: 'Três áreas criativas, múltiplas perspetivas e um mesmo objetivo: criar impacto.' },
]