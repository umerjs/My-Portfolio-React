import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import HangingCard from "@/components/hero-card/HangingCard";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] bottom-0 flex flex-col md:flex-row items-center justify-between pt-12 md:pt-20 relative gap-8 md:gap-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl relative z-10 flex-1"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Available for Work</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Umer Memon
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
        >
          A passionate full-stack engineer crafting beautiful, responsive web
          experiences from <span className="text-foreground">Karachi</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-4 mb-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://www.linkedin.com/in/umer-the-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                className="rounded-full px-8 h-14 text-base shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]"
              >
                Let's Collaborate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="/src/assets/Umer_Memon_Resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-base bg-transparent border-border/50 hover:bg-white/5 hover:border-primary/50 transition-all"
              >
                <Download className="mr-2 h-5 w-5" /> Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-4"
        >
          <a
            href="https://github.com/umermemon1"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-background/50 border border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all shadow-lg hover:shadow-primary/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/umer-the-dev/"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-background/50 border border-border/50 rounded-full hover:bg-[#0A66C2] hover:text-white hover:scale-110 transition-all shadow-lg hover:shadow-[#0A66C2]/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
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
            className="p-4 bg-background/50 border border-border/50 rounded-full hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all shadow-lg hover:shadow-[#25D366]/20"
          >
            <MessageSquare className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      <HangingCard className="self-start md:ml-0 md:-mt-44 md:-ml-4 lg:-ml-8 max-w-full" />
    </section>
  );
}
