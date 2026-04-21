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

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 640

function CaseStudies() {
  const navigate = useNavigate()
  return (
    <main className="flex flex-col px-4 py-16" style={{ backgroundColor: '#312e2d', paddingLeft: isMobile ? '1rem' : '4rem', paddingRight: isMobile ? '1rem' : '4rem' }}>
      <TransitionLink to="/" className="self-start text-xs tracking-widest uppercase mb-12" style={{ color: '#99acff' }}>
        Back
      </TransitionLink>
      <p className="text-xs tracking-widest uppercase mb-4 text-center" style={{ color: '#99acff' }}>III — The Fool</p>
      <h1 className="font-light tracking-widest uppercase mb-12 text-center" style={{ color: '#f0f0ff', fontSize: isMobile ? '2rem' : '2.5rem' }}>Case Studies</h1>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem', width: '100%', maxWidth: '64rem', alignSelf: 'center', paddingBottom: '6rem' }}>
        {studies.map((study) => (
          <div key={study.path} onClick={() => navigate(study.path)} className="cursor-pointer p-6 rounded-2xl flex flex-col gap-4" style={{ background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef) border-box', border: '2px solid transparent' }}>
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
