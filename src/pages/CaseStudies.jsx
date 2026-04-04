import TransitionLink from '../components/TransitionLink'
import MiniCard from '../components/MiniCard'

function CaseStudies() {
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
        III — The Fool
      </p>
      <h1 className="text-4xl font-light tracking-widest uppercase mb-16" style={{ color: '#f0f0ff' }}>
        Case Studies
      </h1>

     <p className="text-sm font-light" style={{ color: '#f0f0ff' }}>
        Content coming soon.
      </p>

      <MiniCard
        number="III"
        meaning="The Fool leaps before he looks, driven by curiosity and joy. Case Studies live here because the best creative work starts with a willingness to play."
      />
    </main>
  )
}

export default CaseStudies