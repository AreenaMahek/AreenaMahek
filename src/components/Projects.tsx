"use client";

const projects = [
  {
    title: "AI-Driven Multilingual Chatbot",
    description:
      "An AI workflow-driven, multilingual chatbot for automated customer assistance and guided onboarding. Integrated with RAG architecture and vector databases for enhanced search capabilities.",
    tags: ["n8n", "Claude", "OpenAI", "RAG", "Milvus", "MongoDB Vector Search"],
    highlights: [
      "LLM-powered intelligent automation",
      "Multilingual support",
      "RAG-enhanced search and responses",
    ],
  },
  {
    title: "ByteBridge - Scalable Data Management Service",
    description:
      "A modular microservice subsystem designed for research data management, improving data accessibility and visualization by 70%. Features scalable storage schema for large user-uploaded datasets with efficient retrieval of derived datasets.",
    tags: ["Django", "REST APIs", "JavaScript", "HTML/CSS", "Microservices"],
    highlights: [
      "Modular subsystem architecture",
      "70% improvement in data accessibility",
      "Scalable storage schema design",
    ],
  },
  {
    title: "Interactive OoD Data Visualization Dashboard",
    description:
      "A low-latency, interactive data visualization platform for research workflows. Features dynamic histogram visualization with adjustable bin sizing and interactive 2D boundary system for OoD data classification.",
    tags: ["Python", "Trame", "Vue.js", "Vuetify", "VTK", "Plotly"],
    highlights: [
      "Dynamic histogram visualization engine",
      "Interactive 2D boundary system (Easy | Medium | Hard)",
      "Performance benchmarking across visualization technologies",
    ],
  },
  {
    title: "Cloud-Based Sentiment Analysis on Big Data",
    description:
      "Performed data acquisition and preprocessing on 10 million Amazon product reviews. Built a scalable data pipeline using AWS EMR for modeling, sentiment analysis, and visualization.",
    tags: ["AWS S3", "AWS Athena", "AWS EMR", "Python", "Big Data"],
    highlights: [
      "10 million product reviews processed",
      "Scalable AWS data pipeline",
      "Sentiment analysis and visualization",
    ],
  },
  {
    title: "Online Customer Behavior Prediction",
    description:
      "Developed an automated pipeline for online customer behavior prediction including data collection, exploratory data analysis, and feature engineering. Achieved 85% accuracy using ensemble methods.",
    tags: ["Python", "Machine Learning", "Stacking Classifier", "Data Analytics"],
    highlights: [
      "85% prediction accuracy",
      "Automated ML pipeline",
      "Ensemble methods (Stacking Classifier)",
    ],
  },
  {
    title: "Enterprise CMMS/EAM Platform",
    description:
      "Contributed to a multi-tenant EAM/CMMS web application with mission-critical Work Order orchestration flows, Shutdown modules, and approval workflows for industrial maintenance.",
    tags: ["React", "Next.js", "TypeScript", "Golang", "OAuth2", "i18n"],
    highlights: [
      "Multi-tenant architecture",
      "Work Order & Shutdown modules",
      "QuickBooks & SAP integrations",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-[var(--primary)] mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--primary)]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[var(--primary)]/10 rounded-lg">
                  <svg
                    className="w-6 h-6 text-[var(--primary-light)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--text-muted)] hover:text-[var(--foreground)] cursor-pointer transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary-light)] transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-3">
                {project.description}
              </p>

              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-[var(--text-muted)]"
                  >
                    <span className="text-[var(--secondary)]">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--card-border)]">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[var(--text-muted)] font-mono"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
