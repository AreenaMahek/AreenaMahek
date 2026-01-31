"use client";

const skills = {
  "Frontend": [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "Vuetify",
    "Tailwind CSS",
    "HTML5",
    "Bootstrap",
  ],
  "Backend & APIs": [
    "Golang",
    "Python",
    "Django",
    "Flask",
    "REST APIs",
    "Trame",
  ],
  "AI & Machine Learning": [
    "OpenAI",
    "Anthropic Claude",
    "RAG",
    "Vector Databases",
    "MongoDB",
    "Milvus",
    "NLP (NLTK, Hugging Face)",
    "ML Fundamentals",
  ],
  "Cloud & Big Data": [
    "AWS (S3, EMR, EC2, Athena)",
    "Azure",
    "Hadoop",
    "Apache Hive",
    "Google BigQuery",
  ],
  "Data & Visualization": [
    "SQL (Oracle, MySQL, SQLite)",
    "Pandas",
    "NumPy",
    "Tableau",
    "Power BI",
    "Matplotlib",
    "Plotly",
  ],
  "DevOps & Tools": [
    "Docker",
    "Git",
    "Linux",
    "JWT",
    "OAuth2",
    "Unit Testing",
  ],
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="w-20 h-1 bg-[var(--primary)] mb-12" />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
              I&apos;m a dedicated <span className="text-[var(--foreground)]">Full-Stack Developer</span> and{" "}
              <span className="text-[var(--foreground)]">AI-Driven Software Engineer</span> with 2+ years
              of experience building scalable, cloud-integrated, multi-tenant web
              applications for enterprise and research environments.
            </p>

            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
              I specialize in integrating AI solutions including{" "}
              <span className="text-[var(--secondary)]">LLMs (OpenAI, Claude)</span>,{" "}
              <span className="text-[var(--secondary)]">RAG pipelines</span>,{" "}
              <span className="text-[var(--secondary)]">vector databases</span>, and{" "}
              <span className="text-[var(--secondary)]">n8n orchestration</span> to deliver
              intelligent, automated, and user-centric systems.
            </p>

            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
              My experience spans CMMS/EAM modules, approval workflows, microservices,
              and distributed request handling, supported by solid foundations in data
              engineering, visualization, and cloud platforms.
            </p>

            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
              I&apos;m a strong analytical thinker with excellent communication and
              collaboration skills, consistently driving projects from concept to
              high-quality deployment.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-[var(--primary-light)] mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full text-xs text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary-light)] transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
