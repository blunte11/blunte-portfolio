import TransitionLink from '../components/TransitionLink'
import MiniCard from '../components/MiniCard'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const projects = [
  { title: 'Idaho Boat House Kayak Rentals', year: '2021', path: '/client-projects/idaho-boat-house' },
  { title: 'Exclusive Excavation Company', year: '2022', path: '/client-projects/exclusive-excavation' },
  { title: 'West Point Watering Hole', year: '2022', path: '/client-projects/west-point-watering-hole' },
  { title: 'N3 Beauty', year: '2025', path: '/client-projects/n3-beauty' },
  { title: 'Toadstool Farm & Local Market', year: '2025', path: '/client-projects/toadstool-farm' },
  { title: 'R.S. Cook Enterprises', year: '2026', path: '/client-projects/rs-cook-enterprises' },
]

function ClientProjects() {
  const navigate = useNavigate()
  return (
    <main className="min-h-screen flex flex-col px-16 py-20" style={{ backgroundColor: '#312e2d' }}>
      <TransitionLink to="/" className="self-start text-xs tracking-widest uppercase mb-16" style={{ color: '#99acff' }}>
        Back
      </TransitionLink>
      <p className="text-xs tracking-widest uppercase mb-4 text-center" style={{ color: '#99acff' }}>II — Judgement</p>
      <h1 className="text-4xl font-light tracking-widest uppercase mb-16 text-center" style={{ color: '#f0f0ff' }}>Client Projects</h1>
      <div className="grid grid-cols-3 gap-8 w-full max-w-5xl self-center">
        {projects.map((project) => (
          <div key={project.path} onClick={() => navigate(project.path)} className="cursor-pointer p-8 rounded-2xl flex flex-col gap-4" style={{ background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef) border-box', border: '2px solid transparent' }}>
            <p className="text-xs tracking-widest uppercase" style={{ color: '#99acff' }}>{project.year}</p>
            <p className="text-sm font-light tracking-wide" style={{ color: '#f0f0ff' }}>{project.title}</p>
            <p className="text-xs tracking-widest uppercase mt-auto" style={{ color: '#99acff' }}>View Project →</p>
          </div>
        ))}
      </div>
      <MiniCard number="II" meaning="Judgement is the moment of reckoning — real work, real results, real accountability. These are the sites that exist in the world." />
      <Footer />
    </main>
  )
}

export default ClientProjects
