import { CalendarDays, FolderOpen, Users, Star, Zap, Users2, Puzzle, Rocket, Eye, MapPin, Ticket, Briefcase, MessageSquare, Link2, Shuffle, Music2, Play, Clock } from 'lucide-react'

import wsIconDesign     from '../assets/icons/AREAS/design_lime.webp'
import wsIconFoto       from '../assets/icons/AREAS/foto_yellow.webp'
import wsIconVideo      from '../assets/icons/AREAS/video_pink.webp'
import wsIconSom        from '../assets/icons/AREAS/som_purple.webp'
import wsIconPw         from '../assets/icons/AREAS/pw_green.webp'
import wsIconMarketing  from '../assets/icons/AREAS/marketing_orange.webp'
import wsIconJogos      from '../assets/icons/AREAS/jogos_blue.webp'
import wsIconCinema     from '../assets/icons/AREAS/cinema_pale_pink.webp'
import { SessionType } from '../types/sunsetTalks'
import { ExhibitionArea } from '../types/exhibitions'

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
        desc: '9 e 10 de julho de 2026 — dois dias de encontros.',
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

// Colors for SpeedHunting category badges — keyed by backend CATEGORY_CHOICES codes
export const speedHuntingCategoryColor: Record<string, string> = {
    'DESIGN':    '#d0ea73',
    'FOTO':      '#f8ad2c',
    'MARKETING': '#f97316',
    'PW':        '#69ffa0',
    'SOM':       '#918fc0',
    'VIDEO':     '#d35f99',
    'JOGOS':     '#3b82f6',
    'OUTROS':    '#a1a1aa',
}

export const speedHuntingCategoryLabel: Record<string, string> = {
    'DESIGN':    'Design',
    'FOTO':      'Fotografia',
    'MARKETING': 'Marketing',
    'PW':        'Programação',
    'SOM':       'Som',
    'VIDEO':     'Vídeo',
    'JOGOS':     'Videojogos',
    'OUTROS':    'Outros',
}

export const speedHuntingCategories = ['TODAS', 'DESIGN', 'FOTO', 'MARKETING', 'PW', 'SOM', 'VIDEO', 'JOGOS']


export const speedHuntingSteps = [
    { num: '01', icon: <Briefcase size={32} strokeWidth={1.5} />,      title: 'PREPARA O TEU PORTFÓLIO',        desc: 'Atualiza os teus melhores projetos e escolhe o que te representa.' },
    { num: '02', icon: <Users size={32} strokeWidth={1.5} />,           title: 'APRESENTA-TE EM POUCOS MINUTOS', desc: 'Tens alguns minutos para te apresentares de forma clara e objetiva.' },
    { num: '03', icon: <MessageSquare size={32} strokeWidth={1.5} />,   title: 'CONVERSA COM EMPRESAS',          desc: 'Fala sobre o teu trabalho, interesses e recebe feedback.' },
    { num: '04', icon: <Link2 size={32} strokeWidth={1.5} />,         title: 'CRIA CONTACTOS PARA O FUTURO',   desc: 'Mantém a ligação e transforma a conversa de hoje em oportunidades amanhã.' },
]

export const speedHuntingTips = [
    'Portfólio atualizado e bem organizado',
    'Apresentação curta e objetiva (1–2 min)',
    'Mostra projetos relevantes para a área',
    'Leva contactos / LinkedIn / QR Code',
    'Atitude profissional e curiosidade',
]

// Concertos


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
        label: 'A festa do cinema da ETIC_Algarve',
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


export const projecoesFeatures = [
    {
        icon: <Play size={32} strokeWidth={1.5} className="text-[#c8ff00]" />,
        title: 'PROJETOS FINAIS',
        desc: 'Trabalhos originais de formandos das áreas de Realização, Cinema e TV.',
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
    { code: 'DESIGN',    icon: <img src={wsIconDesign}    alt="" className="w-full h-full object-contain" />, name: 'DESIGN',       color: '#d0ea73', desc: 'Comunicação visual, branding e design de experiências.' },
    { code: 'FOTO',      icon: <img src={wsIconFoto}      alt="" className="w-full h-full object-contain" />, name: 'FOTOGRAFIA',   color: '#f8ad2c', desc: 'Imagem, luz e composição para contar histórias.' },
    { code: 'VIDEO',     icon: <img src={wsIconVideo}     alt="" className="w-full h-full object-contain" />, name: 'VÍDEO',        color: '#d35f99', desc: 'Realização, edição e produção audiovisual e cinematográfica.' },
    { code: 'SOM',       icon: <img src={wsIconSom}       alt="" className="w-full h-full object-contain" />, name: 'SOM',          color: '#918fc0', desc: 'Captação, edição e produção de som profissional.' },
    { code: 'PW',        icon: <img src={wsIconPw}        alt="" className="w-full h-full object-contain" />, name: 'PROGRAMAÇÃO',  color: '#69ffa0', desc: 'Desenvolvimento criativo, interativo e tecnológico.' },
    { code: 'MARKETING', icon: <img src={wsIconMarketing} alt="" className="w-full h-full object-contain" />, name: 'MARKETING',    color: '#f97316', desc: 'Estratégia, conteúdo e comunicação de impacto.' },
    { code: 'JOGOS',     icon: <img src={wsIconJogos}     alt="" className="w-full h-full object-contain" />, name: 'VIDEOJOGOS',   color: '#3b82f6', desc: 'Design, narrativa e prototipagem de jogos.' },
    { code: 'CINEMA',    icon: <img src={wsIconCinema}    alt="" className="w-full h-full object-contain" />, name: 'CINEMA / TV',  color: '#ffa8d3', desc: 'Escrita, produção e linguagens para ecrã e televisão.' },
]

export const workshopsAreaColor: Record<string, string> = {
    'DESIGN':    '#d0ea73',
    'FOTO':      '#f8ad2c',
    'VIDEO':     '#d35f99',
    'SOM':       '#918fc0',
    'PW':        '#69ffa0',
    'MARKETING': '#f97316',
    'JOGOS':     '#3b82f6',
    'CINEMA':    '#ffa8d3',
}

export const workshopsAreaLabel: Record<string, string> = {
    'DESIGN':    'Design',
    'FOTO':      'Fotografia',
    'VIDEO':     'Vídeo',
    'SOM':       'Som',
    'PW':        'Programação',
    'MARKETING': 'Marketing',
    'JOGOS':     'Videojogos',
    'CINEMA':    'Cinema / TV',
}


export const workshopsMetrics = [
    { icon: <CalendarDays size={38} strokeWidth={1.8} />, value: '',  label: 'WORKSHOPS',      desc: 'Workshops práticos, nas diferentes áreas formativas.' },
    { icon: <MapPin       size={38} strokeWidth={1.8} />, value: '',   label: 'IPDJ, FARO',     desc: 'Instalações do IPDJ — Instituto Português do Desporto e Juventude.' },
    { icon: <Clock        size={38} strokeWidth={1.8} />, value: '', label: 'POR SESSÃO',     desc: 'Sessões  totalmente práticas.' },
    { icon: <Ticket       size={38} strokeWidth={1.8} />, value: '',   label: 'ENTRADA GRÁTIS', desc: 'Participação gratuita mediante disponibilidade e inscrição prévia.' },
]

export const workshopFilterAreas = ['TODAS', 'DESIGN', 'FOTO', 'VIDEO', 'SOM', 'PW', 'MARKETING', 'JOGOS', 'CINEMA']


// Sunset Talks

export const sunsetTalksTypeColors: Record<SessionType, string> = {
  'PALESTRA':     '#c8ff00',
  'WORKSHOP':     '#60a5fa',
  'CONCERTOS': '#fb923c',
  'PROJEÇÕES': '#a855f7',
}




export const sunsetTalksEventDays = [
  { day: 3,  weekday: 'SEX' }, { day: 4,  weekday: 'SÁB' }, { day: 5,  weekday: 'DOM' },
  { day: 6,  weekday: 'SEG' }, { day: 7,  weekday: 'TER' }, { day: 8,  weekday: 'QUA' },
  { day: 9,  weekday: 'QUI' }, { day: 10, weekday: 'SEX' }, { day: 11, weekday: 'SÁB' },
  { day: 12, weekday: 'DOM' }, { day: 13, weekday: 'SEG' }, { day: 14, weekday: 'TER' },
  { day: 15, weekday: 'QUA' }, { day: 16, weekday: 'QUI' }, { day: 17, weekday: 'SEX' },
]

export const sunsetTalksAllTypes  = ['TODAS', 'PALESTRA', 'WORKSHOP', 'CONCERTOS', 'PROJEÇÕES'] as const
export const sunsetTalksAllSalas  = ['TODAS', 'SALA 1', 'SALA 2', 'SALA 3', 'SALA 4', 'SALA 5', 'SALA 6', 'SALA 7', 'SALA 8'] as const
export const sunsetTalksPageSize = 4


// Exposições

export const exposicoesAreaColors: Record<ExhibitionArea, string> = {
  DESIGN: '#fb923c',
  FOTO:   '#60a5fa',
  JOGOS:  '#c8ff00',
  OUTROS: '#ec4899',
}

export const exposicoesAreaLabels: Record<ExhibitionArea, string> = {
  DESIGN: 'Design',
  FOTO:   'Fotografia',
  JOGOS:  'Videojogos',
  OUTROS: 'Outros',
}



export const exposicoesDestCardW = 216  // 200px card + 16px gap
export const exposicoesGalCardW  = 212  // 200px card + 12px gap-3

export const exposicoesCriatividade = [
  { icon: <Star size={24} />, label: 'PROJETOS FINAIS',         desc: 'Trabalhos originais desenvolvidos ao longo do curso, do conceito à apresentação final.' },
  { icon: <Eye size={24} />,  label: 'MOSTRA PÚBLICA',          desc: 'Aberta a todos, esta é uma oportunidade de conhecer e apoiar o talento emergente da ETIC_Algarve.' },
  { icon: <Zap size={24} />,  label: 'TALENTO MULTIDISCIPLINAR', desc: 'Três áreas criativas, múltiplas perspetivas e um mesmo objetivo: criar impacto.' },
]