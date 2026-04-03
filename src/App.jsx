import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import ClientProjects from './pages/ClientProjects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function AppContent() {
  const [fading, setFading] = useState(false)

  return (
    <>
     <div
        id="page-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: '#312e2d',
          opacity: fading ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <Routes>
        <Route path="/" element={<Home setFading={setFading} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/client-projects" element={<ClientProjects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App