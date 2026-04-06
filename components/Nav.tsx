"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
      style={{
        background: "rgba(250,250,248,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#e5e3de]"
        style={{ opacity: borderOpacity }}
      />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-base tracking-tight text-foreground hover:text-accent transition-colors duration-200"
        >
          sh4wn
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:huanxuanli27@gmail.com"
            className="text-sm font-sans px-4 py-1.5 border border-border rounded-full text-foreground hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile links */}
        <div className="flex md:hidden items-center gap-5">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
