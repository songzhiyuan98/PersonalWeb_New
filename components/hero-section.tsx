"use client"

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
            Explore my open-source projects and development journey. From web applications to AI-powered tools.
          </p>
          <div className="mb-2">6+ Open Source Projects</div>
          <a href="https://github.com/songzhiyuan98" target="_blank" rel="noopener noreferrer" className="underline-animation font-medium">
            Visit GitHub
          </a>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-sm leading-relaxed">
            Experience my work in action. Quick access to project websites and live demos showcasing my technical capabilities.
          </p>
          <div className="mb-2">6+ Live Demos</div>
          <a href="/projects-demo" className="underline-animation font-medium">
            View Projects
          </a>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-sm leading-relaxed">
            Connect with me professionally. Let's discuss opportunities and share insights about technology and innovation.
          </p>
          <div className="mb-2">Professional Network</div>
          <a href="https://www.linkedin.com/in/zhiyuan-song-761651217/" target="_blank" rel="noopener noreferrer" className="underline-animation font-medium">
            Visit LinkedIn
          </a>
        </div>

        <div className="mb-12">
          <p className="mb-4 text-sm leading-relaxed">
            Working Paper: "Multi-organ MRI Charts Biological Aging of Seven Organs and Tissues" (Nature Aging, in preparation, 2025)
          </p>
          <div className="mb-2">Co-authored with M. Duggan, et al.</div>
          <a href="#" className="underline-animation font-medium">
            Read Abstract
          </a>
        </div>
      </div>
    </section>
  )
}
