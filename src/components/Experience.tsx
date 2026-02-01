"use client";

import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/AreenaMahek' : '';

const experiences = [
  {
    title: "Software Engineer",
    company: "Oxmaint Inc.",
    logo: "/oxmaint.jpeg",
    location: "Sunnyvale, CA (Remote)",
    period: "Jan 2026 – Present",
    highlights: [
      "Designed and enhanced core product features and AI-driven automation workflows; delivered customized solution design for enterprise customers",
      "Implemented third-party integrations with QuickBooks and SAP to support enterprise workflows and financial operations",
      "Applied data analysis techniques to improve system performance, scalability, quality assurance and overall reliability",
    ],
    tags: ["React", "Next.js", "TypeScript", "Golang", "Tailwind CSS", "AI Automation", "QuickBooks Integration", "SAP Integration", "RAG"],
  },
  {
    title: "Software Engineer Intern",
    company: "Oxmaint Inc.",
    logo: "/oxmaint.jpeg",
    location: "Sunnyvale, CA (Remote)",
    period: "Sept 2025 – Dec 2025",
    highlights: [
      "Led client-specific customizations on a multilingual, multi-tenant EAM/CMMS web application, providing enterprise clients with customized user interfaces, business logic and processes",
      "Developed and expanded Golang backend services using robust web architectural concepts and clear, modular REST APIs",
      "Developed a scalable API architecture supporting distributed request handling, workflow automation, OAuth2 security, and role-based access",
      "Orchestrated AI automation workflows using n8n, integrating LLMs (Claude, GPT) to power intelligent process automation and onboarding flows",
      "Designed and deployed an AI workflow-driven, multilingual chatbot for automated assistance and guided onboarding",
      "Integrated RAG architecture with vector databases (Milvus, MongoDB Vector Search) into the product to enhance search and support Predictive Maintenance",
      "Developed mission-critical Work Order orchestration flows & Shutdown modules, supporting real-time shift logs, maintenance reporting, and equipment downtime tracking",
    ],
    tags: ["React", "Next.js", "TypeScript", "Golang", "Tailwind CSS", "i18n", "n8n", "RAG", "LLMs"],
  },
  {
    title: "Research Assistant",
    company: "DePaul University",
    logo: "/depaul.png",
    location: "Chicago, IL",
    period: "Aug 2024 – June 2025",
    highlights: [
      "Designed a modular subsystem with Django + REST APIs (backend) and HTML/CSS/JavaScript (frontend), improving research data accessibility and visualization by 70%",
      "Architected a scalable storage schema for large user-uploaded datasets, supporting efficient retrieval of derived datasets generated during interactive analysis",
      "Designed and built a low-latency, interactive data visualization platform using Python, Trame, Vue.js, and Vuetify",
      "Implemented a dynamic histogram visualization engine with adjustable bin sizing controls for OoD data analysis",
      "Benchmarked visualization technologies (VTK, Plotly, Matplotlib) to assess performance scaling with increasing computational resources",
    ],
    tags: ["Django", "Python", "Vue.js", "Trame", "VTK", "REST APIs"],
  },
  {
    title: "Graduate Assistant - Tutoring Mentor",
    company: "DePaul University",
    logo: "/depaul.png",
    location: "Chicago, IL",
    period: "Sept 2023 – June 2025",
    highlights: [
      "Mentored and supported over 200 undergraduate and graduate students in Python, Java, SQL, Django, Web Development, Tableau, Power BI, Analysis of Algorithms, Distributed Systems and Data Structures",
      "Achieved a 95% student performance improvement rate",
      "Assisted in debugging, optimizing code, and guiding development projects in distributed systems and full-stack apps",
    ],
    tags: ["Python", "Java", "SQL", "Django", "Tableau", "Power BI"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-[var(--card-bg)]/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-[var(--primary)] mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--card-border)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 bg-[var(--primary)] rounded-full -translate-x-1/2 ring-4 ring-[var(--background)]" />

                <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white flex-shrink-0">
                        <Image
                          src={`${basePath}${exp.logo}`}
                          alt={exp.company}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--foreground)]">
                          {exp.title}
                        </h3>
                        <p className="text-[var(--primary-light)]">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-sm text-[var(--text-muted)]">
                        {exp.period}
                      </p>
                      <p className="text-sm text-[var(--text-muted)]">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[var(--text-muted)] text-sm"
                      >
                        <span className="text-[var(--secondary)] mt-1.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--card-border)]">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary-light)] rounded text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
