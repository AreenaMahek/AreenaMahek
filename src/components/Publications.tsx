"use client";

import { log } from "console";

const publications = [
  {
    logo: "/igi.png",
    authors: "Aswathy Sathish, Abhishek Ranjan, Areena Mahek",
    title: "Tailored Therapy Regimes Using Digital Twins",
    venue: "Exploring the Advancements and Future Directions of Digital Twins in Healthcare 6.0",
    year: "2024",
    type: "Conference Paper",
    link: "https://www.igi-global.com/chapter/tailored-therapy-regimes-using-digital-twins/350999",
  },
  {
    logo: "/igi.png",
    authors: "Yamijala Suryanarayana Murthy, Balijepalli Srinivasa Ravi Chandra, Marusani Govardhan Reddy, Areena Mahek",
    title: "Building Trust in Digital Health Marketing Strategies for Successful Integration of Digital Twins",
    venue: "Exploring the Advancements and Future Directions of Digital Twins in Healthcare 6.0",
    year: "2024",
    type: "Conference Paper",
    link: "https://www.igi-global.com/chapter/building-trust-in-digital-health-marketing-strategies-for-successful-integration-of-digital-twins/350995",
  },
  {
    logo: "/applepress.jpeg",
    authors: "Kishor Kumar Reddy C., Ramana Murthy B. V., Marlia M. Hanafiah, Areena Mahek",
    title: "Unveiling Media Insights in Intelligent Cyber-Physical Systems: Transcribing and Summarizing for Generation and Comparative Analysis Using Natural Language Processing",
    venue: "International Conference on Robotics and Cyber-Physical Directions (ICRPM)",
    year: "2023",
    type: "Book Chapter",
    link: "https://www.appleacademicpress.com/cyber-physical-systems-applications-challenges-and-research-directions/9781779643414",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-12 md:py-20 bg-[var(--card-bg)]/30">
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
                    {pub.logo && (
                      <div className="relative w-10 h-10 flex-shrink-0">
                        <img
                          src={pub.logo}
                          alt="Publication Logo"
                          className="object-contain w-full h-full"
                        />
                      </div>
                    )}
                    <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-light)] rounded-full text-xs font-medium">
                      {pub.type}
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">{pub.year}</span>
                  </div>

                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary-light)] transition-colors duration-200 mb-2 block"
                  >
                    {pub.title}
                  </a>

                  <p className="text-sm text-[var(--text-muted)] mb-2">
                    {pub.authors}
                  </p>

                  <p className="text-sm text-[var(--secondary)] italic">
                    {pub.venue}
                  </p>
                </div>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 rounded-lg transition-colors duration-200"
                  aria-label="View publication"
                >
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
