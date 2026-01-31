"use client";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="w-20 h-1 bg-[var(--primary)] mb-8" />

        <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
          I specialize in building scalable web applications, intelligent systems, and AI automation chatbots.
          My work spans React, Next.js, TypeScript, Python, and Golang, with expertise in third-party software
          integrations and AI solutions like LLMs and RAG pipelines to create smarter, more impactful products.
        </p>

        {/* Two column layout: Stats cards on left, Focus areas on right */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Left - Stats cards (smaller) */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2">
            <a
              href="#experience"
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 hover:border-[var(--primary)]/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer block"
            >
              <p className="text-3xl font-bold text-[var(--accent)] mb-1">2+</p>
              <p className="font-semibold text-[var(--foreground)] text-sm mb-1">Years Experience</p>
              <p className="text-xs text-[var(--text-muted)]">Industry experience in software development</p>
            </a>
            <a
              href="#education"
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 hover:border-[var(--primary)]/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer block"
            >
              <p className="text-3xl font-bold text-[var(--accent)] mb-1">3</p>
              <p className="font-semibold text-[var(--foreground)] text-sm mb-1">Degrees Earned</p>
              <p className="text-xs text-[var(--text-muted)]">Bachelor&apos;s + 2 Master&apos;s from India & US</p>
            </a>
            <a
              href="#publications"
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 hover:border-[var(--primary)]/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer block"
            >
              <p className="text-3xl font-bold text-[var(--accent)] mb-1">3</p>
              <p className="font-semibold text-[var(--foreground)] text-sm mb-1">Research Publications</p>
              <p className="text-xs text-[var(--text-muted)]">AI & ML research in ML and NLP</p>
            </a>
            <a
              href="#education"
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 hover:border-[var(--primary)]/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer block"
            >
              <p className="text-3xl font-bold text-[var(--accent)] mb-1">3</p>
              <p className="font-semibold text-[var(--foreground)] text-sm mb-1">Honors & Awards</p>
              <p className="text-xs text-[var(--text-muted)]">UPE Academic Excellence & top grades</p>
            </a>
          </div>

          {/* Right - Focus areas bullet list */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">&#10038;</span>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Full Stack Development</p>
                  <p className="text-sm text-[var(--text-muted)]">Building scalable web applications with React, Next.js, TypeScript, Python, and Golang</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">&#10038;</span>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">AI Integration</p>
                  <p className="text-sm text-[var(--text-muted)]">Implementing LLMs, RAG pipelines, and AI automation chatbots for intelligent solutions</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--accent)] mt-1">&#10038;</span>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Third-Party Integrations</p>
                  <p className="text-sm text-[var(--text-muted)]">Connecting systems with APIs and external software to create seamless workflows</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <a
          href="#skills"
          className="inline-block px-6 py-2 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
        >
          View My Skills
        </a>
      </div>
    </section>
  );
}
