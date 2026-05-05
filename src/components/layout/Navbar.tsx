import { motion } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = ["About", "Stack", "Work", "Experience", "Contact"];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-full px-6 py-3 flex items-center gap-8">
        <a
          href="#about"
          className="flex-shrink-0 font-bold text-xl tracking-tighter mr-4 group flex items-center"
        >
          UMER
          <motion.span
            animate={{ opacity: [1, 0.2, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary ml-[1px]"
          >
            .
          </motion.span>
        </a>

        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium transition-colors text-foreground/80 hover:text-primary z-10"
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10 border border-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:block ml-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="bg-primary/90 hover:bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/30 transition-colors">
              Hire Me
            </span>
          </motion.div>
        </a>
      </nav>
    </motion.div>
  );
}
