"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const papers = [
  {
    title: "Competing-Risks Survival Analysis for Pediatric HSCT",
    venue: "2026 — in preparation",
    year: "2026",
    description:
      "Applying competing-risks survival analysis and ML to predict acute GvHD in 187 pediatric bone marrow transplant patients. Severe aGvHD risk plateaus by day 100 (CIF=0.214). LASSO-selected Cox model achieved omnibus significance (p=0.002).",
    tags: ["Solo-authored", "Survival Analysis", "Clinical ML"],
    link: "https://github.com/sh4wn27/heta",
  },
  {
    title: "CAPA: Computational Architecture for Predicting Alloimmunity",
    venue: "Targeting Bioinformatics / Blood Advances",
    year: "2026",
    description:
      "Full framework paper describing the ESM-2 + cross-attention + DeepHit architecture for structure-aware HLA mismatch scoring and competing-risks survival prediction in allogeneic HSCT.",
    tags: ["Open Source", "Protein LM", "DeepHit"],
    link: "https://github.com/sh4wn27/capa",
  },
  {
    title: "Stanford iGEM — Immunocloaking",
    venue: "Stanford University",
    year: "2025",
    description:
      "Synthetic biology research on immunocloaking strategies. Contributed to experimental design and computational analysis as part of Stanford's iGEM team.",
    tags: ["Synthetic Biology", "iGEM", "Stanford"],
    link: null,
  },
];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="research" ref={ref} className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <p className="text-xs font-sans text-accent tracking-widest uppercase mb-3 font-medium">Publications & Research</p>
        <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter text-foreground">
          Research &<br />Writing
        </h2>
      </motion.div>

      <div className="space-y-0 divide-y divide-border">
        {papers.map((paper, i) => (
          <motion.div
            key={paper.title}
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
            className="py-8 group"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-16 items-start">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-card text-muted border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground leading-tight group-hover:text-accent transition-colors duration-200">
                  {paper.title}
                </h3>
                <p className="font-sans text-sm text-[#666] leading-relaxed">{paper.description}</p>
                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-sans text-foreground/60 hover:text-foreground transition-colors duration-200"
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>
              <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2 shrink-0">
                <span className="font-display font-semibold text-sm text-foreground">{paper.year}</span>
                <span className="font-sans text-xs text-muted text-right">{paper.venue}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
