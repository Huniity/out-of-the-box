import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.css'

import App from './App'
import Navbar from './components/core/Navbar'
import Footer from './components/core/Footer'

import Concertos from './pages/Concertos'
import Exposicoes from './pages/Exposicoes'
import SunsetTalks from './pages/SunsetTalks'
import Cinema from './pages/Cinema'
import SemanaLabia from './pages/SemanaLabia'
import SpeedHunting from './pages/SpeedHunting'
import Workshops from './pages/Workshops'
import Dashboard from './pages/Dashboard'

import { PAGE_SLUG_MAP } from './utils/dashboard'
import type { ApiPage } from './types/dashboard'

const baseTitle = document.title

const MainLayout = () => {
  const { pathname } = useLocation()
  const [slugToName, setSlugToName] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch('/api/pages/')
      .then(r => r.json())
      .then((pages: ApiPage[]) => {
        const map: Record<string, string> = {}
        pages.forEach(p => {
          const slug = PAGE_SLUG_MAP[p.name]
          if (slug !== undefined) map[`/${slug}`] = p.name
        })
        setSlugToName(map)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const name = slugToName[pathname]
    document.title = name ? `${name} — ${baseTitle}` : baseTitle
  }, [pathname, slugToName])
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/concertos" element={<Concertos />} />
        <Route path="/exposicoes" element={<Exposicoes />} />
        <Route path="/sunset-talks" element={<SunsetTalks />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/semana-labia" element={<SemanaLabia />} />
        <Route path="/speed-hunting" element={<SpeedHunting />} />
        <Route path="/workshops" element={<Workshops />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)
