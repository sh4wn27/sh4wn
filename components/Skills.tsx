"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "R", "Java", "C++", "HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    label: "AI / ML",
    skills: ["PyTorch", "Machine Learning", "Computer Vision", "ESM-2 · Protein Language Models", "Neural Network"],
  },
  {
    label: "Biomedical",
    skills: ["Immunology", "Immunogenomics", "HLA Typing"],
  },
  {
    label: "Engineering",
    skills: ["Circuits", "Wiring", "CAD", "3D Printing", "Robotics", ],
  },
  {
    label: "Music",
    skills: ["ABRSM Grade 8 Piano", "ABRSM Grade 5 Theory", "Northern Virginia Spring Festival Ranked Superior"],
  },
  {
    label: "Business & Research",
    skills: ["SEO", "Investment Analysis", "iOS Development", "Mobile App Development", "Research Skills", "Data Collection", "Data Manipulation"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Left: heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <p className="text-xs font-sans text-accent tracking-widest uppercase font-medium">Skills & Tools</p>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tighter text-foreground">
            Technical<br />Expertise
          </h2>
        </motion.div>

        {/* Right: skill groups grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.07 }}
              className="space-y-2.5"
            >
              <p className="text-xs font-sans text-muted tracking-widest uppercase">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-sans px-2.5 py-1 rounded-full bg-card border border-border text-foreground/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
