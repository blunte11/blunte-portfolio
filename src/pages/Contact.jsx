import TransitionLink from '../components/TransitionLink'
import MiniCard from '../components/MiniCard'

function Contact() {
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

    <p className="text-sm font-light" style={{ color: '#f0f0ff' }}>
        Content coming soon.
      </p>

      <MiniCard
        number="VI"
        meaning="The Moon governs intuition and the unseen. Contact lives here because the best collaborations start with a feeling before they start with a conversation."
      />
    </main>
  )
}

export default Contact