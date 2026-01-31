"use client";

import Image from "next/image";

const technicalSkills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Python", level: 80 },
  { name: "Golang", level: 75 },
];

const aiSkills = [
  { name: "LLMs & RAG Pipelines", level: 70 },
  { name: "NLP & ML", level: 80 },
  { name: "AI Chatbots", level: 85 },
  { name: "Vector Databases", level: 70 },
];

const tools = [
  { name: "AWS", icon: "/aws.png" },
  { name: "Azure", icon: "/azure.jpeg" },
  { name: "Docker", icon: "/docker.png" },
  { name: "Git", icon: "/git.png" },
  { name: "Linux", icon: "/linux.jpeg" },
  { name: "MongoDB", icon: "/mongodb.jpeg" },
  { name: "PostgreSQL", icon: "/postgresql.png" },
  { name: "MySQL", icon: "/mysql.png" },
  { name: "OpenAI", icon: "/openai.png" },
  { name: "Anthropic", icon: "/anthropic.png" },
  { name: "SAP Integration", icon: "/sap.jpeg" },
  { name: "QuickBooks Integration", icon: "/quickbooks.jpeg" },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-[var(--foreground)] font-medium">{name}</span>
        <span className="text-[var(--accent)] font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-[var(--card-border)] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-[var(--card-bg)]/30">
      <div className="section-container">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="gradient-text"> My Skills</span>
        </h2>
        <div className="w-16 h-1 bg-[var(--primary)] mx-auto mb-5" />

        {/* Skill Bars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-8">Development Skills</h3>
            {technicalSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* AI & ML Skills */}
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-8">AI & Machine Learning</h3>
            {aiSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <h3 className="text-2xl font-bold text-center mb-10">
          <span className="gradient-text"> Tools & Technologies</span>
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-[var(--primary)]/50 hover:bg-[var(--card-bg)]/80 transition-all duration-300 group"
            >
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--foreground)] transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
