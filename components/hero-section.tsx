export default function HeroSection() {
  return (
    <section className="px-6 md:px-12 pt-12 pb-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mb-12">
        Full-Stack is evolving, and I build what's next.
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-400 mb-24">
        CS Junior @ UCSC, crafting web systems and AI-powered applications.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="mb-12">
          <p className="mb-4 text-sm leading-relaxed">
            Personal blog on Medium where I share my thoughts about development, AI, and creativity in the field
          </p>
          <div className="mb-2">12k readers</div>
          <a href="#" className="underline-animation font-medium">
            Read the blog
          </a>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-sm leading-relaxed">
            Interview for Tech Magazine with insights about my journey, the industry, and future trends
          </p>
          <div className="mb-2">64k views</div>
          <a href="#" className="underline-animation font-medium">
            See the interview
          </a>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-sm leading-relaxed">
            I published a case study about a project that I did for a startup this autumn. Spoiler: it's awesome!
          </p>
          <div className="mb-2">12k views</div>
          <a href="#" className="underline-animation font-medium">
            See the case study
          </a>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-sm leading-relaxed">
            My GitHub profile where I share open-source projects as well as snippets from my development journey
          </p>
          <div className="mb-2">7.2k followers</div>
          <a href="#" className="underline-animation font-medium">
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
