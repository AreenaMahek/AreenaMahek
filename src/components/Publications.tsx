"use client";

const publications = [
  {
    authors: "Aswathy Sathish, Abhishek Ranjan, Areena Mahek",
    title: "Tailored Therapy Regimes Using Digital Twins",
    venue: "Exploring the Advancements and Future Directions of Digital Twins in Healthcare 6.0",
    year: "2024",
    type: "Book Chapter",
  },
  {
    authors: "Yamijala Suryanarayana Murthy, Balijepalli Srinivasa Ravi Chandra, Marusani Govardhan Reddy, Areena Mahek",
    title: "Building Trust in Digital Health Marketing Strategies for Successful Integration of Digital Twins",
    venue: "Exploring the Advancements and Future Directions of Digital Twins in Healthcare 6.0",
    year: "2024",
    type: "Book Chapter",
  },
  {
    authors: "Kishor Kumar Reddy C., Ramana Murthy B. V., Marlia M. Hanafiah, Areena Mahek",
    title: "Unveiling Media Insights in Intelligent Cyber-Physical Systems: Transcribing and Summarizing for Generation and Comparative Analysis Using Natural Language Processing",
    venue: "International Conference on Robotics and Cyber-Physical Directions (ICRPM)",
    year: "2023",
    type: "Conference Paper",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 md:py-32 bg-[var(--card-bg)]/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Publications</span>
        </h2>
        <div className="w-20 h-1 bg-[var(--primary)] mb-12" />

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-light)] rounded-full text-xs font-medium">
                      {pub.type}
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">{pub.year}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    {pub.authors}
                  </p>

                  <p className="text-sm text-[var(--secondary)] italic">
                    {pub.venue}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[var(--primary)]/10 rounded-lg">
                    <svg
                      className="w-5 h-5 text-[var(--primary-light)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
