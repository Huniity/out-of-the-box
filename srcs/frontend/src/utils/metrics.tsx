import { CalendarDays, FolderOpen, Users, Star, Zap, Users2, Puzzle, Rocket, ChevronRight, ChevronDown, ArrowRight, Eye, MapPin, Ticket, Briefcase, MessageSquare, Link2, Shuffle, Music2, Play, Clock, Camera, Film, Code2, Megaphone, Gamepad2, Tv2 } from 'lucide-react'
import proj from '../assets/FUNDO.jpg'

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

export const semanaLabiaProjects = [
    { title: 'NARRATIVAS VISUAIS', image: proj },
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

export const speedHuntingCompanies = [
    { initials: 'AC', name: 'ALGARVE CREATIVE', category: 'DESIGN',      color: '#f97316', desc: 'Agência criativa com foco em branding, design e estratégia para marcas autênticas.' },
    { initials: 'PF', name: 'PIXEL FORGE',      category: 'VÍDEO',       color: '#3b82f6', desc: 'Produção de vídeo e motion graphics com projetos nacionais e internacionais.' },
    { initials: 'SS', name: 'SONORA STUDIO',    category: 'SOM',         color: '#a855f7', desc: 'Estúdio de som e música para publicidade, cinema, jogos e conteúdos digitais.' },
    { initials: 'LT', name: 'LUMIA TECH',       category: 'PROGRAMAÇÃO', color: '#22c55e', desc: 'Soluções tecnológicas e desenvolvimento de software à medida.' },
    { initials: 'BH', name: 'BRAND HOUSE',      category: 'MARKETING',   color: '#ec4899', desc: 'Estratégia de marca, comunicação digital e campanhas que geram resultados.' },
    { initials: 'FL', name: 'FRAME LAB',        category: 'FOTOGRAFIA',  color: '#f97316', desc: 'Fotografia e conteúdo visual para marcas, pessoas e eventos.' },
    { initials: 'CI', name: 'CUBO INTERATIVO',  category: 'PROGRAMAÇÃO', color: '#22c55e', desc: 'Desenvolvimento web, apps e experiências interativas sob medida.' },
    { initials: 'NF', name: 'NORTE FILMES',     category: 'VÍDEO',       color: '#3b82f6', desc: 'Produtora de conteúdo audiovisual focada em histórias e impacto.' },
    { initials: 'VC', name: 'VOZES CRIATIVAS',  category: 'SOM',         color: '#a855f7', desc: 'Design de som, locução e produção musical para multimédia.' },
    { initials: 'FV', name: 'FOCO VISUAL',      category: 'FOTOGRAFIA',  color: '#f97316', desc: 'Fotografia publicitária e corporativa com olhar contemporâneo.' },
]

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

export const concertosProgramme = [
    { day: '4',  month: 'JUL', tag: 'DJ SET',    tagColor: '#f97316', title: 'BEATS BY ETIC',               time: '20:00', venue: 'IPDJ, Faro' },
    { day: '5',  month: 'JUL', tag: 'CONCERTO',  tagColor: '#ec4899', title: 'SOUND EXPERIMENTS',            time: '19:00', venue: 'IPDJ, Faro' },
    { day: '6',  month: 'JUL', tag: 'SHOWCASE',  tagColor: '#a855f7', title: 'ELECTRO / VISUAL SHOWCASE',    time: '20:30', venue: 'IPDJ, Faro' },
    { day: '7',  month: 'JUL', tag: 'LIVE',      tagColor: '#3b82f6', title: 'NOISE & TEXTURES LIVE',        time: '19:00', venue: 'IPDJ, Faro' },
    { day: '8',  month: 'JUL', tag: 'CONCERTO',  tagColor: '#ec4899', title: 'ALUNOS EM PALCO SESSÃO 1',     time: '20:00', venue: 'IPDJ, Faro' },
    { day: '9',  month: 'JUL', tag: 'DJ SET',    tagColor: '#f97316', title: 'VIBE COLLECTIVE DJ SET',       time: '21:00', venue: 'IPDJ, Faro' },
    { day: '10', month: 'JUL', tag: 'LIVE',      tagColor: '#3b82f6', title: 'ACÚSTICO E EXPERIMENTAL',      time: '20:30', venue: 'IPDJ, Faro' },
    { day: '11', month: 'JUL', tag: 'HAPPENING', tagColor: '#ec4899', title: 'HAPPENING MULTIDISCIPLINAR',   time: '20:00', venue: 'IPDJ, Faro' },
]

export const concertosHappenings = [
    { title: 'FRAGMENTOS SONOROS',   desc: 'Performance sonora' },
    { title: 'LUGARES INTERIORES',   desc: 'Performance audiovisual' },
    { title: 'CORPOS EM MOVIMENTO',  desc: 'Dança e projeção' },
    { title: 'PAISAGENS SONORAS',    desc: 'Instalação sonora' },
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

export const projecoesSessions = [
    {
        day: '9',
        month: 'JUL',
        tag: 'REALIZAÇÃO',
        tagColor: '#ec4899',
        title: 'NARRATIVAS DO REAL',
        desc: 'Curtas-metragens de ficção e documentário.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
    {
        day: '10',
        month: 'JUL',
        tag: 'CINEMA',
        tagColor: '#3b82f6',
        title: 'OLHARES DO AMANHÃ',
        desc: 'Histórias, personagens e novas formas de ver o mundo.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
    {
        day: '11',
        month: 'JUL',
        tag: 'TV',
        tagColor: '#22c55e',
        title: 'DE ATRÁS DAS CÂMARAS',
        desc: 'Projetos de reportagem, entretenimento e formatos TV.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
    {
        day: '12',
        month: 'JUL',
        tag: 'REALIZAÇÃO',
        tagColor: '#ec4899',
        title: 'EXPERIMENTAR É CRIAR',
        desc: 'Trabalhos experimentais e autorais dos alunos.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
    {
        day: '16',
        month: 'JUL',
        tag: 'SESSÃO ESPECIAL',
        tagColor: '#a855f7',
        title: 'BEST OF OUT OF THE BOX',
        desc: 'Seleção dos melhores projetos do festival.',
        time: '19:00',
        venue: 'AUDITÓRIO',
    },
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
    { icon: <Zap      size={26} strokeWidth={1.5} />, name: 'DESIGN',       color: '#c8ff00', desc: 'Comunicação visual, branding e design de experiências.' },
    { icon: <Camera   size={26} strokeWidth={1.5} />, name: 'FOTOGRAFIA',   color: '#f97316', desc: 'Imagem, luz e composição para contar histórias.' },
    { icon: <Film     size={26} strokeWidth={1.5} />, name: 'VÍDEO',        color: '#ec4899', desc: 'Realização, edição e produção audiovisual e cinematográfica.' },
    { icon: <Music2   size={26} strokeWidth={1.5} />, name: 'SOM',          color: '#a855f7', desc: 'Captação, edição e produção de som profissional.' },
    { icon: <Code2    size={26} strokeWidth={1.5} />, name: 'PROGRAMAÇÃO',  color: '#22c55e', desc: 'Desenvolvimento criativo, interativo e tecnológico.' },
    { icon: <Megaphone size={26} strokeWidth={1.5} />, name: 'MARKETING',   color: '#f97316', desc: 'Estratégia, conteúdo e comunicação de impacto.' },
    { icon: <Gamepad2 size={26} strokeWidth={1.5} />, name: 'VIDEOJOGOS',   color: '#3b82f6', desc: 'Design, narrativa e prototipagem de jogos.' },
    { icon: <Tv2      size={26} strokeWidth={1.5} />, name: 'CINEMA / TV',  color: '#ec4899', desc: 'Escrita, produção e linguagens para ecrã e televisão.' },
]

export const workshopsAreaColor: Record<string, string> = {
    'DESIGN':       '#c8ff00',
    'FOTOGRAFIA':   '#f97316',
    'VÍDEO':        '#ec4899',
    'SOM':          '#a855f7',
    'PROGRAMAÇÃO':  '#22c55e',
    'MARKETING':    '#f97316',
    'VIDEOJOGOS':   '#3b82f6',
    'CINEMA/TV':    '#ec4899',
}

export const workshopsWorkshops = [
    { num: '01', area: 'DESIGN',      title: 'DESIGN QUE COMUNICA',   desc: 'Do briefing ao conceito final',         team: 'EQUIPA DESIGN',    day: '04', month: 'JUL', time: '10:00 – 13:00' },
    { num: '02', area: 'VÍDEO',       title: 'LUZ, CÂMARA, AÇÃO!',    desc: 'Realização de vídeo na prática',        team: 'EQUIPA VÍDEO',     day: '05', month: 'JUL', time: '14:00 – 17:00' },
    { num: '03', area: 'SOM',         title: 'SOM EM DETALHE',         desc: 'Gravação, edição e mixagem',           team: 'EQUIPA SOM',       day: '06', month: 'JUL', time: '10:00 – 13:00' },
    { num: '04', area: 'FOTOGRAFIA',  title: 'FOTOGRAFIA CRIATIVA',   desc: 'Composição e narrativa visual',         team: 'EQUIPA FOTO',      day: '08', month: 'JUL', time: '14:00 – 17:00' },
    { num: '05', area: 'PROGRAMAÇÃO', title: 'CÓDIGO CRIATIVO',        desc: 'Interatividade com Javascript',         team: 'EQUIPA DEV',       day: '11', month: 'JUL', time: '14:00 – 17:00' },
    { num: '06', area: 'MARKETING',   title: 'CONTEÚDO QUE MARCA',    desc: 'Estratégia e criação de campanhas',     team: 'EQUIPA MARKETING', day: '12', month: 'JUL', time: '10:00 – 13:00' },
    { num: '07', area: 'VIDEOJOGOS',  title: 'CRIAR PARA JOGAR',       desc: 'Design e prototipagem de jogos',        team: 'EQUIPA GAMES',     day: '15', month: 'JUL', time: '14:00 – 17:00' },
    { num: '08', area: 'CINEMA/TV',   title: 'DO GUIÃO AO ECRÃ',      desc: 'Escrita e produção para TV/Cinema',     team: 'EQUIPA CINEMA',    day: '17', month: 'JUL', time: '10:00 – 13:00' },
]

export const workshopsMetrics = [
    { icon: <CalendarDays size={38} strokeWidth={1.8} />, value: '',  label: 'WORKSHOPS',      desc: 'Workshops práticos, nas diferentes áreas formativas.' },
    { icon: <MapPin       size={38} strokeWidth={1.8} />, value: '',   label: 'IPDJ, FARO',     desc: 'Instalações do IPDJ — Instituto Português do Desporto e Juventude.' },
    { icon: <Clock        size={38} strokeWidth={1.8} />, value: '', label: 'POR SESSÃO',     desc: 'Sessões  totalmente práticas.' },
    { icon: <Ticket       size={38} strokeWidth={1.8} />, value: '',   label: 'ENTRADA GRÁTIS', desc: 'Participação gratuita mediante disponibilidade e inscrição prévia.' },
]

export const workshopFilterAreas = ['TODAS', 'DESIGN', 'FOTOGRAFIA', 'VÍDEO', 'SOM', 'PROGRAMAÇÃO', 'MARKETING', 'VIDEOJOGOS', 'CINEMA/TV']