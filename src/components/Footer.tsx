export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--card-border)]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            Designed & Built by{" "}
            <span className="text-[var(--primary-light)]">Areena Mahek</span>
          </p>

          <div className="flex items-center gap-6">
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
