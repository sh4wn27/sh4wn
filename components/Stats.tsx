"use client";

import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 8000, suffix: "+", label: "Users", sublabel: "SkinAI + CAPA combined" },
  { value: 7000, suffix: "+", label: "Students Reached", sublabel: "Growing Up with Robotics" },
  { value: 300, suffix: "+", label: "Service Hours", sublabel: "Community impact" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.8, ease: "easeOut" });
    }
  }, [inView, count, value]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent =
          v >= 1000
            ? Math.floor(v / 1000).toLocaleString() + "," + String(Math.floor(v % 1000)).padStart(3, "0") + suffix
            : Math.floor(v).toLocaleString() + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="px-6 md:px-12 py-20 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="flex flex-col gap-1 md:px-10 first:pl-0 last:pr-0"
            >
              <p className="font-display font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tighter text-foreground">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-display font-semibold text-sm text-foreground/80">{stat.label}</p>
              <p className="font-sans text-xs text-muted">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
