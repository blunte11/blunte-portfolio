import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TransitionLink({ to, children, className, style }) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  function handleClick() {
    const overlay = document.getElementById('page-overlay')
    if (overlay) {
      overlay.style.opacity = '1'
      setTimeout(() => {
        navigate(to)
        setTimeout(() => {
          overlay.style.opacity = '0'
        }, 100)
      }, 600)
    }
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        ...style,
        opacity: hovered ? 0.6 : 1,
        transition: 'opacity 0.3s ease',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
      }}
    >
      {children}
    </button>
  )
}

export default TransitionLink