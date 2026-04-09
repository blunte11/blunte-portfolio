import TransitionLink from '../components/TransitionLink'
import MiniCard from '../components/MiniCard'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const studies = [
  { title: 'The Snail Spa Collective', type: 'Service Business', path: '/case-studies/snail-spa' },
  { title: 'Alien Attic', type: 'E-Commerce', path: '/case-studies/alien-attic' },
  { title: 'Chronically Curious Cartographer', type: 'Digital Art Shop', path: '/case-studies/chronically-curious' },
  { title: 'The Introvert Atlas', type: 'Blog & Content Hub', path: '/case-studies/introvert-atlas' },
  { title: 'Moth & Moon Apothecary', type: 'Local Business', path: '/case-studies/moth-and-moon' },
  { title: 'Health Harbor', type: 'SaaS App Landing Page', path: '/case-studies/health-harbor' },
  { title: 'Urban Nest Initiative', type: 'Nonprofit', path: '/case-studies/urban-nest' },
  { title: 'Spice Siren', type: 'Brand Identity', path: '/case-studies/spice-siren' },
  { title: 'Long Boi Ink', type: 'Specialty Studio', path: '/case-studies/long-boi-ink' },
]

function CaseStudies() {
  const navigate = useNavigate()
  return (
    <main className="min-h-screen flex flex-col px-16 py-20" style={{ backgroundColor: '#312e2d' }}>
      <TransitionLink to="/" className="self-start text-xs tracking-widest uppercase mb-16" style={{ color: '#99acff' }}>
        Back
      </TransitionLink>
      <p className="text-xs tracking-widest uppercase mb-4 text-center" style={{ color: '#99acff' }}>III — The Fool</p>
      <h1 className="text-4xl font-light tracking-widest uppercase mb-16 text-center" style={{ color: '#f0f0ff' }}>Case Studies</h1>
      <div className="grid grid-cols-3 gap-8 w-full max-w-5xl self-center">
        {studies.map((study) => (
          <div key={study.path} onClick={() => navigate(study.path)} className="cursor-pointer p-8 rounded-2xl flex flex-col gap-4" style={{ background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef) border-box', border: '2px solid transparent' }}>
            <p className="text-xs tracking-widest uppercase" style={{ color: '#99acff' }}>{study.type}</p>
            <p className="text-sm font-light tracking-wide" style={{ color: '#f0f0ff' }}>{study.title}</p>
            <p className="text-xs tracking-widest uppercase mt-auto" style={{ color: '#99acff' }}>View Case Study →</p>
          </div>
        ))}
      </div>
      <MiniCard number="III" meaning="The Fool leaps before he looks, driven by curiosity and joy. Case Studies live here because the best creative work starts with a willingness to play." />
      <Footer />
    </main>
  )
}

export default CaseStudies
