import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Stack", href: "#stack" },
    { label: "My Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-full px-4 md:px-6 py-3 flex items-center justify-between md:justify-start gap-4 md:gap-8 w-full md:w-auto">
        <a
          href="#home"
          className="flex-shrink-0 font-syne font-bold text-lg md:text-xl tracking-tighter md:mr-4 group flex items-center"
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium transition-colors text-foreground/80 hover:text-primary z-10 font-syne"
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
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="https://www.linkedin.com/in/umer-the-dev/" target="_blank" rel="noopener noreferrer" className="hidden md:block ml-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="bg-primary/90 hover:bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/30 transition-colors font-syne">
              Hire Me
            </span>
          </motion.div>
        </a>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 md:hidden bg-background/90 backdrop-blur-xl border border-primary/20 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 text-sm font-medium font-syne text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all border-b border-border/50 last:border-b-0"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://www.linkedin.com/in/umer-the-dev/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="px-6 py-4 text-sm font-bold font-syne text-primary-foreground bg-primary hover:bg-primary/90 transition-colors m-3 rounded-lg text-center"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
