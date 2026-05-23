import { CalendarDays, FolderOpen, Users, Star, Zap, Users2, Puzzle, Rocket, ChevronRight, ChevronDown, ArrowRight, Eye, MapPin, Ticket, Briefcase, MessageSquare, Link2, Shuffle, Music2, Play, Clock, Camera, Film, Code2, Megaphone, Gamepad2, Tv2 } from 'lucide-react'
import proj from '../assets/FUNDO.jpg'
import Fundo from '../assets/FUNDO.jpg'
import { Session, SessionType } from '../types/palestras'
import { Exhibition, ExhibitionArea } from '../types/exhibitions'

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


// Palestras

export const palestrasTypeColors: Record<SessionType, string> = {
  'PALESTRA':     '#c8ff00',
  'WORKSHOP':     '#60a5fa',
  'CONCERTOS': '#fb923c',
  'PROJEÇÕES': '#a855f7',
}



export const palestrasSessions: Session[] = [
  // ── 3 Jul ──
  { id: 1,  day: 3,  time: '10:00', location: 'SALA 1', type: 'PALESTRA',  title: 'O Futuro do Design é Humano',         speaker_name: 'Inês Almeida',                    speaker_activity: 'Designer & Art Director',   description: 'Uma reflexão sobre o papel do design num mundo cada vez mais tecnológico e sobre como a empatia e a criatividade continuam a ser essenciais.', image: Fundo },
  { id: 2,  day: 3,  time: '11:30', location: 'SALA 2', type: 'WORKSHOP',  title: 'Motion Design com Propósito',         speaker_name: 'Rui Tomás',                       speaker_activity: 'Motion Designer',           description: 'Workshop prático sobre storytelling visual, animação e ferramentas para criar impacto.',                                                    image: Fundo },
  { id: 3,  day: 3,  time: '14:00', location: 'SALA 3', type: 'PALESTRA',  title: 'Criar Marcas que Ficam',              speaker_name: 'Tiago Gouveia',                   speaker_activity: 'Brand Strategist',          description: 'Como construir identidades visuais com significado e fazer marcas que deixam marca.',                                                       image: Fundo },
  { id: 4,  day: 3,  time: '15:45', location: 'SALA 4', type: 'CONCERTOS', title: 'Criatividade sem Fronteiras',         speaker_name: 'Marta Nunes · João Correia · Inês Lopes', moderator: 'Pedro Fernandes', speaker_activity: 'Mesa Redonda', description: 'Uma conversa sobre processos criativos, colaboração e o impacto da educação no futuro.', image: Fundo },
  // ── 4 Jul ──
  { id: 5,  day: 4,  time: '10:00', location: 'SALA 2', type: 'PROJEÇÕES', title: 'Fotografia de Produto',               speaker_name: 'Ana Sofia Ferreira',              speaker_activity: 'Fotógrafa Comercial',       description: 'Técnicas e setup para fotografar produtos de forma profissional com equipamento acessível.', image: Fundo },
  { id: 6,  day: 4,  time: '14:30', location: 'SALA 2', type: 'PALESTRA',  title: 'Do Algarve para o Mundo',             speaker_name: 'Carlos Nobre',                    speaker_activity: 'Empreendedor Digital',      description: 'Como construir uma carreira criativa internacional sem sair do Algarve.', image: Fundo },
  // ── 5 Jul ──
  { id: 7,  day: 5,  time: '11:00', location: 'SALA 3', type: 'PALESTRA',  title: 'Game Design do Zero',                 speaker_name: 'Filipe Guerreiro',                speaker_activity: 'Game Designer',             description: 'O processo de criação de um videojogo, desde o conceito inicial até ao lançamento.', image: Fundo },
  { id: 8,  day: 5,  time: '15:00', location: 'SALA 4', type: 'WORKSHOP',  title: 'Som e Identidade de Marca',           speaker_name: 'Luísa Marques',                   speaker_activity: 'Sound Designer',            description: 'Como o som define marcas, emoções e experiências. Workshop prático com ferramentas básicas.', image: Fundo },
  // ── 6 Jul ──
  { id: 9,  day: 6,  time: '10:30', location: 'SALA 2', type: 'CONCERTOS', title: 'Ilustração e Mercado Editorial',      speaker_name: 'Beatriz Cruz',                    speaker_activity: 'Ilustradora',               description: 'Percurso na ilustração editorial e como chegar ao mercado de livros e revistas.', image: Fundo },
  { id: 10, day: 6,  time: '14:00', location: 'SALA 2', type: 'WORKSHOP',  title: 'Edição de Vídeo Avançada',            speaker_name: 'Marco Faria',                     speaker_activity: 'Editor de Vídeo',           description: 'Fluxos de trabalho profissionais em DaVinci Resolve e After Effects.', image: Fundo },
  // ── 7 Jul ──
  { id: 11, day: 7,  time: '10:00', location: 'SALA 3', type: 'PALESTRA',  title: 'UX/UI no Mercado Real',               speaker_name: 'Vanessa Monteiro',                speaker_activity: 'Product Designer',          description: 'Da teoria ao projeto: como funciona o processo de design de produto em empresas tech.', image: Fundo },
  { id: 12, day: 7,  time: '15:30', location: 'SALA 4', type: 'PROJEÇÕES', title: 'O Futuro das Profissões Criativas',   speaker_name: 'Ricardo Santos · Cláudia Leal',   moderator: 'Ana Costa', speaker_activity: 'Mesa Redonda', description: 'Debate sobre as tendências do mercado e as competências que as empresas procuram.', image: Fundo },
  // ── 8 Jul ──
  { id: 13, day: 8,  time: '11:00', location: 'SALA 5', type: 'WORKSHOP',  title: 'Produção Musical para Imagem',        speaker_name: 'DJ Marcos',                       speaker_activity: 'Produtor Musical',          description: 'Criação de trilhas sonoras e sound design para vídeo, publicidade e experiências.', image: Fundo },
  { id: 14, day: 8,  time: '16:00', location: 'SALA 6', type: 'CONCERTOS', title: 'Arquitectura de Marca Digital',       speaker_name: 'Joana Pereira',                   speaker_activity: 'Brand Strategist',          description: 'Como as marcas se constroem no digital e o papel do design em cada ponto de contacto.', image: Fundo },
  // ── 9 & 10 Jul (Speed Hunting) — sem palestras ──
  // ── 11 Jul ──
  { id: 15, day: 11, time: '10:00', location: 'SALA 7', type: 'PALESTRA',  title: 'Fotografia Documental',               speaker_name: 'Pedro Tavares',                   speaker_activity: 'Fotógrafo Documental',      description: 'Ética, técnica e oportunidades na fotografia documental e reportagem.', image: Fundo },
  { id: 16, day: 11, time: '14:30', location: 'SALA 8', type: 'WORKSHOP',  title: 'Narrativa Visual em Banda Desenhada', speaker_name: 'Sofia Matos',                     speaker_activity: 'Ilustradora & BD',          description: 'Estrutura narrativa, storyboard e composição visual na banda desenhada.', image: Fundo },
]

export const palestrasEventDays = [
  { day: 3,  weekday: 'SEX' }, { day: 4,  weekday: 'SÁB' }, { day: 5,  weekday: 'DOM' },
  { day: 6,  weekday: 'SEG' }, { day: 7,  weekday: 'TER' }, { day: 8,  weekday: 'QUA' },
  { day: 9,  weekday: 'QUI' }, { day: 10, weekday: 'SEX' }, { day: 11, weekday: 'SÁB' },
  { day: 12, weekday: 'DOM' }, { day: 13, weekday: 'SEG' }, { day: 14, weekday: 'TER' },
  { day: 15, weekday: 'QUA' }, { day: 16, weekday: 'QUI' }, { day: 17, weekday: 'SEX' },
]

export const palestrasAllTypes  = ['TODAS', 'PALESTRA', 'WORKSHOP', 'CONCERTOS', 'PROJEÇÕES'] as const
export const palestrasAllSalas  = ['TODAS', 'SALA 1', 'SALA 2', 'SALA 3', 'SALA 4', 'SALA 5', 'SALA 6', 'SALA 7', 'SALA 8'] as const
export const palestrasPageSize = 4


// Exposições

export const exposicoesAreaColors: Record<ExhibitionArea, string> = {
  DESIGN: '#fb923c',
  FOTO:   '#60a5fa',
  GAMES:  '#c8ff00',
  LABIA:  '#ec4899',
}

export const exposicoesAreaLabels: Record<ExhibitionArea, string> = {
  DESIGN: 'Design',
  FOTO:   'Fotografia',
  GAMES:  'Videojogos',
  LABIA:  'Espaço Lábia',
}


export const exposicoesDestaques: Exhibition[] = [
  { id: 1, title: 'Identidades em Movimento', area: 'DESIGN', image: Fundo, synopsis: 'Projetos de design gráfico que exploram identidade, cultura e comunicação visual.',        artists: 'Turma de Design 2024',       opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
  { id: 2, title: 'Olhares do Algarve',       area: 'FOTO',   image: Fundo,   synopsis: 'Fotografias que captam paisagens, pessoas e histórias que nos rodeiam.',              artists: 'Turma de Fotografia 2024',   opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
  { id: 3, title: 'Mundos Interativos',        area: 'GAMES',  image: Fundo,  synopsis: 'Experiências de jogo desenvolvidas pelos alunos, da ideia ao protótipo.',            artists: 'Turma de Videojogos 2024',   opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
  { id: 4, title: 'Narrativas Visuais',        area: 'FOTO',   image: Fundo,   synopsis: 'Projetos fotográficos que contam histórias através da luz e da composição.',        artists: 'Turma de Fotografia 2024',   opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
  { id: 5, title: 'Exposição Final OOTB',      area: 'DESIGN', image: Fundo, synopsis: 'Uma seleção dos melhores projetos do ano, reunidos numa exposição imperdível.',     artists: 'Alunos ETIC_Algarve 2024',   opening_hours: '09:00 - 18:00', start_date: '2024-07-03', end_date: '2024-07-17', location: 'IPDJ, Faro', is_active: true },
]

export const exposicoesGalleryImages = [Fundo, Fundo, Fundo, Fundo, Fundo, Fundo]

export const exposicoesDestCardW = 216  // 200px card + 16px gap
export const exposicoesGalCardW  = 212  // 200px card + 12px gap-3

export const exposicoesCriatividade = [
  { icon: <Star size={24} />, label: 'PROJETOS FINAIS',         desc: 'Trabalhos originais desenvolvidos ao longo do curso, do conceito à apresentação final.' },
  { icon: <Eye size={24} />,  label: 'MOSTRA PÚBLICA',          desc: 'Aberta a todos, esta é uma oportunidade de conhecer e apoiar o talento emergente da ETIC_Algarve.' },
  { icon: <Zap size={24} />,  label: 'TALENTO MULTIDISCIPLINAR', desc: 'Três áreas criativas, múltiplas perspetivas e um mesmo objetivo: criar impacto.' },
]