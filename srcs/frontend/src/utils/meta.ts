interface PageMeta {
  title: string
  description: string
}

const SITE = 'Out of the Box'
const DEFAULT_DESC = 'O festival criativo da ETIC_Algarve. 3 a 17 de julho 2026, IPDJ, Faro. Exposições, concertos, workshops, cinema e muito mais.'

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: SITE,
    description: DEFAULT_DESC,
  },
  '/exposicoes': {
    title: `Exposições — ${SITE}`,
    description: 'Obras e projetos finais dos formandos da ETIC_Algarve em exposição durante o festival Out of the Box 2026.',
  },
  '/workshops': {
    title: `Workshops — ${SITE}`,
    description: 'Workshops intensivos por área formativa. Aprende com as equipas da ETIC_Algarve no festival Out of the Box 2026 em Faro.',
  },
  '/cinema': {
    title: `Cinema — ${SITE}`,
    description: 'Sessões de cinema e curtas-metragens produzidas pelos formandos da ETIC_Algarve no festival Out of the Box 2026.',
  },
  '/concertos': {
    title: `Concertos — ${SITE}`,
    description: 'Concertos ao vivo com artistas nacionais e internacionais durante o festival Out of the Box 2026 em Faro.',
  },
  '/sunset-talks': {
    title: `Sunset Talks — ${SITE}`,
    description: 'Talks e conferências com profissionais das indústrias criativas no festival Out of the Box 2026.',
  },
  '/speed-hunting': {
    title: `Speed Hunting — ${SITE}`,
    description: 'Encontros rápidos com empresas e recrutadores. Mostra o teu talento no festival Out of the Box 2026.',
  },
  '/programacao': {
    title: `Programação — ${SITE}`,
    description: 'Toda a programação do festival Out of the Box 2026, de 3 a 17 de julho em Faro.',
  },
}

export const DEFAULT_META: PageMeta = {
  title: SITE,
  description: DEFAULT_DESC,
}

const setMetaName = (name: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.name = name
    document.head.appendChild(el)
  }
  el.content = content
}

const setMetaProperty = (property: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.content = content
}

const setCanonical = (href: string) => {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

export const applyPageMeta = (pathname: string) => {
  const meta = PAGE_META[pathname] ?? DEFAULT_META
  const url = `${window.location.origin}${pathname}`

  document.title = meta.title
  setMetaName('description', meta.description)
  setMetaProperty('og:title', meta.title)
  setMetaProperty('og:description', meta.description)
  setMetaProperty('og:url', url)
  setCanonical(url)
}
