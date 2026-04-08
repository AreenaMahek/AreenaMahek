"use client";

import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/AreenaMahek' : '';

const recommendations = [
  {
    name: "Miles Jackson",
    title: "Manager of Online Learning @ DePaul CDM",
    company: "DePaul University",
    relationship: "Worked with Areena on the same team",
    date: "July 2025",
    image: "/depaul.png",
    quote:
      "Since Fall 2023, I have had the opportunity to work closely with Areena in her role as a Computer Science Tutor, where she has consistently demonstrated the technical knowledge, thoughtful communication skills, and professionalism essential for success in engineering environments. Areena excels at ensuring that students gain a conceptual understanding of material before moving on to practical problem-solving. Her mastery of complex technical content has been critical to the ongoing success of our tutoring center. Feedback from students consistently highlights Areena's skill in analyzing problems, offering clear explanations, and providing helpful hints while encouraging independent learning.",
    linkedin: "https://www.linkedin.com/in/areena-mahek/details/recommendations/",
  },
  {
    name: "Nandhini Gulasingam",
    title: "Senior Analyst – IT Solutions and Adjunct Faculty",
    company: "DePaul University",
    relationship: "Worked with Areena on the same team",
    date: "August 2025",
    image: "/depaul.png",
    quote:
      "I had the privilege of working with Areena for a year and a half on my Out-of-Distribution (OoD) Interface, a web-based tool for analyzing data shifts in medical imaging. She was instrumental in developing the OoD Visualizer, a sophisticated Trame-based application with a Vuetify front end, seamlessly integrated into the Neurobazaar platform. Areena consistently impressed me with her critical thinking, creativity, and unwavering dedication. A true self-starter, she embraced every opportunity, regularly going above and beyond expectations. Talented, hardworking, and committed, she approaches challenges with determination and consistently delivers exceptional results.",
    linkedin: "https://www.linkedin.com/in/areena-mahek/details/recommendations/",
  },
  {
    name: "Sharon Dev S",
    title: "Lead Software Engineer",
    company: "OXmaint Inc",
    relationship: "Worked with Areena on the same team",
    date: "April 2026",
    image: "/oxmaint.jpeg",
    quote:
      "Areena is a dependable and thoughtful teammate who consistently brings a strong sense of ownership to her work. She is easy to collaborate with, communicates clearly, and approaches problems with both care and professionalism. I’ve always appreciated her positive attitude and willingness to contribute wherever needed. She would be a valuable addition to any team.",
    linkedin: "https://www.linkedin.com/in/areena-mahek/details/recommendations/",
  },
];

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-12 md:py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Recommendations</span>
        </h2>
        <div className="w-20 h-1 bg-[var(--primary)] mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--primary)]/50 transition-colors duration-300"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-[var(--primary)]/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote text */}
              <p className="text-sm text-[var(--text-muted)] mb-6 italic leading-relaxed">
                "{rec.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[var(--card-border)]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white flex-shrink-0">
                  <Image
                    src={`${basePath}${rec.image}`}
                    alt={rec.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[var(--foreground)]">
                    {rec.name}
                  </h4>
                  <p className="text-sm text-[var(--primary-light)]">
                    {rec.title}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {rec.date}
                  </p>
                </div>
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 rounded-lg transition-colors duration-200"
                  aria-label="View on LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-[var(--primary-light)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
