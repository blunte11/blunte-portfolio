import TarotCard from '../components/TarotCard'
import Footer from '../components/Footer'

const cards = [
  { number: 'I', name: 'The High Priestess', section: 'Skills', path: '/skills' },
  { number: 'II', name: 'Judgement', section: 'Client Projects', path: '/client-projects' },
  { number: 'III', name: 'The Fool', section: 'Case Studies', path: '/work' },
  { number: 'IV', name: 'The Sun', section: 'About', path: '/about' },
  { number: 'V', name: 'The Star', section: 'Resume', path: '/resume' },
  { number: 'VI', name: 'The Moon', section: 'Contact', path: '/contact' },
]

function Home({ setFading }) {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-8 py-12"
      style={{ backgroundColor: '#312e2d' }}
    >
      <h1
        className="text-4xl font-light tracking-widest uppercase mb-2"
        style={{ color: '#f0f0ff' }}
      >
        Brit Lunte
      </h1>
      <p
        className="text-sm tracking-widest uppercase mb-16"
        style={{ color: '#99acff' }}
      >
        Website Designer & UI/UX
      </p>

   <div className="grid grid-cols-3 w-full max-w-7xl gap-x-48 gap-y-20 px-24">
        {cards.map((card) => (
          <TarotCard
            key={card.path}
            number={card.number}
            name={card.name}
            section={card.section}
            path={card.path}
            setFading={setFading}
          />
        ))}
      </div>
    <Footer />
    </main>
  )
}

export default Home