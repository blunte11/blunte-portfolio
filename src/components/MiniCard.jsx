import { useState } from 'react'
import cardBack from '../assets/images/tarot-card-back.png'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

function MiniCard({ number, meaning }) {
  const [flipped, setFlipped] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  if (isMobile) {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 flex flex-col items-center"
        style={{ zIndex: 100 }}
      >
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="w-full flex flex-col items-center py-3 gap-1"
          style={{
            backgroundColor: '#1a1917',
            borderTop: '1px solid #8B5CF6',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <div style={{ width: '40px', height: '3px', borderRadius: '2px', backgroundColor: '#99acff', opacity: 0.6 }} />
          <p className="text-xs tracking-widest uppercase" style={{ color: '#99acff' }}>
            {drawerOpen ? 'close' : `${number} — the card`}
          </p>
        </button>

        <div style={{
          width: '100%',
          maxHeight: drawerOpen ? '200px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
          backgroundColor: '#1a1917',
        }}>
          <p className="text-xs font-light leading-relaxed px-6 py-4 text-center" style={{ color: '#f0f0ff' }}>
            {meaning}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-20 right-8 flex flex-col items-center gap-2 cursor-pointer" style={{ perspective: '600px' }} onClick={() => setFlipped(!flipped)}>
      <div style={{ transition: 'transform 0.8s ease', transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', position: 'relative', width: '80px', aspectRatio: '2/3', borderRadius: '0.5rem' }}>
        <div className="absolute inset-0 rounded-lg overflow-hidden" style={{ backfaceVisibility: 'hidden', background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef) border-box', border: '2px solid transparent' }}>
          <img src={cardBack} alt="tarot card" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 rounded-lg flex flex-col items-center justify-center gap-2 p-3" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', backgroundColor: '#1a1917', border: '2px solid #ffa9ef' }}>
          <p className="text-xs tracking-widest uppercase text-center" style={{ color: '#99acff' }}>{number}</p>
        </div>
      </div>
      <p className="text-xs tracking-widest uppercase" style={{ color: '#99acff' }}>{flipped ? 'close' : 'the card'}</p>
      {flipped && (
        <div className="absolute bottom-28 right-0 w-48 p-4 rounded-xl text-xs font-light leading-relaxed" style={{ color: '#f0f0ff', backgroundColor: '#1a1917', border: '2px solid #99acff' }}>
          {meaning}
        </div>
      )}
    </div>
  )
}

export default MiniCard
