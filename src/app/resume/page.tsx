"use client";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-16 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Static gradient border container */}
        <div className="relative p-[3px] rounded-3xl">
          {/* Static gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] rounded-3xl opacity-70" />

          {/* Inner content container */}
          <div className="relative bg-[var(--background)] rounded-[22px] p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <a
                  href="/"
                  className="p-2 rounded-lg hover:bg-[var(--card-bg)] transition-colors duration-200 text-[var(--text-muted)] hover:text-[var(--foreground)]"
                  aria-label="Go back"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
                <h1 className="text-2xl md:text-3xl font-bold">
                  <span className="gradient-text">My Resume</span>
                </h1>
              </div>
              <a
                href="/AreenaMahek_Resume.pdf"
                download="AreenaMahek_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download
              </a>
            </div>

            {/* PDF embed - fit to screen */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <embed
                src="/AreenaMahek_Resume.pdf#toolbar=0&navpanes=0&view=FitH"
                type="application/pdf"
                className="w-full h-[calc(100vh-280px)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
