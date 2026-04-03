import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

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
    <div
      className="cursor-pointer w-full"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => { if (!flipped) setHovered(true) }}
      onMouseLeave={() => { if (!flipped) setHovered(false) }}
      onClick={handleClick}
    >
      <div
        style={{
          transition: 'transform 1.2s ease',
          transformStyle: 'preserve-3d',
        transform: zooming
            ? 'rotateY(180deg) scale(4)'
            : flipped
            ? 'rotateY(180deg) scale(1.05)'
            : hovered
            ? 'rotateY(20deg) scale(1.05)'
            : 'rotateY(0deg) scale(1)',
          transition: zooming
            ? 'transform 0.7s ease-in'
            : 'transform 1.2s ease',
          position: 'relative',
          aspectRatio: '2/3',
          borderRadius: '1rem',
        }}
      >

        {/* Card Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between py-8 px-4 rounded-2xl"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #5271ff, #99acff, #ffa9ef) border-box',
            border: '2px solid transparent',
          }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: '#99acff' }}>
            {number}
          </span>
          <div className="text-center">
            <p className="text-sm font-light tracking-wide" style={{ color: '#f0f0ff' }}>
              {name}
            </p>
            <p className="text-xs tracking-widest uppercase mt-2" style={{ color: '#99acff' }}>
              {section}
            </p>
          </div>
        </div>

        {/* Card Front — revealed on flip */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #5271ff, #99acff, #ffa9ef)',
          }}
        >
          <p className="text-xs tracking-widest uppercase" style={{ color: '#1a1917' }}>
            {section}
          </p>
        </div>

      </div>
    </div>
  )
}

export default TarotCard