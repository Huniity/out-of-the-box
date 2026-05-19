import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './index.css'


import App from './App'
import Navbar from './components/core/Navbar'
// import MarqueeBanner from './components/homepage/MarqueeBanner'
// <MarqueeBanner />
import Footer from './components/core/Footer'


import Concertos from './pages/Concertos';
import Exposicoes from './pages/Exposicoes';
import Palestras from './pages/Palestras';
import Projecoes from './pages/Projecoes';
import SemanaLabia from './pages/SemanaLabia';
import SpeedHunting from './pages/SpeedHunting';
import Workshops from './pages/Workshops';
import Dashboard from './pages/Dashboard'


const MainLayout = () => (
  <>
    <Navbar />
    {/* <MarqueeBanner /> */}
    <Outlet />
    <Footer />
  </>
)

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />

          <Route path="/concertos" element={<Concertos />} />
          <Route path="/exposicoes" element={<Exposicoes />} />
          <Route path="/palestras" element={<Palestras />} />
          <Route path="/projecoes" element={<Projecoes />} />
          <Route path="/semana-labia" element={<SemanaLabia />} />
          <Route path="/speed-hunting" element={<SpeedHunting />} />
          <Route path="/workshops" element={<Workshops />} />

        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)