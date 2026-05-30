import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState, lazy, Suspense } from 'react'
import './index.css'

import App from './App'
import Navbar from './components/core/Navbar'
import Footer from './components/core/Footer'
import ErrorBoundary from './components/core/ErrorBoundary'

import { PAGE_SLUG_MAP } from './utils/dashboard'

const Concertos    = lazy(() => import('./pages/Concertos'))
const Exposicoes   = lazy(() => import('./pages/Exposicoes'))
const SunsetTalks  = lazy(() => import('./pages/SunsetTalks'))
const Cinema       = lazy(() => import('./pages/Cinema'))
const Programacao  = lazy(() => import('./pages/Programacao'))
const SemanaLabia  = lazy(() => import('./pages/SemanaLabia'))
const SpeedHunting = lazy(() => import('./pages/SpeedHunting'))
const Workshops    = lazy(() => import('./pages/Workshops'))
const Dashboard    = lazy(() => import('./pages/Dashboard'))

const slugToName = Object.fromEntries(
  Object.entries(PAGE_SLUG_MAP).map(([name, slug]) => [`/${slug}`, name])
)

const PageFade = () => {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(true)
    const t = setTimeout(() => setVisible(false), 20)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] bg-black transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    />
  )
}

const MainLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const name = slugToName[pathname] ?? (pathname === '/programacao' ? 'Programação' : undefined)
    document.title = name ? `${name} — Out of the Box` : 'Out of the Box'
  }, [pathname])

  return (
    <>
      <PageFade />
      <Navbar />
      <ErrorBoundary resetKey={pathname}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  )
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

// Prevent double createRoot on Vite HMR re-execution
const w = window as typeof window & { __reactRoot?: ReturnType<typeof createRoot> }
const root = w.__reactRoot ?? (w.__reactRoot = createRoot(rootElement))
root.render(
  <BrowserRouter>
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/concertos" element={<Concertos />} />
          <Route path="/exposicoes" element={<Exposicoes />} />
          <Route path="/sunset-talks" element={<SunsetTalks />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/cinema" element={<Cinema />} />
          {/* <Route path="/semana-labia" element={<SemanaLabia />} /> */}
          <Route path="/speed-hunting" element={<SpeedHunting />} />
          <Route path="/workshops" element={<Workshops />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
