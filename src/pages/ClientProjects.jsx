import TransitionLink from '../components/TransitionLink'
import MiniCard from '../components/MiniCard'

function ClientProjects() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-8"
      style={{ backgroundColor: '#312e2d' }}
    >
      <TransitionLink
        to="/"
        className="absolute top-8 left-8 text-xs tracking-widest uppercase"
        style={{ color: '#99acff' }}
      >
        ← Back
      </TransitionLink>

      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#99acff' }}>
        II — Judgement
      </p>
      <h1 className="text-4xl font-light tracking-widest uppercase mb-16" style={{ color: '#f0f0ff' }}>
        Client Projects
      </h1>

      <p className="text-sm font-light" style={{ color: '#f0f0ff' }}>
        Content coming soon.
      </p>

      <MiniCard
        number="II"
        meaning="Judgement is the moment of reckoning — real work, real results, real accountability. These are the sites that exist in the world."
      />
    </main>
  )
}

export default ClientProjects