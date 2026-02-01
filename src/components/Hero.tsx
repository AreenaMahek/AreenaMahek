"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/AreenaMahek' : '';
const role = "AI Software Engineer & Full Stack Developer";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isTypingComplete) return;

    const timeout = setTimeout(() => {
      if (displayText.length < role.length) {
        setDisplayText(role.slice(0, displayText.length + 1));
      } else {
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [displayText, isTypingComplete]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--accent)] rounded-full filter blur-[100px] opacity-10 -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        {/* Static gradient border container */}
        <div className="relative p-[3px] rounded-3xl">
          {/* Static gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] rounded-3xl opacity-70" />

          {/* Inner content container */}
          <div className="relative bg-[var(--background)] rounded-[22px] p-10 md:p-16 lg:p-20">
            <div
              className={`flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              {/* Left - Large Image */}
              <div className="flex-shrink-0">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-[var(--primary)] shadow-2xl">
                  <Image
                    src="/Main_photo.jpg"
                    alt="Areena Mahek"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Right - Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-2">
                  Hello.
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                  <span className="gradient-text">I&apos;m Areena Mahek</span>
                </h1>

                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[var(--text-muted)] mb-6 h-8 md:h-10">
                  <span>{displayText}</span>
                  <span className="animate-blink text-[var(--accent)]">|</span>
                </h2>

                <div className="flex flex-col gap-4 mb-8 max-w-xl">
                  <p className="text-base md:text-lg text-[var(--text-muted)] flex items-center gap-3">
                    <span className="text-[var(--accent)] text-xl">&#10038;</span>
                    Passionate about leveraging AI and web technologies to build innovative and impactful solutions.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="px-4 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white rounded-full text-sm font-semibold shadow-lg">
                      Adaptive
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-[var(--secondary)] to-[var(--tertiary)] text-white rounded-full text-sm font-semibold shadow-lg">
                      Focused
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] text-white rounded-full text-sm font-semibold shadow-lg">
                      Dedicated
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-lg transition-all duration-300 font-medium animate-pulse-glow"
                  >
                    Get In Touch
                  </a>
                  <a
                    href={`${basePath}/resume`}
                    className="px-8 py-3 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 rounded-lg transition-all duration-300 font-medium"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
