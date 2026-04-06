export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-display font-bold text-sm text-foreground">sh4wn</p>
          <p className="font-sans text-xs text-muted">
            Shawn Li · TJHSST · Northern Virginia
          </p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/sh4wn27" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/huanxuan-li-b99ba72a5/" },
            { label: "CAPA", href: "https://capa-rho.vercel.app/about" },
            { label: "GUR", href: "https://growingupwithrobotics.org" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-sans text-xs text-muted">© {year} Shawn Li</p>
      </div>
    </footer>
  );
}
