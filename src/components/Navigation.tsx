"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[var(--background)]/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href='https://www.linkedin.com/in/areena-mahek/'
            className="group relative flex items-center gap-2"
          >
            {/* Animated logo container */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] animate-spin-slow opacity-75" />
              {/* Inner background */}
              <div className="absolute inset-[2px] rounded-[6px] bg-[var(--background)] flex items-center justify-center">
                <span className="text-lg md:text-xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  AM
                </span>
              </div>
            </div>
            {/* Full name on hover (desktop only) */}
            <span className="hidden lg:block text-sm font-medium text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Areena Mahek
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume"
              className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--foreground)]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--card-border)]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors duration-200 text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume"
                className="inline-block px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-lg transition-colors duration-200 text-base font-medium text-center"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
