"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "C++", "C", "Java", "TypeScript", "JavaScript", "R", "SQL", "Bash", "HTML", "CSS"],
  },
  {
    label: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Deep Learning",
      "Computer Vision",
      "OpenCV",
      "ONNX",
      "Reinforcement Learning",
      "Survival Analysis",
      "ESM-2 · Protein Language Models",
      "LLM Application Development",
      "Ollama",
    ],
  },
  {
    label: "Biomedical",
    skills: [
      "Immunology",
      "Immunogenomics",
      "HLA Typing",
      "HSCT Outcome Modeling",
      "Competing Risks Analysis",
      "Bioinformatics",
    ],
  },
  {
    label: "Engineering",
    skills: [
      "CAD",
      "3D Printing",
      "Robotics",
      "Circuits",
      "PCB Design",
      "Soldering",
      "Embedded Systems",
      "Raspberry Pi",
      "BLDC Motor Control",
      "Linux",
    ],
  },
  {
    label: "Web & Software",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "FastAPI",
      "Git",
      "Vercel",
      "DNS / Route 53",
      "iOS Development",
    ],
  },
  {
    label: "Music",
    skills: ["ABRSM Grade 8 Piano", "ABRSM Grade 5 Theory", "Music Instruction"],
  },
  {
    label: "Leadership & Outreach",
    skills: [
      "Nonprofit Management",
      "Curriculum Design",
      "Public Speaking",
      "Mentoring",
      "Team Leadership",
    ],
  },
  {
    label: "Business & Research",
    skills: [
      "Scientific Writing",
      "Research Methods",
      "Data Collection",
      "Data Analysis",
      "SEO",
      "Investment Analysis",
    ],
  },
  {
    label: "Spoken Languages",
    skills: ["English", "Mandarin"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="skills" className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
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
