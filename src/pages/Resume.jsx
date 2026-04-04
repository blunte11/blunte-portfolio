import TransitionLink from '../components/TransitionLink'
import MiniCard from '../components/MiniCard'

function Resume() {
  return (
    <main className="min-h-screen flex flex-col items-center px-16 py-20" style={{ backgroundColor: '#312e2d' }}>
      <TransitionLink to="/" className="self-start text-xs tracking-widest uppercase mb-16" style={{ color: '#99acff' }}>
        Back
      </TransitionLink>
      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#99acff' }}>V The Star</p>
      <h1 className="text-4xl font-light tracking-widest uppercase mb-6" style={{ color: '#f0f0ff' }}>Resume</h1>
      <p className="text-sm font-light mb-16 text-center max-w-md" style={{ color: '#99acff' }}>Two versions available. Choose what you need.</p>
      <div className="flex flex-col gap-6 items-center">
        <a href="/Brit-Lunte-Website-Designer-2026.docx" download className="text-xs tracking-widest uppercase px-8 py-4 rounded-full" style={{ color: '#f0f0ff', border: '1px solid #5271ff', textDecoration: 'none' }}>Download ATS Resume (.docx)</a>
        <p className="text-xs font-light" style={{ color: '#99acff' }}>Designer resume coming soon</p>
      </div>
      <MiniCard number="V" meaning="The Star is hope and direction, where you are headed, not just where you have been. Resume lives here because credentials are just the beginning of the story." />
    </main>
  )
}

export default Resume
