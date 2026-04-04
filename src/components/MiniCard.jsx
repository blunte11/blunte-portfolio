import { useState } from 'react'
import cardBack from '../assets/images/tarot-card-back.png'

function MiniCard({ number, meaning }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="fixed bottom-8 right-8 flex flex-col items-center gap-2 cursor-pointer"
      style={{ perspective: '600px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          transition: 'transform 0.8s ease',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          position: 'relative',
          width: '80px',
          aspectRatio: '2/3',
          borderRadius: '0.5rem',
        }}
      >
        <div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            border: '2px solid #5271ff',
          }}
        >
          <img
            src={cardBack}
            alt="tarot card"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 rounded-lg flex flex-col items-center justify-center gap-2 p-3"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#1a1917',
            border: '2px solid #ffa9ef',
          }}
        >
          <p
            className="text-xs tracking-widest uppercase text-center"
            style={{ color: '#99acff' }}
          >
            {number}
          </p>
        </div>
      </div>

      <p className="text-xs tracking-widest uppercase" style={{ color: '#99acff' }}>
        {flipped ? 'close' : 'the card'}
      </p>

      {flipped && (
        <div
          className="absolute bottom-28 right-0 w-48 p-4 rounded-xl text-xs font-light leading-relaxed"
          style={{
            color: '#f0f0ff',
            backgroundColor: '#1a1917',
            border: '2px solid #99acff',
          }}
        >
          {meaning}
        </div>
      )}
    </div>
  )
}

export default MiniCard