"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const traits = [
  { label: "Competitive Cuber", desc: "Rubik's cube competitor" },
  { label: "Lacrosse", desc: "Offensive midfielder" },
  { label: "ABRSM Grade 8", desc: "Piano · teaches music" },
  { label: "Youth Volunteer", desc: "AYM 501(c)(3) · camps, workshops & outreach" },
];

const research = [
  { org: "Stanford iGEM", topic: "Immunocloaking research" },
  { org: "George Mason University", topic: "ASSIP program" },
  { org: "Children's National Hospital", topic: "Clinical research" },
];

const awards = [
  { name: "President's Volunteer Service Award", category: "Federal" },
  { name: "President's Education Award", category: "Federal" },
  { name: "FIRST FTC Inspire II ×2", category: "Robotics" },
  { name: "FIRST FTC Motivate", category: "Robotics" },
  { name: "FIRST FTC Connect", category: "Robotics" },
  { name: "FBLA NOVA Regional 2nd Place", category: "Business" },
  { name: "ABRSM Grade 8 Piano Practical", category: "Music" },
  { name: "ABRSM Grade 5 Music Theory", category: "Music" },
];

const activities = [
  "National Honor Society",
  "National Chinese Honor Society",
  "V. Policy Debate",
  "Investment Club",
];

const apCourses = [
  "AP Chinese", "AP CS A+", "AP Statistics", "AP US History",
  "AP Precalculus BC", "AP Physics 1", "AP Microeconomics", "AP Macroeconomics",
];

const avCourses = [
  "AV Computer Vision", "AV Artificial Intelligence",
  "AV Mobile App Dev", "AV Web App Dev", "AV Statistics",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
      {/* Top: Bio + Traits/Research */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div>
            <p className="text-xs font-sans text-accent tracking-widest uppercase mb-3 font-medium">About</p>
            <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tighter text-foreground">
              The story<br />behind the work
            </h2>
          </div>

          <div className="space-y-5 font-sans text-[#666] leading-relaxed text-[15px]">
            <p>
              I&apos;m a junior at TJ (TJHSST) in Northern Virginia. I immigrated from China,
              taught myself English, and received a cord blood transplant as a child for
              beta-thalassemia — which is why transplant immunology and GvHD research aren&apos;t
              just academic for me. They&apos;re personal.
            </p>
            <p>
              I&apos;ve conducted research at Stanford (iGEM), George Mason University (ASSIP),
              and Children&apos;s National Hospital. CAPA is my effort to turn that lived experience
              into something that might genuinely help the next kid in that situation.
            </p>
          </div>

          {/* Verse */}
          <blockquote className="border-l-2 border-accent pl-5 space-y-1">
            <p className="font-sans text-sm text-[#888] leading-relaxed italic">
              &ldquo;But they who wait for the Lord shall renew their strength; they shall mount up
              with wings like eagles; they shall run and not be weary; they shall walk and not faint.&rdquo;
            </p>
            <cite className="text-xs font-sans text-muted not-italic">— Isaiah 40:31</cite>
          </blockquote>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="space-y-10"
        >
          {/* Beyond research */}
          <div className="space-y-4">
            <p className="text-xs font-sans text-muted tracking-widest uppercase">Beyond the Lab</p>
            <div className="grid grid-cols-2 gap-3">
              {traits.map((trait) => (
                <div
                  key={trait.label}
                  className="bg-card border border-border rounded-xl p-4 space-y-1"
                >
                  <p className="font-display font-semibold text-sm text-foreground">{trait.label}</p>
                  <p className="font-sans text-xs text-muted">{trait.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research affiliations */}
          <div className="space-y-4">
            <p className="text-xs font-sans text-muted tracking-widest uppercase">Research</p>
            <div className="space-y-3">
              {research.map((r) => (
                <div
                  key={r.org}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <span className="font-display font-semibold text-sm text-foreground">{r.org}</span>
                  <span className="font-sans text-xs text-muted">{r.topic}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom: Awards, Activities, Coursework */}
      <div ref={bottomRef} className="mt-16 pt-16 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Awards */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={bottomInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <p className="text-xs font-sans text-muted tracking-widest uppercase">Awards & Honors</p>
          <div className="space-y-0">
            {awards.map((award) => (
              <div
                key={award.name}
                className="flex items-start justify-between py-3 border-b border-border last:border-0 gap-4"
              >
                <span className="font-display font-semibold text-sm text-foreground leading-tight">{award.name}</span>
                <span className="font-sans text-xs text-muted shrink-0">{award.category}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Activities */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={bottomInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-xs font-sans text-muted tracking-widest uppercase">School Activities</p>
          <div className="space-y-0">
            {activities.map((activity) => (
              <div
                key={activity}
                className="py-3 border-b border-border last:border-0"
              >
                <span className="font-display font-semibold text-sm text-foreground">{activity}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Coursework */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={bottomInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xs font-sans text-muted tracking-widest uppercase">Coursework</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-sans text-muted">AP</p>
              <div className="flex flex-wrap gap-1.5">
                {apCourses.map((c) => (
                  <span key={c} className="text-xs font-sans px-2.5 py-1 rounded-full bg-card border border-border text-foreground/70">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-sans text-muted">Advanced</p>
              <div className="flex flex-wrap gap-1.5">
                {avCourses.map((c) => (
                  <span key={c} className="text-xs font-sans px-2.5 py-1 rounded-full bg-[#eeecea] border border-border text-foreground/70">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
