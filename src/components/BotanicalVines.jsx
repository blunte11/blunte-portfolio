function BotanicalVines() {
  const Leaf = ({ x, y, angle, size = 1 }) => {
    const s = size
    return (
      <g transform={`translate(${x},${y}) rotate(${angle})`}>
        <line x1="0" y1="0" x2="0" y2={-14 * s} strokeWidth="1.2" />
        <path d={`M 0,${-14 * s} C ${10 * s},${-28 * s} ${10 * s},${-46 * s} 0,${-60 * s} C ${-10 * s},${-46 * s} ${-10 * s},${-28 * s} 0,${-14 * s} Z`} />
        <line x1="0" y1={-14 * s} x2="0" y2={-58 * s} strokeWidth="0.6" stroke="white" fill="none" opacity="0.5" />
      </g>
    )
  }

  const Berry = ({ x, y }) => (
    <g transform={`translate(${x},${y})`}>
      <circle cx="0" cy="0" r="4" />
      <circle cx="8" cy="-5" r="3.5" />
      <circle cx="-6" cy="-7" r="3" />
      <circle cx="3" cy="-11" r="2.5" />
      <path d="M 0,0 C 3,-10 5,-16 4,-24" fill="none" strokeWidth="1" />
    </g>
  )

  const Tendril = ({ x, y, flip = false }) => {
    const f = flip ? -1 : 1
    return (
      <path
        d={`M ${x},${y} C ${x + 18 * f},${y - 12} ${x + 26 * f},${y - 26} ${x + 18 * f},${y - 38} C ${x + 8 * f},${y - 46} ${x},${y - 40} ${x + 3 * f},${y - 32}`}
        fill="none"
        strokeWidth="1.1"
      />
    )
  }

  const VineShape = () => (
    <>
      <path d="M 8,8 C 40,80 90,160 140,260 C 180,340 220,400 260,480" fill="none" strokeWidth="2" />
      <path d="M 8,8 C 60,40 120,60 180,80 C 240,100 300,110 360,130" fill="none" strokeWidth="2" />
      <path d="M 40,60 C 20,40 10,20 5,8" fill="none" strokeWidth="1.4" />
      <path d="M 80,140 C 50,110 30,80 15,50" fill="none" strokeWidth="1.3" />
      <path d="M 130,240 C 90,200 60,160 40,120" fill="none" strokeWidth="1.2" />
      <path d="M 80,40 C 120,30 160,25 200,28" fill="none" strokeWidth="1.4" />
      <path d="M 160,70 C 200,60 240,58 280,65" fill="none" strokeWidth="1.2" />
      <Leaf x={20} y={30} angle={-120} size={0.8} />
      <Leaf x={10} y={16} angle={20} size={0.7} />
      <Leaf x={35} y={55} angle={-70} size={1.1} />
      <Leaf x={65} y={105} angle={55} size={1.2} />
      <Leaf x={85} y={155} angle={-80} size={1.1} />
      <Leaf x={110} y={200} angle={50} size={1.0} />
      <Leaf x={135} y={248} angle={-85} size={0.95} />
      <Leaf x={155} y={295} angle={45} size={0.9} />
      <Leaf x={90} y={38} angle={-30} size={0.9} />
      <Leaf x={140} y={52} angle={15} size={1.0} />
      <Leaf x={190} y={62} angle={-25} size={0.85} />
      <Leaf x={250} y={75} angle={10} size={0.8} />
      <Leaf x={310} y={95} angle={-20} size={0.75} />
      <Berry x={75} y={128} />
      <Berry x={175} y={82} />
      <Tendril x={260} y={480} />
      <Tendril x={250} y={472} flip />
      <Tendril x={360} y={130} />
      <Tendril x={350} y={122} flip />
    </>
  )

  const svgProps = {
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
          opacity: 0.18;
          transition: opacity 1.4s ease;
        }
        main:hover .vine-cluster {
          opacity: 0.35;
        }
        .vine-tl {
          top: 0; left: 0;
          transform-origin: top left;
          animation: vine-sway 5.2s ease-in-out infinite;
        }
        .vine-tr {
          top: 0; right: 0;
          transform-origin: top right;
          animation: vine-sway 5.8s ease-in-out infinite 0.9s;
        }
        .vine-bl {
          bottom: 0; left: 0;
          transform-origin: bottom left;
          animation: vine-sway 4.6s ease-in-out infinite 1.6s;
        }
        .vine-br {
          bottom: 0; right: 0;
          transform-origin: bottom right;
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
          28%      { transform: rotate(-3.5deg); }
          72%      { transform: rotate(3deg); }
        }
      `}</style>

      <svg className="vine-cluster vine-tl" width="400" height="520" viewBox="0 0 400 520" {...svgProps}>
        <VineShape />
      </svg>

      <svg className="vine-cluster vine-tr" width="400" height="520" viewBox="0 0 400 520" {...svgProps}>
        <g transform="scale(-1,1) translate(-400,0)">
          <VineShape />
        </g>
      </svg>

      <svg className="vine-cluster vine-bl" width="400" height="520" viewBox="0 0 400 520" {...svgProps}>
        <g transform="scale(1,-1) translate(0,-520)">
          <VineShape />
        </g>
      </svg>

      <svg className="vine-cluster vine-br" width="400" height="520" viewBox="0 0 400 520" {...svgProps}>
        <g transform="scale(-1,-1) translate(-400,-520)">
          <VineShape />
        </g>
      </svg>
    </>
  )
}

export default BotanicalVines
