"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "CAPA",
    subtitle: "Computational Architecture for Predicting Alloimmunity",
    tags: ["Machine Learning", "Transplant Immunology", "Open Source"],
    description:
      "An open-source ML framework using ESM-2 protein language model embeddings and deep competing-risks survival analysis (DeepHit) to predict GvHD, relapse, and transplant-related mortality in pediatric HSCT. Features a cross-attention interaction network over donor-recipient HLA pairs.",
    stack: "Python · PyTorch · FastAPI · Next.js",
    status: "Active — pending patent",
    links: [
      { label: "GitHub", href: "https://github.com/sh4wn27/capa" },
      { label: "Live Demo", href: "https://capa-rho.vercel.app/about" },
    ],
    gradient: "from-[#dce8f5] via-[#c8daf0] to-[#a8c4e8]",
    image: "/images/01.jpg",
  },
  {
    number: "02",
    title: "Competing-Risks Survival Analysis",
    subtitle: "Pediatric HSCT Outcomes Research",
    tags: ["Biostatistics", "Research Paper", "Survival Analysis"],
    description:
      "Solo-authored research applying competing-risks survival analysis and ML to predict acute GvHD in 187 pediatric bone marrow transplant patients. Severe aGvHD risk plateaus by day 100 (CIF=0.214). LASSO-selected Cox model achieved omnibus significance (p=0.002).",
    stack: "R · Python · lifelines · LASSO Cox",
    status: "Preparing for arXiv",
    links: [{ label: "GitHub", href: "https://github.com/sh4wn27/heta" }],
    gradient: "from-[#d5ead5] via-[#c0dcc0] to-[#a0cca0]",
    image: "/images/02.jpg",
  },
  {
    number: "03",
    title: "SkinAI",
    subtitle: "Computer Vision Skin Analysis Platform",
    tags: ["AI/ML", "Computer Vision", "Startup"],
    description:
      "AI-powered skin analysis platform with thousands of users and a pending patent. Uses computer vision for dermatological screening. Built from the ground up as a solo founder.",
    stack: "Computer Vision · Python · React",
    status: "Pending patent",
    links: [],
    gradient: "from-[#f5dcd8] via-[#f0c8c0] to-[#e8a8a0]",
    image: "/images/03.jpg",
  },
  {
    number: "04",
    title: "Growing Up with Robotics",
    subtitle: "International 501(c)(3) Nonprofit",
    tags: ["Nonprofit", "STEM Education", "Leadership"],
    description:
      "International nonprofit I founded. Robotics and STEM education for underserved communities. 7,000+ students reached across multiple countries. Executive Director.",
    stack: "501(c)(3) · 300+ service hours · 7,000+ students",
    status: "Active",
    links: [{ label: "Website", href: "https://growingupwithrobotics.org" }],
    gradient: "from-[#e0d8f0] via-[#d0c8e8] to-[#b8a8d8]",
    image: "/images/04.jpg",
  },
  {
    number: "05",
    title: "FTC Robotics — Team 14607",
    subtitle: "Robot Uprising · Team Captain",
    tags: ["Competitive Robotics", "Engineering", "Captain"],
    description:
      "Team captain for Robot Uprising. Competed at FTC Chesapeake Championship. Led mechanical design and autonomous programming. Drove strategy and systems integration.",
    stack: "Java · CAD · FTC SDK",
    status: "Chesapeake Championship",
    links: [{ label: "Website", href: "https://www.robotuprising.org/" }],
    gradient: "from-[#f0ead5] via-[#e8e0c0] to-[#d8d0a0]",
    image: "/images/05.jpg",
    imagePosition: "object-[center_25%]",
  },
  {
    number: "06",
    title: "FBLA FUSE",
    subtitle: "Chapter Management Mobile App",
    tags: ["Mobile App", "Full Stack", "Competition"],
    description:
      "Chapter management mobile app built for FBLA. 2nd place NOVA Regional in Mobile App Development. Full-stack with React Native and AWS backend.",
    stack: "React Native · AWS · TypeScript",
    status: "2nd Place NOVA Regional",
    links: [
      { label: "Website", href: "https://fblafuse.com/" },
      { label: "GitHub", href: "https://github.com/ytouri/fbla-fuse" },
    ],
    gradient: "from-[#d8ecea] via-[#c0e0dc] to-[#a0d0cc]",
    image: "/images/06.jpg",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.05 * (index % 2) }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-[#ccc9c2] transition-colors duration-300"
    >
      {/* Banner — image if uploaded, else gradient */}
      <div className="h-52 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${project.imagePosition ?? "object-center"}`}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        {/* Number watermark */}
        <div className={`absolute bottom-3 left-5 text-[5rem] font-display font-black leading-none select-none pointer-events-none ${project.number === "03" || project.number === "05" ? "text-white/60" : "text-black/8"}`}>
          {project.number}
        </div>
        {project.status && (
          <div className="absolute top-4 right-4">
            <span className="text-xs font-sans px-3 py-1 rounded-full bg-white/70 border border-white/50 text-[#555] backdrop-blur-sm">
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-sans px-2.5 py-0.5 rounded-full bg-[#eeecea] text-muted border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <div>
          <h3 className="font-display font-bold text-xl text-foreground leading-tight group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm font-sans text-muted mt-0.5">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-sm font-sans text-[#666] leading-relaxed">{project.description}</p>

        {/* Stack */}
        <p className="text-xs font-sans text-muted">{project.stack}</p>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex items-center gap-4 pt-1">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans text-accent hover:opacity-70 transition-opacity duration-200 flex items-center gap-1 group/link font-medium"
              >
                {link.label}
                <span className="inline-block group-hover/link:translate-x-0.5 transition-transform duration-200">
                  ↗
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="px-6 md:px-12 py-28 max-w-7xl mx-auto">
      <motion.div
        ref={headerRef}
        initial={{ y: 40, opacity: 0 }}
        animate={headerInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <div>
          <p className="text-xs font-sans text-accent tracking-widest uppercase mb-3 font-medium">Selected Work</p>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tighter text-foreground">
            Projects &<br />Research
          </h2>
        </div>
        <p className="font-sans text-sm text-muted max-w-xs leading-relaxed">
          Six projects across ML research, computer vision, nonprofits, and competitive engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
