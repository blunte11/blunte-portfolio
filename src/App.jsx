import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import CaseStudies from './pages/CaseStudies'
import ClientProjects from './pages/ClientProjects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import IdaBoatHouse from './pages/client-projects/IdahoBoatHouse'
import ExclusiveExcavation from './pages/client-projects/ExclusiveExcavation'
import WestPointWateringHole from './pages/client-projects/WestPointWateringHole'
import N3Beauty from './pages/client-projects/N3Beauty'
import ToadstoolFarm from './pages/client-projects/ToadstoolFarm'
import RSCookEnterprises from './pages/client-projects/RSCookEnterprises'
import SnailSpa from './pages/case-studies/SnailSpa'
import AlienAttic from './pages/case-studies/AlienAttic'
import ChronicallyCurious from './pages/case-studies/ChronicallyCurious'
import IntrovertAtlas from './pages/case-studies/IntrovertAtlas'
import MothAndMoon from './pages/case-studies/MothAndMoon'
import HealthHarbor from './pages/case-studies/HealthHarbor'
import UrbanNest from './pages/case-studies/UrbanNest'
import SpiceSiren from './pages/case-studies/SpiceSiren'
import LongBoiInk from './pages/case-studies/LongBoiInk'

function AppContent() {
  const [fading, setFading] = useState(false)
  return (
    <>
      <div id="page-overlay" style={{ position: 'fixed', inset: 0, backgroundColor: '#312e2d', opacity: fading ? 1 : 0, transition: 'opacity 0.6s ease', pointerEvents: 'none', zIndex: 9999 }} />
      <Routes>
        <Route path="/" element={<Home setFading={setFading} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<CaseStudies />} />
        <Route path="/client-projects" element={<ClientProjects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client-projects/idaho-boat-house" element={<IdaBoatHouse />} />
        <Route path="/client-projects/exclusive-excavation" element={<ExclusiveExcavation />} />
        <Route path="/client-projects/west-point-watering-hole" element={<WestPointWateringHole />} />
        <Route path="/client-projects/n3-beauty" element={<N3Beauty />} />
        <Route path="/client-projects/toadstool-farm" element={<ToadstoolFarm />} />
        <Route path="/client-projects/rs-cook-enterprises" element={<RSCookEnterprises />} />
        <Route path="/case-studies/snail-spa" element={<SnailSpa />} />
        <Route path="/case-studies/alien-attic" element={<AlienAttic />} />
        <Route path="/case-studies/chronically-curious" element={<ChronicallyCurious />} />
        <Route path="/case-studies/introvert-atlas" element={<IntrovertAtlas />} />
        <Route path="/case-studies/moth-and-moon" element={<MothAndMoon />} />
        <Route path="/case-studies/health-harbor" element={<HealthHarbor />} />
        <Route path="/case-studies/urban-nest" element={<UrbanNest />} />
        <Route path="/case-studies/spice-siren" element={<SpiceSiren />} />
        <Route path="/case-studies/long-boi-ink" element={<LongBoiInk />} />
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
