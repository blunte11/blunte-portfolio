import TransitionLink from '../components/TransitionLink'
import MiniCard from '../components/MiniCard'
import Footer from '../components/Footer'

const gradientBox = {
  background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef) border-box',
  border: '2px solid transparent',
  borderRadius: '1rem',
}

const contacts = [
  { label: 'Email', value: 'britluntecollective@icloud.com', href: 'mailto:britluntecollective@icloud.com' },
  { label: 'Phone', value: '208-490-7214', href: 'tel:+12084907214' },
  { label: 'Instagram', value: '@blunte.studio', href: 'https://www.instagram.com/blunte.studio' },
  { label: 'Facebook', value: 'Blunte Studio', href: 'https://www.facebook.com/bluntestudio/' },
  { label: 'LinkedIn', value: 'Brit Lunte', href: 'https://www.linkedin.com/in/britlunte' },
]

function Contact() {
  return (
    <main
      className="min-h-screen flex flex-col items-center px-8 py-20"
      style={{ backgroundColor: '#312e2d' }}
    >
      <TransitionLink
        to="/"
        className="self-start text-xs tracking-widest uppercase mb-16"
        style={{ color: '#99acff' }}
      >
        Back
      </TransitionLink>

      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#99acff' }}>
        VI — The Moon
      </p>
      <h1 className="text-4xl font-light tracking-widest uppercase mb-16" style={{ color: '#f0f0ff' }}>
        Contact
      </h1>

      <div className="w-full max-w-md flex flex-col gap-4">
        {contacts.map(({ label, value, href }) => (
          <div key={label} style={gradientBox} className="px-6 py-5 flex justify-between items-center">
            <span className="text-xs tracking-widest uppercase" style={{ color: '#99acff' }}>
              {label}
            </span>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm font-light transition-opacity hover:opacity-70"
              style={{ color: '#f0f0ff', textDecoration: 'none' }}
            >
              {value}
            </a>
          </div>
        ))}
      </div>

      <MiniCard
        number="VI"
        meaning="The Moon governs intuition and the unseen. Contact lives here because the best collaborations start with a feeling before they start with a conversation."
      />
      <Footer />
    </main>
  )
}

export default Contact
