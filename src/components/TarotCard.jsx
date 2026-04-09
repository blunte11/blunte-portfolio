import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import cardBack from '../assets/images/tarot-card-back.png'

function TarotCard({ number, name, section, path, setFading }) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [zooming, setZooming] = useState(false)

  function handleClick() {
    setFlipped(true)
    setTimeout(() => {
      setZooming(true)
      setFading(true)
    }, 1800)
    setTimeout(() => {
      navigate(path)
      setFading(false)
      setFlipped(false)
      setZooming(false)
    }, 2500)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="cursor-pointer w-full" style={{ perspective: '1000px' }} onMouseEnter={() => { if (!flipped) setHovered(true) }} onMouseLeave={() => { if (!flipped) setHovered(false) }} onClick={handleClick}>
        <div style={{ transition: zooming ? 'transform 0.7s ease-in' : 'transform 1.2s ease', transformStyle: 'preserve-3d', transform: zooming ? 'rotateY(180deg) scale(4)' : flipped ? 'rotateY(180deg) scale(1.05)' : hovered ? 'rotateY(20deg) scale(1.05)' : 'rotateY(0deg) scale(1)', position: 'relative', aspectRatio: '2/3', borderRadius: '1rem' }}>
          <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: 'hidden', background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef) border-box', border: '2px solid transparent' }}>
            <img src={cardBack} alt="tarot card back" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef)' }}>
            <p className="text-xs tracking-widest uppercase" style={{ color: '#1a1917' }}>{section}</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#99acff' }}>{number}</p>
        <p className="text-sm font-light tracking-wide" style={{ color: '#f0f0ff' }}>{name}</p>
        <p className="text-xs tracking-widest uppercase mt-1" style={{ color: '#99acff' }}>{section}</p>
      </div>
    </div>
  )
}

export default TarotCard
