"use client";

const awards = [
  {
    title: "Academic Scholarship",
    description: "Awarded scholarship for Master's program at DePaul University",
    year: "2023-2025",
  },
  {
    title: "Upsilon Pi Epsilon (UPE) Honor Society",
    description: "Inducted for academic excellence in Computing and Information Sciences",
    year: "2024",
  },
  {
    title: "Top Grades Award",
    description: "Recognized for outstanding academic performance in Master's and Bachelor's programs",
    year: "2020-2022",
  },
];

const education = [
  {
    degree: "M.S. in Computer Science with Data Science",
    school: "DePaul University",
    location: "Chicago, IL, USA",
    period: "Jan 2023 - June 2025",
    gpa: "3.96/4.0",
    icon: "🎓",
  },
  {
    degree: "M.Tech. in Computer Science",
    school: "Stanley College of Engineering and Technology for Women",
    location: "Hyderabad, India",
    period: "Dec 2020 - Dec 2022",
    gpa: "3.6/4.0",
    icon: "🎓",
  },
  {
    degree: "B.E. in Information Technology",
    school: "Muffakham Jah College of Engineering and Technology",
    location: "Hyderabad, India",
    period: "Aug 2016 - Sept 2020",
    gpa: "3.75/4.0",
    icon: "🎓",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="w-20 h-1 bg-[var(--primary)] mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 hover:border-[var(--primary)]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[var(--primary)]/10 rounded-lg text-2xl">
                  {edu.icon}
                </div>
                <div className="px-3 py-1 bg-[var(--secondary)]/10 text-[var(--secondary)] rounded-full text-xs font-medium">
                  GPA: {edu.gpa}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary-light)] transition-colors">
                {edu.degree}
              </h3>

              <p className="text-[var(--primary-light)] text-sm mb-2">
                {edu.school}
              </p>

              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {edu.location}
              </div>

              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {edu.period}
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Honors Section */}
        <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-8">
          <span className="gradient-text">Awards & Honors</span>
        </h3>
        <div className="w-16 h-1 bg-[var(--primary)] mb-8" />

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--primary)]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[var(--accent)]/10 rounded-lg text-2xl">
                  🏆
                </div>
                <span className="text-sm text-[var(--accent)] font-medium">{award.year}</span>
              </div>
              <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary-light)] transition-colors">
                {award.title}
              </h4>
              <p className="text-sm text-[var(--text-muted)]">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
