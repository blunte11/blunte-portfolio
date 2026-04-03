import { useNavigate } from 'react-router-dom'

const cards = [
  { number: 'I', name: 'The High Priestess', section: 'Skills', path: '/skills' },
  { number: 'II', name: 'Judgement', section: 'Client Projects', path: '/client-projects' },
  { number: 'III', name: 'The Fool', section: 'Case Studies', path: '/work' },
  { number: 'IV', name: 'The Sun', section: 'About', path: '/about' },
  { number: 'V', name: 'The Star', section: 'Resume', path: '/resume' },
  { number: 'VI', name: 'The Moon', section: 'Contact', path: '/contact' },
]

function Home() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 py-12" style={{backgroundColor: '#312e2d'}}>

      <h1 className="text-4xl font-light tracking-widest uppercase mb-2" style={{color: '#f0f0ff'}}>
        Brit Lunte
      </h1>
      <p className="text-sm tracking-widest uppercase mb-16" style={{color: '#99acff'}}>
        Website Designer & UI/UX
      </p>

      <div className="grid grid-cols-3 w-full max-w-7xl gap-x-48 gap-y-20 px-24">
        {cards.map((card) => (
          <div
            key={card.path}
            onClick={() => navigate(card.path)}
            className="cursor-pointer w-full aspect-[2/3] rounded-2xl flex flex-col items-center justify-between py-10 px-6 transition-all duration-300 hover:scale-105"
style={{
  background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #5271ff, #99acff, #ffa9ef) border-box',
  border: '2px solid transparent',
  borderRadius: '1rem'
}}
          >
            <span className="text-neutral-500 text-xs tracking-widest uppercase">
              {card.number}
            </span>

            <div className="text-center">
              <p className="text-white text-base font-light tracking-wide">
                {card.name}
              </p>
              <p className="text-neutral-500 text-xs tracking-widest uppercase mt-2">
                {card.section}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home