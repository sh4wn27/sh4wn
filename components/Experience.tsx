"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Research Intern",
    org: "Children's National Hospital, CPMGR",
    location: "Washington, D.C.",
    period: "July 2026 – Present",
    type: "Research",
    description:
      "Year-long research appointment at the Center for Pediatric Mitochondrial Genetics & Rare Diseases. Focus: transplant immunology and outcome prediction in pediatric HSCT.",
  },
  {
    role: "Engineering Pathways Scholar",
    org: "Virginia Tech",
    location: "Blacksburg, VA",
    period: "June 2026",
    type: "Scholar",
    description:
      "Senior track of the Pathways to Future Engineer program. Selected cohort for intensive engineering coursework and research exposure.",
  },
  {
    role: "Undergraduate Research Affiliate",
    org: "Stanford University, iGEM",
    location: "Stanford, CA",
    period: "2025",
    type: "Research",
    description:
      "Contributed to the immunocloaking project modeling biodegradable stealth-polymer coatings for partial HLA mismatch tolerance. Co-authored manuscript on population-genetics simulation of equity impact.",
  },
  {
    role: "ASSIP Research Intern",
    org: "George Mason University",
    location: "Fairfax, VA",
    period: "2025",
    type: "Research",
    description:
      "Aspiring Scientists Summer Internship Program. Built ML models (Random Forest, SVM) for predicting metal-organic dissolution and adhesion. Co-authored paper published in GMU JSSR Vol. 7.",
  },
  {
    role: "Founder & Executive Director",
    org: "Growing Up with Robotics",
    location: "International · 501(c)(3)",
    period: "2022 – Present",
    type: "Nonprofit",
    description:
      "Founded and lead an international nonprofit delivering robotics and STEM education to underserved communities. 7,000+ students reached, $34K+ raised, 300+ service hours.",
  },
  {
    role: "Founder",
    org: "CAPA",
    location: "Remote",
    period: "2025 – Present",
    type: "Startup",
    description:
      "Solo-built open-source ML framework for HSCT outcome prediction. Pending patent. Architecture, deployment (FastAPI/Modal + Next.js/Vercel), and manuscript targeting peer-reviewed submission.",
  },
  {
    role: "Founder",
    org: "SkinAI",
    location: "Remote",
    period: "2024 – Present",
    type: "Startup",
    description:
      "Solo founder of a computer-vision dermatological screening platform. Thousands of users, pending patent. Built dermatologist referral network from scratch.",
  },
  {
    role: "Team Captain",
    org: "FTC Team 14607 Robot Uprising",
    location: "Thomas Jefferson HSST",
    period: "2024 – Present",
    type: "Robotics",
    description:
      "Captain of competitive FTC team. Led mechanical design, autonomous programming, and strategy through Chesapeake Championship. Multiple FIRST awards (Inspire II ×2, Motivate, Connect).",
  },
  {
    role: "Summer Camp Director & Student Mentor",
    org: "Area Youth Ministry",
    location: "Northern Virginia",
    period: "Summer 2025 – Present",
    type: "Volunteer",
    description:
      "Directed a week-long robotics camp serving 50+ students in partnership with FTC 14607. Managed 20+ volunteers. Continuing year-round mentorship and event leadership.",
  },
];

const typeColors: Record<string, string> = {
  Research: "bg-[#dce8f5] text-[#3a6d9c] border-[#b8d0e8]",
  Scholar:  "bg-[#d8ecea] text-[#2e6b5e] border-[#a8d8c8]",
  Startup:  "bg-[#d8f0e8] text-[#2e7a57] border-[#a8d8c0]",
  Nonprofit:"bg-[#e8d8f0] text-[#6b3fa0] border-[#c8a8e0]",
  Robotics: "bg-[#f0ead5] text-[#7a6b2e] border-[#d8d0a0]",
  Volunteer:"bg-[#f5ead8] text-[#9c6b2e] border-[#e0c8a0]",
};

function ExperienceRow({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 36, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: index * 0.05,
      }}
      className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-8 border-b border-border last:border-b-0"
    >
      {/* Left: meta */}
      <div className="flex md:flex-col gap-3 md:gap-2 flex-wrap md:pt-0.5">
        <span
          className={`inline-block text-xs font-sans px-2.5 py-0.5 rounded-full border w-fit ${typeColors[exp.type] ?? "bg-card border-border text-muted"}`}
        >
          {exp.type}
        </span>
        <p className="text-sm font-sans text-muted">{exp.period}</p>
        <p className="text-xs font-sans text-muted/60">{exp.location}</p>
      </div>

      {/* Right: content */}
      <div className="space-y-2">
        <h3 className="font-display font-bold text-lg text-foreground leading-tight group-hover:text-accent transition-colors duration-200">
          {exp.role}
        </h3>
        <p className="text-sm font-sans text-muted font-medium">{exp.org}</p>
        <p className="text-sm font-sans text-[#666] leading-relaxed">{exp.description}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
      <motion.div
        ref={headerRef}
        initial={{ y: 40, opacity: 0 }}
        animate={headerInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <div>
          <p className="text-xs font-sans text-accent tracking-widest uppercase mb-3 font-medium">
            Professional History
          </p>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter text-foreground">
            Work &<br />Experience
          </h2>
        </div>
        <p className="font-sans text-sm text-muted max-w-xs leading-relaxed">
          Research institutions, startups, nonprofits, and competitive engineering — building at every level.
        </p>
      </motion.div>

      <div className="border-t border-border">
        {experiences.map((exp, i) => (
          <ExperienceRow key={exp.role + exp.org} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
