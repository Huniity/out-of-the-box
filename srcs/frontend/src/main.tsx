import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Navbar from './components/core/Navbar'
import MarqueeBanner from './components/homepage/MarqueeBanner'
import Footer from './components/core/Footer'


const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <MarqueeBanner />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)