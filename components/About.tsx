"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const traits = [
  { label: "Competitive Cuber", desc: "Rubik's cube competitor" },
  { label: "Lacrosse", desc: "Offensive  midfielder" },
  { label: "ABRSM Grade 8", desc: "Piano · teaches music" },
  { label: "Youth Volunteer", desc: "Area Youth Ministry DMV" },
];

const research = [
  { org: "Stanford iGEM", topic: "Immunocloaking research" },
  { org: "George Mason University", topic: "ASSIP program" },
  { org: "Children's National Hospital", topic: "Clinical research" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
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
    </section>
  );
}
