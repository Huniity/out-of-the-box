import { CalendarDays, FolderOpen, Users, Star, Zap, Users2, Puzzle, Rocket, Eye, MapPin, Ticket, Briefcase, MessageSquare, Link2, Shuffle, Music2, Play, Clock } from 'lucide-react'
import proj from '../assets/etic_algarve/FUNDO.webp'
import Fundo from '../assets/etic_algarve/FUNDO.webp'

import wsIconDesign     from '../assets/icons/AREAS/design_lime.webp'
import wsIconFoto       from '../assets/icons/AREAS/foto_yellow.webp'
import wsIconVideo      from '../assets/icons/AREAS/video_pink.webp'
import wsIconSom        from '../assets/icons/AREAS/som_purple.webp'
import wsIconPw         from '../assets/icons/AREAS/pw_green.webp'
import wsIconMarketing  from '../assets/icons/AREAS/marketing_orange.webp'
import wsIconJogos      from '../assets/icons/AREAS/jogos_blue.webp'
import wsIconCinema     from '../assets/icons/AREAS/cinema_pale_pink.webp'
import { Session, SessionType } from '../types/sunsetTalks'
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

export const speedHuntingCompanies = [
    { company_name: 'ALGARVE CREATIVE', category: 'DESIGN',    company_logo: null, company_description: 'Agência criativa com foco em branding, design e estratégia para marcas autênticas.' },
    { company_name: 'PIXEL FORGE',      category: 'VIDEO',     company_logo: null, company_description: 'Produção de vídeo e motion graphics com projetos nacionais e internacionais.' },
    { company_name: 'SONORA STUDIO',    category: 'SOM',       company_logo: null, company_description: 'Estúdio de som e música para publicidade, cinema, jogos e conteúdos digitais.' },
    { company_name: 'LUMIA TECH',       category: 'PW',        company_logo: null, company_description: 'Soluções tecnológicas e desenvolvimento de software à medida.' },
    { company_name: 'BRAND HOUSE',      category: 'MARKETING', company_logo: null, company_description: 'Estratégia de marca, comunicação digital e campanhas que geram resultados.' },
    { company_name: 'FRAME LAB',        category: 'FOTO',      company_logo: null, company_description: 'Fotografia e conteúdo visual para marcas, pessoas e eventos.' },
    { company_name: 'CUBO INTERATIVO',  category: 'PW',        company_logo: null, company_description: 'Desenvolvimento web, apps e experiências interativas sob medida.' },
    { company_name: 'NORTE FILMES',     category: 'VIDEO',     company_logo: null, company_description: 'Produtora de conteúdo audiovisual focada em histórias e impacto.' },
    { company_name: 'VOZES CRIATIVAS',  category: 'SOM',       company_logo: null, company_description: 'Design de som, locução e produção musical para multimédia.' },
    { company_name: 'FOCO VISUAL',      category: 'FOTO',      company_logo: null, company_description: 'Fotografia publicitária e corporativa com olhar contemporâneo.' },
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
    info_link: 'https://www.eticalgarve.com/comunidade/live-insight/',
    social_link: 'https://www.instagram.com/liveinsight.etic',
}

export const concertosProgramme = [
    { id: 1, band_name: 'LIVE IN SIGHT',              description: 'O concerto de abertura do Out of the Box 2026. Uma noite de estreias ao vivo com os alunos de Som e Áudio da ETIC_Algarve — música, energia e criatividade para arrancar o festival.',        info_link: 'https://www.eticalgarve.com/comunidade/live-insight/', social_link: 'https://www.instagram.com/liveinsight.etic',        image: null, start_datetime: '2026-07-03T21:00:00', location: 'Palco Principal — IPDJ, Faro', is_active: true },
    { id: 2, band_name: 'THE ALGARVE COLLECTIVE',     description: 'Projeto de fusão entre jazz, funk e eletrónica criado por músicos do sul de Portugal. Uma performance ao vivo que combina instrumentação acústica com produção digital em tempo real.',         info_link: 'https://www.thealgarvecollective.com',                 social_link: 'https://www.instagram.com/thealgarvecollective',    image: null, start_datetime: '2026-07-07T20:30:00', location: 'Palco Principal — IPDJ, Faro', is_active: true },
    { id: 3, band_name: 'NOITE EM BRANCO',            description: 'Duo de música eletrónica e voz formado por ex-alunos da ETIC_Algarve. Composições ambientais e letras em português que falam de identidade e território.',                                    info_link: 'https://www.noiteembranco.pt',                         social_link: 'https://www.instagram.com/noiteembranco.music',     image: null, start_datetime: '2026-07-12T21:30:00', location: 'Palco Exterior — IPDJ, Faro',  is_active: true },
    { id: 4, band_name: 'BEATS BY ETIC',              description: 'DJ set coletivo dos alunos de Produção Musical. Uma noite de sets eletrónicos que explora diferentes géneros — de house a drum & bass — com visuais criados pelas turmas de Motion Design.',   info_link: null,                                                  social_link: 'https://www.instagram.com/eticalgarve',             image: null, start_datetime: '2026-07-05T20:00:00', location: 'Palco Interior — IPDJ, Faro',  is_active: true },
    { id: 5, band_name: 'SOUND EXPERIMENTS',          description: 'Concerto experimental dos alunos de Som, explorando soundscapes, noise e texturas sonoras. Uma viagem imersiva pelos limites do som.',                                                        info_link: null,                                                  social_link: null,                                                image: null, start_datetime: '2026-07-08T19:00:00', location: 'Sala Experimental — IPDJ, Faro', is_active: true },
    { id: 6, band_name: 'HAPPENING MULTIDISCIPLINAR', description: 'Performance coletiva que junta alunos de Som, Vídeo, Design e Dança. Um happening único que celebra a criatividade cruzada e encerra a semana do festival em grande.',                         info_link: null,                                                  social_link: 'https://www.instagram.com/eticalgarve',             image: null, start_datetime: '2026-07-17T20:00:00', location: 'Palco Principal — IPDJ, Faro', is_active: true },
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
    { id: 1, title: 'NARRATIVAS DO REAL',      director_team: 'Turma Realização A', synopsis: 'Curtas-metragens de ficção e documentário que exploram histórias do quotidiano com um olhar autoral e contemporâneo.', duration: '90', social_link: null, image: null, start_datetime: '2026-07-09T19:00:00', location: 'Auditório ETIC', is_active: true },
    { id: 2, title: 'OLHARES DO AMANHÃ',        director_team: 'Turma Cinema B',     synopsis: 'Histórias, personagens e novas formas de ver o mundo através da linguagem cinematográfica dos alunos finalistas.', duration: '85', social_link: null, image: null, start_datetime: '2026-07-10T19:00:00', location: 'Auditório ETIC', is_active: true },
    { id: 3, title: 'DE ATRÁS DAS CÂMARAS',     director_team: 'Turma TV',           synopsis: 'Projetos de reportagem, entretenimento e formatos TV produzidos e realizados pelos alunos da área de Televisão.', duration: '80', social_link: null, image: null, start_datetime: '2026-07-11T19:00:00', location: 'Auditório ETIC', is_active: true },
    { id: 4, title: 'EXPERIMENTAR É CRIAR',     director_team: 'Turma Realização B', synopsis: 'Trabalhos experimentais e autorais que desafiam os limites da narrativa visual e sonora.', duration: '75', social_link: null, image: null, start_datetime: '2026-07-12T19:00:00', location: 'Auditório ETIC', is_active: true },
    { id: 5, title: 'BEST OF OUT OF THE BOX',   director_team: 'Seleção Festival',   synopsis: 'Seleção dos melhores projetos do festival — uma celebração do talento dos alunos da ETIC_Algarve.', duration: '120', social_link: null, image: null, start_datetime: '2026-07-16T19:00:00', location: 'Auditório ETIC', is_active: true },
    { id: 6, title: 'SESSÃO DE ENCERRAMENTO',   director_team: 'Vários',             synopsis: 'Sessão final do festival com premiação e exibição dos projetos mais votados pelo público e pelo júri.', duration: '100', social_link: null, image: null, start_datetime: '2026-07-17T19:00:00', location: 'Auditório ETIC', is_active: true },
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

export const workshopsWorkshops = [
    { id: 1, title: 'DESIGN QUE COMUNICA',  description: 'Do briefing ao conceito final — um processo criativo completo.',     mentor_name: 'Equipa Design',    mentor_social: null, category: 'DESIGN',    duration: '3h', max_participants: 20, registration_link: null, start_datetime: '2026-07-04T10:00:00', location: 'Sala Design',    is_active: true },
    { id: 2, title: 'LUZ, CÂMARA, AÇÃO!',   description: 'Realização de vídeo na prática, do storyboard ao corte final.',     mentor_name: 'Equipa Vídeo',     mentor_social: null, category: 'VIDEO',     duration: '3h', max_participants: 15, registration_link: null, start_datetime: '2026-07-05T14:00:00', location: 'Estúdio Vídeo', is_active: true },
    { id: 3, title: 'SOM EM DETALHE',        description: 'Gravação, edição e mixagem — da captação à master final.',         mentor_name: 'Equipa Som',       mentor_social: null, category: 'SOM',       duration: '3h', max_participants: 12, registration_link: null, start_datetime: '2026-07-06T10:00:00', location: 'Estúdio Som',   is_active: true },
    { id: 4, title: 'FOTOGRAFIA CRIATIVA',  description: 'Composição e narrativa visual através da câmara.',                 mentor_name: 'Equipa Fotografia', mentor_social: null, category: 'FOTO',      duration: '3h', max_participants: 18, registration_link: null, start_datetime: '2026-07-08T14:00:00', location: 'Sala Foto',     is_active: true },
    { id: 5, title: 'CÓDIGO CRIATIVO',       description: 'Interatividade e animação com JavaScript no browser.',             mentor_name: 'Equipa Dev',       mentor_social: null, category: 'PW',        duration: '3h', max_participants: 20, registration_link: null, start_datetime: '2026-07-11T14:00:00', location: 'Lab Digital',   is_active: true },
    { id: 6, title: 'CONTEÚDO QUE MARCA',   description: 'Estratégia e criação de campanhas com impacto real.',              mentor_name: 'Equipa Marketing', mentor_social: null, category: 'MARKETING', duration: '3h', max_participants: 20, registration_link: null, start_datetime: '2026-07-12T10:00:00', location: 'Sala Marketing', is_active: true },
    { id: 7, title: 'CRIAR PARA JOGAR',      description: 'Design e prototipagem de jogos, do conceito ao protótipo.',       mentor_name: 'Equipa Games',     mentor_social: null, category: 'JOGOS',     duration: '3h', max_participants: 16, registration_link: null, start_datetime: '2026-07-15T14:00:00', location: 'Lab Jogos',     is_active: true },
    { id: 8, title: 'DO GUIÃO AO ECRÃ',     description: 'Escrita e produção para TV e Cinema — da ideia ao argumento.',    mentor_name: 'Equipa Cinema',    mentor_social: null, category: 'CINEMA',    duration: '3h', max_participants: 15, registration_link: null, start_datetime: '2026-07-17T10:00:00', location: 'Sala Cinema',   is_active: true },
]

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



export const sunsetTalksSessions: Session[] = [
  // ── 3 Jul ──
  { id: 1,  day: 3,  time: '10:00', location: 'SALA 1', type: 'PALESTRA',  title: 'O Futuro do Design é Humano',         speaker_name: 'Inês Almeida',                    speaker_activity: 'Designer & Art Director',   description: 'Uma reflexão sobre o papel do design num mundo cada vez mais tecnológico e sobre como a empatia e a criatividade continuam a ser essenciais.', image: Fundo, category: 'DESIGN' },
  { id: 2,  day: 3,  time: '11:30', location: 'SALA 2', type: 'WORKSHOP',  title: 'Motion Design com Propósito',         speaker_name: 'Rui Tomás',                       speaker_activity: 'Motion Designer',           description: 'Workshop prático sobre storytelling visual, animação e ferramentas para criar impacto.',                                                    image: Fundo, category: 'VIDEO' },
  { id: 3,  day: 3,  time: '14:00', location: 'SALA 3', type: 'PALESTRA',  title: 'Criar Marcas que Ficam',              speaker_name: 'Tiago Gouveia',                   speaker_activity: 'Brand Strategist',          description: 'Como construir identidades visuais com significado e fazer marcas que deixam marca.',                                                       image: Fundo, category: 'MARKETING' },
  { id: 4,  day: 3,  time: '15:45', location: 'SALA 4', type: 'CONCERTOS', title: 'Criatividade sem Fronteiras',         speaker_name: 'Marta Nunes · João Correia · Inês Lopes', moderator: 'Pedro Fernandes', speaker_activity: 'Mesa Redonda', description: 'Uma conversa sobre processos criativos, colaboração e o impacto da educação no futuro.', image: Fundo, category: 'OUTROS' },
  // ── 4 Jul ──
  { id: 5,  day: 4,  time: '10:00', location: 'SALA 2', type: 'PROJEÇÕES', title: 'Fotografia de Produto',               speaker_name: 'Ana Sofia Ferreira',              speaker_activity: 'Fotógrafa Comercial',       description: 'Técnicas e setup para fotografar produtos de forma profissional com equipamento acessível.', image: Fundo, category: 'FOTO' },
  { id: 6,  day: 4,  time: '14:30', location: 'SALA 2', type: 'PALESTRA',  title: 'Do Algarve para o Mundo',             speaker_name: 'Carlos Nobre',                    speaker_activity: 'Empreendedor Digital',      description: 'Como construir uma carreira criativa internacional sem sair do Algarve.', image: Fundo, category: 'MARKETING' },
  // ── 5 Jul ──
  { id: 7,  day: 5,  time: '11:00', location: 'SALA 3', type: 'PALESTRA',  title: 'Game Design do Zero',                 speaker_name: 'Filipe Guerreiro',                speaker_activity: 'Game Designer',             description: 'O processo de criação de um videojogo, desde o conceito inicial até ao lançamento.', image: Fundo, category: 'JOGOS' },
  { id: 8,  day: 5,  time: '15:00', location: 'SALA 4', type: 'WORKSHOP',  title: 'Som e Identidade de Marca',           speaker_name: 'Luísa Marques',                   speaker_activity: 'Sound Designer',            description: 'Como o som define marcas, emoções e experiências. Workshop prático com ferramentas básicas.', image: Fundo, category: 'SOM' },
  // ── 6 Jul ──
  { id: 9,  day: 6,  time: '10:30', location: 'SALA 2', type: 'CONCERTOS', title: 'Ilustração e Mercado Editorial',      speaker_name: 'Beatriz Cruz',                    speaker_activity: 'Ilustradora',               description: 'Percurso na ilustração editorial e como chegar ao mercado de livros e revistas.', image: Fundo, category: 'DESIGN' },
  { id: 10, day: 6,  time: '14:00', location: 'SALA 2', type: 'WORKSHOP',  title: 'Edição de Vídeo Avançada',            speaker_name: 'Marco Faria',                     speaker_activity: 'Editor de Vídeo',           description: 'Fluxos de trabalho profissionais em DaVinci Resolve e After Effects.', image: Fundo, category: 'VIDEO' },
  // ── 7 Jul ──
  { id: 11, day: 7,  time: '10:00', location: 'SALA 3', type: 'PALESTRA',  title: 'UX/UI no Mercado Real',               speaker_name: 'Vanessa Monteiro',                speaker_activity: 'Product Designer',          description: 'Da teoria ao projeto: como funciona o processo de design de produto em empresas tech.', image: Fundo, category: 'DESIGN' },
  { id: 12, day: 7,  time: '15:30', location: 'SALA 4', type: 'PROJEÇÕES', title: 'O Futuro das Profissões Criativas',   speaker_name: 'Ricardo Santos · Cláudia Leal',   moderator: 'Ana Costa', speaker_activity: 'Mesa Redonda', description: 'Debate sobre as tendências do mercado e as competências que as empresas procuram.', image: Fundo, category: 'OUTROS' },
  // ── 8 Jul ──
  { id: 13, day: 8,  time: '11:00', location: 'SALA 5', type: 'WORKSHOP',  title: 'Produção Musical para Imagem',        speaker_name: 'DJ Marcos',                       speaker_activity: 'Produtor Musical',          description: 'Criação de trilhas sonoras e sound design para vídeo, publicidade e experiências.', image: Fundo, category: 'SOM' },
  { id: 14, day: 8,  time: '16:00', location: 'SALA 6', type: 'CONCERTOS', title: 'Arquitectura de Marca Digital',       speaker_name: 'Joana Pereira',                   speaker_activity: 'Brand Strategist',          description: 'Como as marcas se constroem no digital e o papel do design em cada ponto de contacto.', image: Fundo, category: 'MARKETING' },
  // ── 9 & 10 Jul (Speed Hunting) — sem sunset talks ──
  // ── 11 Jul ──
  { id: 15, day: 11, time: '10:00', location: 'SALA 7', type: 'PALESTRA',  title: 'Fotografia Documental',               speaker_name: 'Pedro Tavares',                   speaker_activity: 'Fotógrafo Documental',      description: 'Ética, técnica e oportunidades na fotografia documental e reportagem.', image: Fundo, category: 'FOTO' },
  { id: 16, day: 11, time: '14:30', location: 'SALA 8', type: 'WORKSHOP',  title: 'Narrativa Visual em Banda Desenhada', speaker_name: 'Sofia Matos',                     speaker_activity: 'Ilustradora & BD',          description: 'Estrutura narrativa, storyboard e composição visual na banda desenhada.', image: Fundo, category: 'DESIGN' },
]

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