import { CalendarDays, FolderOpen, Users, Star, Zap, Users2, Puzzle, Rocket, ChevronRight, ChevronDown, ArrowRight, Eye, MapPin, Ticket, Briefcase, MessageSquare, Link2 } from 'lucide-react'
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
