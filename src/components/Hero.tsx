"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  "AI Software Engineer",
  "Full Stack Developer",
  "Cloud Solutions Architect",
  "Machine Learning Engineer",
];



export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--accent)] rounded-full filter blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[var(--primary)] shadow-xl">
              <Image
                src="/Main_photo.jpg"
                alt="Areena Mahek"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">Areena Mahek</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text-muted)] mb-6 h-10 md:h-12">
            <span>{displayText}</span>
            <span className="animate-blink text-[var(--accent)]">|</span>
          </h2>

          <p className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-8 leading-relaxed">
            Full-Stack Developer with 2+ years of experience building scalable,
            cloud-integrated, AI-driven web applications. Proficient in{" "}
            <span className="text-[var(--secondary)]">Next.js</span>,{" "}
            <span className="text-[var(--primary-light)]">React</span>,{" "}
            <span className="text-[var(--accent)]">TypeScript</span>,{" "}
            <span className="text-[var(--secondary)]">Python</span>, and{" "}
            <span className="text-[var(--primary-light)]">Golang</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-lg transition-all duration-300 font-medium animate-pulse-glow"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-[var(--primary)] text-[var(--primary-light)] hover:bg-[var(--primary)]/10 rounded-lg transition-all duration-300 font-medium"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
