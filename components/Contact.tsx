"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/sh4wn27", handle: "@sh4wn27" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/huanxuan-li-b99ba72a5/", handle: "Huanxuan Li" },
  { label: "Instagram", href: "https://www.instagram.com/sh4wn.27/", handle: "@sh4wn.27" },
  { label: "Email", href: "mailto:shawnli1028@gmail.com", handle: "shawnli1028@gmail.com" },
  { label: "Academic", href: "mailto:2027hli@tjhsst.edu", handle: "2027hli@tjhsst.edu" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-xs font-sans text-accent tracking-widest uppercase font-medium">Contact</p>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter text-foreground">
            Let&apos;s talk<br />about ideas.
          </h2>
          <p className="font-sans text-[15px] text-[#666] leading-relaxed max-w-sm">
            Research collaborations, internship inquiries, or just want to connect — reach out.
          </p>
          <a
            href="mailto:shawnli1028@gmail.com"
            className="inline-flex items-center gap-2 font-display font-semibold text-base text-white bg-accent rounded-full px-6 py-3 hover:opacity-90 transition-all duration-200"
          >
            Send an email ↗
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="space-y-0 divide-y divide-border"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center justify-between py-5 group hover:pl-2 transition-all duration-200"
            >
              <span className="font-display font-semibold text-base text-foreground group-hover:text-accent transition-colors duration-200">
                {social.label}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm text-muted group-hover:text-foreground/60 transition-colors duration-200">
                  {social.handle}
                </span>
                <span className="text-muted group-hover:text-foreground transition-colors duration-200 translate-x-0 group-hover:translate-x-0.5 inline-block">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
