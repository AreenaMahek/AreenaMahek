"use client";

import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/AreenaMahek' : '';

const experiences = [
  {
    title: "Forward Deployed Engineer",
    company: "Oxmaint Inc.",
    logo: "/oxmaint.jpeg",
    location: "Sunnyvale, CA (Remote)",
    period: "Aug 2025 – Present",
    highlights: [
      "Acted as a Forward Deployed Engineer, working directly with enterprise clients to understand requirements, deploy tailored solutions, and ensure seamless system integration and performance in production environments",
      "Led end-to-end client implementations, translating business needs into technical solutions and driving successful onboarding across diverse enterprise systems",
      "Owned complex enterprise integrations with SAP S/4HANA (BTP, OData), SAP Business One, and QuickBooks, enabling streamlined financial and operational workflows for customers",
      "Designed and deployed AI-driven automation workflows (using n8n and LLMs like GPT-OSS and Anthropic Claude) to solve customer-specific challenges, reducing onboarding time by 40% and improving operational efficiency",
      "Partnered closely with customers and internal teams to troubleshoot issues, optimize deployments, and continuously improve system performance and scalability in live environments",
      "Applied data analysis and AI techniques to monitor and reduce asset downtime, delivering measurable improvements in system reliability and operational insights",
      "Built and customized full-stack features (React, Next.js, TypeScript, Golang) to meet unique client requirements, including API integrations and enterprise-grade enhancements",
      "Contributed to core product development, incorporating feedback from real-world deployments to enhance product capabilities and usability for enterprise customers",
      "Worked in Agile environments, participating in sprint planning, execution, and reviews to rapidly deliver and iterate on customer-facing solutions",
    ],
    tags: ["React", "Next.js", "TypeScript", "Golang", "Tailwind CSS", "AI Automation", "QuickBooks Integration", "SAP Integration", "RAG", "n8n", "LLMs"],
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
  {
    title: "Systems Engineer",
    company: "Infosys Ltd.",
    logo: "/infosys.png",
    location: "Hyderabad, India",
    period: "Jan 2021 – Nov 2022",
    highlights: [
      "Involved in the R&D Unit – ICETS (Infosys Centre for Emerging Technologies), contributing to innovation-driven initiatives and enterprise solutions",
      "Contributed to the development of IDSS, an enterprise-grade ETL-based data migration platform used across multiple business units, improving migration performance by 5x",
      "Developed Proof of Concepts (POCs) to enhance data migration efficiency, including high-speed Excel-based data processing and automated report generation using Python",
      "Built a VAT validation system for European compliance using VIES, along with address validation via Melissa API",
      "Designed and enhanced data migration workflows supporting databases such as SQL, SAP S/4HANA, and MongoDB, improving cross-platform data handling efficiency",
    ],
    tags: ["Python", "SQL", "SAP S/4HANA", "MongoDB", "ETL", "Data Migration", "Excel Automation", "REST APIs"],
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
