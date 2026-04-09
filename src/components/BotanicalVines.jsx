function BotanicalVines() {
  // Reusable leaf shape: petiole + leaf body + midrib, pointing up in local coords.
  // Use <g transform="translate(x,y) rotate(deg)"> to position each.
  const Leaf = ({ x, y, angle, size = 1 }) => {
    const s = size
    return (
      <g transform={`translate(${x},${y}) rotate(${angle})`}>
        <line x1="0" y1="0" x2="0" y2={-10 * s} strokeWidth="1" />
        <path d={`M 0,${-10 * s} C ${7 * s},${-20 * s} ${7 * s},${-33 * s} 0,${-44 * s} C ${-7 * s},${-33 * s} ${-7 * s},${-20 * s} 0,${-10 * s} Z`} />
        <line x1="0" y1={-10 * s} x2="0" y2={-42 * s} strokeWidth="0.5" stroke="white" fill="none" opacity="0.6" />
      </g>
    )
  }

  // Small berry cluster
  const Berry = ({ x, y }) => (
    <g transform={`translate(${x},${y})`}>
      <circle cx="0" cy="0" r="3" />
      <circle cx="6" cy="-4" r="2.5" />
      <circle cx="-5" cy="-5" r="2" />
      <path d="M 0,0 C 2,-8 4,-12 3,-18" fill="none" strokeWidth="0.8" />
    </g>
  )

  // Tendril curl
  const Tendril = ({ x, y, flip = false }) => {
    const f = flip ? -1 : 1
    return (
      <path
        d={`M ${x},${y} C ${x + 12 * f},${y - 8} ${x + 18 * f},${y - 18} ${x + 12 * f},${y - 26} C ${x + 6 * f},${y - 32} ${x},${y - 28} ${x + 2 * f},${y - 22}`}
        fill="none"
        strokeWidth="0.9"
      />
    )
  }

  // The top-left vine design — reused (mirrored) for all 4 corners
  const VineShape = () => (
    <>
      {/* Main sinuous stem */}
      <path
        d="M 6,6 C 20,46 46,90 68,130 C 90,168 112,200 132,244"
        fill="none"
        strokeWidth="1.5"
      />

      {/* Secondary branch off main stem near top, going up-left */}
      <path
        d="M 30,56 C 20,42 12,28 5,16"
        fill="none"
        strokeWidth="1.1"
      />

      {/* Leaves on secondary branch */}
      <Leaf x={18} y={36} angle={-110} size={0.75} />
      <Leaf x={10} y={22} angle={20} size={0.65} />

      {/* Leaves alternating along main stem */}
      <Leaf x={24} y={40} angle={-65} />
      <Leaf x={46} y={82} angle={52} />
      <Leaf x={60} y={112} angle={-78} />
      <Leaf x={80} y={148} angle={48} />
      <Leaf x={100} y={180} angle={-82} size={0.9} />
      <Leaf x={116} y={212} angle={44} size={0.85} />

      {/* Berry cluster mid-stem */}
      <Berry x={70} y={126} />

      {/* Tendril at growing tip */}
      <Tendril x={132} y={244} />
      <Tendril x={125} y={238} flip />
    </>
  )

  const svgProps = {
    width: 210,
    height: 260,
    viewBox: '0 0 210 260',
    fill: 'white',
    stroke: 'white',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: { position: 'absolute', pointerEvents: 'none', zIndex: 0 },
  }

  return (
    <>
      <style>{`
        .vine-cluster {
          opacity: 0.14;
          transition: opacity 1.2s ease;
        }
        main:hover .vine-cluster {
          opacity: 0.28;
        }
        .vine-tl {
          top: 0; left: 0;
          transform-origin: 6px 6px;
          animation: vine-sway 5.2s ease-in-out infinite;
        }
        .vine-tr {
          top: 0; right: 0;
          transform-origin: 204px 6px;
          animation: vine-sway 5.8s ease-in-out infinite 0.9s;
        }
        .vine-bl {
          bottom: 0; left: 0;
          transform-origin: 6px 254px;
          animation: vine-sway 4.6s ease-in-out infinite 1.6s;
        }
        .vine-br {
          bottom: 0; right: 0;
          transform-origin: 204px 254px;
          animation: vine-sway 6.3s ease-in-out infinite 0.4s;
        }
        @keyframes vine-sway {
          0%, 100% { transform: rotate(0deg); }
          28%      { transform: rotate(-1.8deg); }
          72%      { transform: rotate(1.4deg); }
        }
        main:hover .vine-tl { animation: vine-sway-active 3.1s ease-in-out infinite; }
        main:hover .vine-tr { animation: vine-sway-active 3.5s ease-in-out infinite 0.5s; }
        main:hover .vine-bl { animation: vine-sway-active 2.9s ease-in-out infinite 0.8s; }
        main:hover .vine-br { animation: vine-sway-active 3.8s ease-in-out infinite 0.2s; }
        @keyframes vine-sway-active {
          0%, 100% { transform: rotate(0deg); }
          28%      { transform: rotate(-3.8deg); }
          72%      { transform: rotate(3.2deg); }
        }
      `}</style>

      {/* TOP LEFT */}
      <svg className="vine-cluster vine-tl" {...svgProps}>
        <VineShape />
      </svg>

      {/* TOP RIGHT — mirror horizontally */}
      <svg className="vine-cluster vine-tr" {...svgProps}>
        <g transform="scale(-1,1) translate(-210,0)">
          <VineShape />
        </g>
      </svg>

      {/* BOTTOM LEFT — mirror vertically */}
      <svg className="vine-cluster vine-bl" {...svgProps}>
        <g transform="scale(1,-1) translate(0,-260)">
          <VineShape />
        </g>
      </svg>

      {/* BOTTOM RIGHT — mirror both */}
      <svg className="vine-cluster vine-br" {...svgProps}>
        <g transform="scale(-1,-1) translate(-210,-260)">
          <VineShape />
        </g>
      </svg>
    </>
  )
}

export default BotanicalVines
