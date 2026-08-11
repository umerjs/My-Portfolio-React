import { m } from "framer-motion";
import { ArrowRight, Download, MessageSquare } from "lucide-react";
import HangingCard from "@/components/hero-card/HangingCard";
import { LiquidHeading } from '@/components/ui/LiquidHeading';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] bottom-0 flex flex-col md:flex-row items-center justify-between pt-12 md:pt-20 relative gap-8 md:gap-12"
    >
      <m.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-xl lg:max-w-2xl xl:max-w-3xl relative z-10 flex-1"
      >
        {/* Status line */}
        <m.div variants={item} className="flex items-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Available for new projects
          </span>
        </m.div>

        {/* Name */}
        <m.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 leading-[1.05]"
        >
          <LiquidHeading as="span" className="inline">
            <span className="text-foreground">Muhammad </span>
            <span className="text-primary">Umer</span>
          </LiquidHeading>
        </m.h1>

        {/* Role line */}
        <m.p
          variants={item}
          className="font-mono text-sm md:text-base uppercase tracking-[0.15em] text-muted-foreground mb-6"
        >
          Full-Stack Developer — MERN &amp; Ecommerce
        </m.p>

        {/* Body copy */}
        <m.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
        >
          I build production-ready storefronts, dashboards, and checkout systems
          for businesses in <span className="text-foreground">Karachi</span> and
          clients abroad — end to end, from React front-ends to the databases
          underneath.
        </m.p>

        {/* CTAs */}
        <m.div
          variants={item}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <a
            href="https://www.linkedin.com/in/umer-the-dev/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center rounded-full px-8 h-14 text-base font-medium bg-primary text-primary-foreground shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Let&apos;s Collaborate
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/Muhammad_Umer_Resume.pdf"
            download="Muhammad_Umer_Resume.pdf"
            className="inline-flex items-center justify-center rounded-full px-8 h-14 text-base font-medium bg-transparent border border-border/50 hover:bg-white/5 hover:border-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all text-foreground"
          >
            <Download className="mr-2 h-5 w-5" /> Resume
          </a>
        </m.div>

        {/* Socials */}
        <m.div variants={item} className="flex items-center gap-3">
          <a
            href="https://github.com/umerjs"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-background/50 border border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all shadow-lg hover:shadow-primary/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/umer-the-dev/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-background/50 border border-border/50 rounded-full hover:bg-[#0A66C2] hover:text-white hover:scale-110 transition-all shadow-lg hover:shadow-[#0A66C2]/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://wa.me/923161395147"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-background/50 border border-border/50 rounded-full hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all shadow-lg hover:shadow-[#25D366]/20"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
        </m.div>
      </m.div>

      <HangingCard className="self-start md:-mt-44 md:-ml-4 lg:-ml-8 max-w-full" />
    </section>
  );
}
