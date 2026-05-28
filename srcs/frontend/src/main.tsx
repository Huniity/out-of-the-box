import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'

import App from './App'
import Navbar from './components/core/Navbar'
import Footer from './components/core/Footer'

import Concertos from './pages/Concertos'
import Exposicoes from './pages/Exposicoes'
import SunsetTalks from './pages/SunsetTalks'
import Cinema from './pages/Cinema'
import Programacao from './pages/Programacao'
import SemanaLabia from './pages/SemanaLabia'
import SpeedHunting from './pages/SpeedHunting'
import Workshops from './pages/Workshops'
import Dashboard from './pages/Dashboard'

import { PAGE_SLUG_MAP } from './utils/dashboard'

const slugToName = Object.fromEntries(
  Object.entries(PAGE_SLUG_MAP).map(([name, slug]) => [`/${slug}`, name])
)

const MainLayout = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    const name = slugToName[pathname] ?? (pathname === '/programacao' ? 'Programação' : undefined)
    document.title = name ? `${name} — Out of the Box` : 'Out of the Box'
  }, [pathname])
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
        <Route path="/programacao" element={<Programacao />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/semana-labia" element={<SemanaLabia />} />
        <Route path="/speed-hunting" element={<SpeedHunting />} />
        <Route path="/workshops" element={<Workshops />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
)
