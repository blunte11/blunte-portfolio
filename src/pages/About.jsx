import TransitionLink from '../components/TransitionLink'
import MiniCard from '../components/MiniCard'

function About() {
  return (
    <main
      className="min-h-screen flex flex-col items-center px-16 py-20"
      style={{ backgroundColor: '#312e2d' }}
    >
      <TransitionLink
        to="/"
        className="self-start text-xs tracking-widest uppercase mb-16"
        style={{ color: '#99acff' }}
      >
        ← Back
      </TransitionLink>

      <div className="w-full max-w-3xl">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#99acff' }}>
          III — The Sun
        </p>
        <h1 className="text-4xl font-light tracking-widest uppercase mb-16" style={{ color: '#f0f0ff' }}>
          About
        </h1>

        <div className="flex flex-col gap-6 text-sm font-light leading-relaxed" style={{ color: '#f0f0ff' }}>
          <p>Web design was an accident.</p>

          <p>My dad and I started a river rental company, kayaks, paddle boards, a stretch of river we loved. We needed a website. So I taught myself how to build one on Wix, on a MacBook Air that could barely run the software, with no tech background and no design training. Just stubbornness and a lot of trial and error.</p>

          <p>It took two months. I was proud of it. And apparently other people noticed. A family friend asked me to build hers next. Then my best friend. While I didn't really know what I was doing or what journey into design I was starting, I did just that. I started. They still use those sites today, even though they were my first novice attempts at web design and I would love to upgrade them now.</p>

          <p>That was the beginning.</p>

          <p>I spent the next few years working corporate logistics and administration jobs I didn't love, designing on the side when I had the energy for it. I took a coding bootcamp, learned the basics, realized design was what I actually cared about, and pivoted to a design program where I learned Figma, UI/UX principles, and what it actually means to build for people, not just aesthetics.</p>

          <p>After navigating an unexpected shift in my career path, I made a decision that felt equal parts terrifying and obvious. I needed to stop waiting for someone to hire me and build something of my own. Blunte Studio exists because I chose myself, and because small business owners deserve a designer who genuinely gets what it means to bet on yourself.</p>

          <p>My background is in psychology, which means I came to design already fluent in how people think, what they need, and what makes them trust something. I'm not just building you a website. I'm building something your customers will feel comfortable in, something that communicates who you are before you say a word.</p>

          <p className="text-xs tracking-widest uppercase pt-8" style={{ color: '#99acff' }}>
            Beyond the work
          </p>

          <p>I live in Southern Idaho on a river. I'm someone who gravitates toward things that are slow, intentional, and rooted.</p>

          <p>Outside of design I collect and read tarot, make art in Procreate, knit, bake sweets, bagels and breads, garden, and spend time with my dogs outside hiking, swimming and hunting for mushroom species with the same curiosity I bring to a new client project.</p>

          <p>I'm also a small business owner in more ways than one. I'm helping bring my loved ones' personal business ideas to life on the website, design, administration and small business organization side. These include a local market and gourmet mushroom farm, a vacation rental, and a small private campsite. I bake under a separate project called Electric Bread Co. which I sell privately and coming soon to the market. I say this not to overwhelm you with side ventures, but because I know firsthand what it means to build something from nothing, to figure out branding and presence and customer trust without a roadmap. When I sit down with a small business client, I'm not theorizing. I have been there.</p>

   <p>I work with small businesses who are ready to show up online the way they show up in real life, with intention, passion and purpose.</p>
        </div>
      </div>

      <MiniCard
        number="IV"
        meaning="The Sun is radiance and clarity of self. This card was chosen for About because showing up fully and honestly is how real connection starts."
      />
    </main>
  )
}

export default About