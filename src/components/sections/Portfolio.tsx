import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import dilsebuyImg from "@/assets/dilsebuy.webp";
import calculatorImg from "@/assets/calculator.webp";
import quizzappImg from "@/assets/quizzapp.webp";
import carWebsiteImg from "@/assets/car-website.webp";
import starbucksImg from "@/assets/starbucks.webp";
import LuxeeImg from "@/assets/Luxee.webp";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  color: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Luxee Store",
    subtitle: "Full Stack E-Commerce",
    description:
      "Modern e-commerce platform built with React, TypeScript, Supabase and Resend integration. Features auth, product management, and real-time updates.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind", "Framer Motion"],
    image: LuxeeImg,
    link: "https://luxee-store.vercel.app",
    color: "#eccd1a",
  },
  {
    id: "02",
    title: "DilseBuy",
    subtitle: "Online Store",
    description:
      "Responsive shopping experience with product browsing, cart functionality, and a clean mobile-first design built with vanilla HTML and CSS.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: dilsebuyImg,
    link: "https://dilsebuy.netlify.app",
    color: "#6366f1",
  },
  {
    id: "03",
    title: "Car Website",
    subtitle: "Automotive Showcase",
    description:
      "Vehicle showcase website highlighting collections, specs, and features with a bold modern aesthetic and smooth scroll interactions.",
    tags: ["HTML", "CSS", "UI Design", "Responsive"],
    image: carWebsiteImg,
    link: "https://carexperts.netlify.app/",
    color: "#ff1818",
  },
  {
    id: "04",
    title: "Starbucks Clone",
    subtitle: "Landing Page",
    description:
      "Pixel-perfect recreation of the Starbucks landing experience \u2014 layout, typography, colors, and hover states all matched from the original.",
    tags: ["HTML", "CSS", "Clone"],
    image: starbucksImg,
    link: "https://starcoffee-by-umer.netlify.app/",
    color: "#0d9ff",
  },
  {
    id: "05",
    subtitle: "Quiz App",
    title: "Quiz App",
    description:
      "Interactive quiz application with dynamic questions and real-time score tracking.",
    tags: ["HTML", "CSS"],
    image: quizzappImg,
    link: "https://quizzappbyumer.netlify.app",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "06",
    subtitle: "Calculator",
    title: "Calculator App",
    description:
      "Interactive calculator application with a modern UI and smooth animations.",
    tags: ["HTML", "CSS", "JavaScript", "Coding Maths", "Responsive UI"],
    image: calculatorImg,
    link: "https://calculatorbyumer.netlify.app",
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false,
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <div className="h-screen flex flex-col justify-center px-10 lg:px-16 xl:px-20">
      <span
        className="text-[130px] font-black leading-none select-none"
        style={{
          color: "transparent",
          WebkitTextStroke: `1px ${project.color}1a`,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {project.id}
      </span>
      <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-[0.9] -mt-8 mb-4 tracking-tight">
        {project.title}
      </h2>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-px" style={{ backgroundColor: project.color }} />
        <p
          className="text-xs font-mono tracking-[0.35em] uppercase"
          style={{ color: project.color }}
        >
          {project.subtitle}
        </p>
      </div>
      <p className="max-w-sm text-sm text-muted-foreground leading-relaxed mb-8">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full font-mono uppercase tracking-wider transition-all duration-300"
            style={{
              border: `1px solid ${project.color}44`,
              color: project.color,
              background: `${project.color}0d`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group/cta inline-flex items-center gap-3 w-fit"
      >
        <span
          className="w-8 h-px transition-all duration-500 group-hover/cta:w-14"
          style={{ backgroundColor: project.color }}
        />
        <span
          className="text-xs font-mono tracking-[0.3em] uppercase transition-colors duration-300"
          style={{ color: project.color }}
        >
          View Project
        </span>
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1"
          style={{ color: project.color }}
        />
      </a>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <>
      <div
        className="h-9 flex items-center gap-1.5 px-4 border-b shrink-0"
        style={{
          background: `${project.color}0d`,
          borderColor: `${project.color}22`,
        }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <div
          className="ml-3 flex-1 max-w-[200px] h-5 rounded-sm flex items-center px-2"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <span className="text-[10px] font-mono text-white/30 truncate">
            {project.link.replace("https://", "")}
          </span>
        </div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{
          height: "calc(100% - 36px)",
          background: `radial-gradient(circle at center, ${project.color}15 0%, transparent 70%)`,
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${project.color}55 0%, ${project.color}11 60%, transparent 100%)`,
        }}
      />
      <div className="absolute bottom-5 left-5 z-10">
        <p
          className="text-xs font-mono tracking-[0.3em] uppercase"
          style={{ color: `${project.color}cc` }}
        >
          {project.subtitle}
        </p>
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 cursor-pointer">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono uppercase tracking-widest backdrop-blur-sm"
          style={{
            background: `${project.color}22`,
            border: `1px solid ${project.color}66`,
            color: project.color,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
          View Full
        </div>
      </div>
    </>
  );
}

function ProjectLightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-12"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110"
        style={{
          background: `${project.color}22`,
          border: `1px solid ${project.color}66`,
          color: project.color,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
        <span
          className="text-xs font-mono tracking-[0.4em] uppercase px-3 py-1 rounded-full"
          style={{
            background: `${project.color}22`,
            border: `1px solid ${project.color}44`,
            color: project.color,
          }}
        >
          {project.id}
        </span>
        <span className="text-sm font-black uppercase tracking-wide text-white">
          {project.title}
        </span>
        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
          {project.subtitle}
        </span>
      </div>
      <div
        className="relative w-full max-w-6xl max-h-[85vh] rounded-2xl overflow-hidden"
        style={{
          border: `1px solid ${project.color}44`,
          boxShadow: `0 0 120px ${project.color}33`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="h-9 flex items-center gap-1.5 px-4 border-b shrink-0"
          style={{
            background: `${project.color}11`,
            borderColor: `${project.color}22`,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div
            className="ml-3 flex-1 max-w-xs h-5 rounded-sm flex items-center px-2"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <span className="text-[10px] font-mono text-white/30 truncate">
              {project.link.replace("https://", "")}
            </span>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: `${project.color}22`,
              border: `1px solid ${project.color}44`,
              color: project.color,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Live Site
          </a>
        </div>
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(85vh - 36px)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-contain object-top"
          />
        </div>
      </div>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono tracking-[0.3em] uppercase text-white/20">
        Press Esc or click outside to close
      </p>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const gsapCtxRef = useRef<gsap.Context | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  const openLightbox = useCallback((project: Project) => {
    setLightboxProject(project);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (isMobile || !sectionRef.current || !leftPanelRef.current) return;

    let cancelled = false;

    const initGSAP = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);
      gsap.ticker.lagSmoothing(0);

      if (cancelled || !sectionRef.current || !leftPanelRef.current) return;

      const total = projects.length;
      const ctx = gsap.context(() => {
        const end = `+=${total * 100}vh`;

        ScrollTrigger.create({
          trigger: sectionRef.current!,
          start: "top top",
          end,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        });

        gsap.to(leftPanelRef.current, {
          yPercent: -(100 - 100 / total),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: "top top",
            end,
            scrub: 1.2,
            onUpdate: (self) => {
              const idx = Math.min(
                total - 1,
                Math.round(self.progress * (total - 1)),
              );
              setActiveIndex(idx);
              if (glowRef.current) {
                glowRef.current.style.background = `radial-gradient(ellipse 60% 50% at 75% 50%, ${projects[idx].color}18 0%, transparent 70%)`;
              }
            },
          },
        });
      }, sectionRef.current!);

      if (cancelled) {
        ctx.revert();
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
        return;
      }

      gsapCtxRef.current = ctx;
    };

    initGSAP();

    return () => {
      cancelled = true;
      if (gsapCtxRef.current) {
        gsapCtxRef.current.revert();
        gsapCtxRef.current = null;
      }
    };
  }, [isMobile]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeLightbox]);

  if (isMobile) {
    return (
      <section id="work" className="py-24 px-6">
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.4em] uppercase text-muted-foreground mb-4">
            // Selected Work
          </p>
          <h2 className="text-5xl font-black uppercase leading-none">
            MY <span className="text-primary">PROJECTS</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openLightbox(project)}
              className="group block rounded-2xl overflow-hidden border bg-card transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              style={{ borderColor: `${project.color}33` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-8 z-10 flex items-center gap-1.5 px-3 bg-black/60 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${project.color}55 0%, transparent 50%)`,
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p
                      className="text-xs font-mono tracking-[0.3em] uppercase mb-1"
                      style={{ color: project.color }}
                    >
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl font-black uppercase">
                      {project.title}
                    </h3>
                  </div>
                  <span
                    className="text-3xl font-black opacity-20 font-mono"
                    style={{ color: project.color }}
                  >
                    {project.id}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-mono uppercase tracking-wider"
                      style={{
                        border: `1px solid ${project.color}44`,
                        color: project.color,
                        background: `${project.color}0d`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    background: `${project.color}22`,
                    border: `1px solid ${project.color}44`,
                    color: project.color,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  Live Site
                </a>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && lightboxProject && (
          <ProjectLightbox project={lightboxProject} onClose={closeLightbox} />
        )}
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative h-screen w-screen overflow-hidden"
      style={{ marginLeft: "calc(-50vw + 50%)" }}
    >
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 75% 50%, ${projects[0].color}18 0%, transparent 70%)`,
        }}
      />

      <div className="absolute top-8 left-10 z-30 flex items-center gap-3">
        <span className="text-xs font-mono tracking-[0.4em] uppercase text-muted-foreground">
          // Selected Work
        </span>
        <span
          className="text-xs font-mono px-2 py-0.5 rounded-full border transition-all duration-500"
          style={{
            borderColor: `${projects[activeIndex].color}66`,
            color: projects[activeIndex].color,
            background: `${projects[activeIndex].color}11`,
          }}
        >
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
        <div ref={leftPanelRef} className="flex flex-col will-change-transform">
          {projects.map((project) => (
            <ProjectBlock key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.06]" />

      <div className="absolute right-0 top-0 flex h-full w-1/2 items-center justify-center px-6 py-8">
        <div className="relative h-[78vh] w-full">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700 ease-out"
              style={{
                opacity: activeIndex === i ? 1 : 0,
                transform: `scale(${activeIndex === i ? 1 : 0.94})`,
                filter: activeIndex === i ? "blur(0px)" : "blur(6px)",
                zIndex: activeIndex === i ? 10 : 1,
                border: `1px solid ${project.color}33`,
                boxShadow: `0 0 0 1px ${project.color}11, 0 8px 80px ${project.color}25, 0 40px 120px ${project.color}12`,
                cursor: "pointer",
              }}
              onClick={() => openLightbox(project)}
            >
              <ProjectPreview project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-5 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-3">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="rounded-full transition-all duration-500 ease-out"
            style={{
              width: activeIndex === i ? "10px" : "5px",
              height: activeIndex === i ? "10px" : "5px",
              background:
                activeIndex === i ? project.color : `${project.color}44`,
              boxShadow:
                activeIndex === i ? `0 0 10px ${project.color}88` : "none",
            }}
          />
        ))}
      </div>

      {lightboxOpen && lightboxProject && (
        <ProjectLightbox project={lightboxProject} onClose={closeLightbox} />
      )}
    </section>
  );
}
export { Portfolio };
