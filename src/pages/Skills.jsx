import TransitionLink from '../components/TransitionLink'
import MiniCard from '../components/MiniCard'
import Footer from '../components/Footer'

const skills = [
  { category: 'Design Tools', items: ['Figma', 'Canva', 'Procreate', 'Adobe Illustrator', 'Adobe XD', 'Affinity Designer'] },
  { category: 'Development', items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'JavaScript', 'AI-Assisted Development'] },
  { category: 'Platforms', items: ['Wix Studio', 'Shopify', 'Squarespace', 'WordPress', 'Framer', 'Vercel'] },
  { category: 'Design Disciplines', items: ['UI/UX Design', 'Graphic Design', 'Brand Identity', 'Typography', 'Layout Design', 'Digital Illustration', 'Social Media Design', 'Print Design', 'Logo Design'] },
  { category: 'Process', items: ['Wireframing', 'Prototyping', 'Client Communication', 'Project Management', 'Responsive Design', 'Accessibility', 'User Research', 'Design Handoff'] },
  { category: 'Currently Learning', items: ['JavaScript Fundamentals', 'Advanced Figma', 'Motion & Animation Design', '3D Design', 'Adobe Suite'] },
]

function Skills() {
  return (
    <main className="flex flex-col items-center px-16 py-20" style={{ backgroundColor: '#312e2d' }}>
      <TransitionLink to="/" className="self-start text-xs tracking-widest uppercase mb-16" style={{ color: '#99acff' }}>
        Back
      </TransitionLink>
      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#99acff' }}>I — The High Priestess</p>
      <h1 className="text-4xl font-light tracking-widest uppercase mb-16" style={{ color: '#f0f0ff' }}>Skills</h1>
      <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
        {skills.map((group) => (
          <div key={group.category} style={{ background: 'linear-gradient(#1a1917, #1a1917) padding-box, linear-gradient(135deg, #8B5CF6, #99acff, #ffa9ef) border-box', border: '2px solid transparent', borderRadius: '1rem' }} className="p-8">
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#99acff' }}>{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="text-xs tracking-wide px-3 py-1 rounded-full" style={{ color: '#f0f0ff', backgroundColor: '#2a2826', border: '1px solid #3a3836' }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <MiniCard number="I" meaning="The High Priestess holds hidden knowledge and mastered intuition. She was chosen for Skills because the best designers do not just know their tools, they know when and why to use them." />
      <Footer />
    </main>
  )
}

export default Skills
