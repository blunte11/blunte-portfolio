import TransitionLink from '../../components/TransitionLink'
import Footer from '../../components/Footer'

function ProjectPage() {
  return (
    <main className="min-h-screen flex flex-col px-16 py-20" style={{ backgroundColor: '#312e2d' }}>
      <TransitionLink to="/client-projects" className="self-start text-xs tracking-widest uppercase mb-16" style={{ color: '#99acff' }}>
        Back
      </TransitionLink>
      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#99acff' }}>Client Project</p>
      <h1 className="text-4xl font-light tracking-widest uppercase mb-16" style={{ color: '#f0f0ff' }}>Coming Soon</h1>
      <Footer />
    </main>
  )
}

export default ProjectPage
