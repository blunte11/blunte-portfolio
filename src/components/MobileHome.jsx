import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cardBack from '../assets/images/tarot-card-back.png'

const cards = [
  { number: 'I', name: 'The High Priestess', section: 'Skills', path: '/skills' },
  { number: 'II', name: 'Judgement', section: 'Client Projects', path: '/client-projects' },
  { number: 'III', name: 'The Fool', section: 'Case Studies', path: '/work' },
  { number: 'IV', name: 'The Sun', section: 'About', path: '/about' },
  { number: 'V', name: 'The Star', section: 'Resume', path: '/resume' },
  { number: 'VI', name: 'The Moon', section: 'Contact', path: '/contact' },
]

function MobileHome({ setFading }) {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [zooming, setZooming] = useState(false)

  const card = cards[currentIndex]

  function handleTap() {
    if (zooming) return
    if (!flipped) {
      setFlipped(true)
      return
    }
    setZooming(true)
    setFading(true)
    setTimeout(() => {
      navigate(card.path)
      setFading(false)
      setFlipped(false)
      setZooming(false)
    }, 800)
  }

  function goToCard(index) {
    if (index === currentIndex) return
    setFlipped(false)
    setZooming(false)
    setTimeout(() => setCurrentIndex(index), 300)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-between px-6 py-12" style={{ backgroundColor: '#312e2d' }}>
      <div className="text-center">
        <h1 className="text-3xl font-light tracking-widest uppercase mb-2" style={{ color: '#f0f0ff' }}>Brit Lunte</h1>
        <p className="text-xs tracking-widest uppercase" style={{ color: '#99acff' }}>Website Designer & UI/UX</p>
      </div>

      <div className="flex flex-col items-center gap-6 w-full" onClick={handleTap}>
        <div style={{ perspective: '800px', width: '220px' }}>
          <div style={{
            transition: zooming ? 'transform 0.6s ease-in' : 'transform 0.9s ease',
            transformStyle: 'preserve-3d',
            transform: zooming ? 'rotateY(180deg) scale(3)' : flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            position: 'relative',
            width: '220px',
            aspectRatio: '2/3',
            borderRadius: '1rem',
            cursor: 'pointer',
          }}>
            <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{
              backfaceVisibility: 'hidden',
              background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef) border-box',
              border: '2px solid transparent',
            }}>
              <img src={cardBack} alt="tarot card" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl gap-4" style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef)',
            }}>
              <p className="text-lg tracking-widest uppercase font-light" style={{ color: '#1a1917' }}>{card.section}</p>
              <p className="text-xs tracking-widest uppercase opacity-70" style={{ color: '#1a1917' }}>tap to enter</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#99acff' }}>{card.number}</p>
          <p className="text-sm font-light tracking-wide" style={{ color: '#f0f0ff' }}>{card.name}</p>
          <p className="text-xs tracking-widest uppercase mt-1" style={{ color: '#99acff' }}>{card.section}</p>
        </div>

        {!flipped && (
          <p className="text-xs tracking-widest uppercase opacity-50" style={{ color: '#f0f0ff' }}>tap card to reveal</p>
        )}
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-3">
          {cards.map((c, i) => (
            <button
              key={c.path}
              onClick={(e) => { e.stopPropagation(); goToCard(i) }}
              style={{
                width: i === currentIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: i === currentIndex ? '#99acff' : '#3a3836',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
        <a href="https://www.thebritluntecollective.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase" style={{ color: '#99acff', textDecoration: 'none', opacity: 0.6 }}>
          Visit thebritluntecollective.com
        </a>
      </div>
    </main>
  )
}

export default MobileHome
