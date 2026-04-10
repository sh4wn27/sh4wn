"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 pt-32 max-w-7xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {/* Status pill */}
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 text-xs font-sans text-muted border border-border rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Building CAPA — pending patent, targeting arXiv submission
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={item} className="space-y-2">
          <h1 className="font-display font-extrabold text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tighter text-foreground">
            Shawn Li
          </h1>
          <p className="font-display font-semibold text-[clamp(1.5rem,4vw,3.5rem)] leading-tight tracking-tight text-muted">
            Engineer. Researcher. Builder.
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="font-sans text-base md:text-lg text-muted max-w-xl leading-relaxed font-light"
        >
          Junior at Thomas Jefferson High School for Science & Technology.
          Building at the intersection of AI, biomedicine, and robotics.
        </motion.p>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/sh4wn27" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/huanxuan-li-b99ba72a5/" },
            { label: "Instagram", href: "https://www.instagram.com/sh4wn.27/" },
            { label: "Email", href: "mailto:shawnli1028@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-sm font-sans text-muted hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-border hover:decoration-foreground/30"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={item}
          className="pt-8 flex items-center gap-3 text-xs text-muted font-sans"
        >
          <div className="w-12 h-px bg-border" />
          scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
