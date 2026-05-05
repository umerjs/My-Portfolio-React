import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { TechStack } from "./components/sections/TechStack";
import { Portfolio } from "./components/sections/Portfolio";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-sans cursor-none">
        <CustomCursor />

        {/* Animated Arch Gradients Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 90, 180, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen opacity-60"
          />
          <motion.div
            animate={{
              x: [0, -120, 80, 0],
              y: [0, 120, -60, 0],
              scale: [1, 0.9, 1.3, 1],
              rotate: [360, 180, 90, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[120px] mix-blend-screen opacity-60"
          />
          <motion.div
            animate={{
              x: [0, 50, -100, 0],
              y: [0, 150, -150, 0],
              scale: [1, 1.5, 0.8, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-chart-2/20 blur-[100px] mix-blend-screen opacity-40"
          />
        </div>

        <Navbar />

        <main className="flex-1 relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-32">
          <Hero />
          <TechStack />
          <Portfolio />
          <Experience />
          <Contact />
        </main>

        <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-border/50">
          <div className="max-w-6xl mx-auto px-4">
            <p>
              © {new Date().getFullYear()} Umer Memon. All rights reserved.
              Crafted with Framer Motion & Tailwind.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
