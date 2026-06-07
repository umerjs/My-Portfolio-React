import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Footer } from "./components/sections/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";

const About = lazy(() =>
  import("./components/sections/About").then((m) => ({ default: m.About })),
);
const TechStack = lazy(() =>
  import("./components/sections/TechStack").then((m) => ({
    default: m.TechStack,
  })),
);
const Portfolio = lazy(() => import("./components/sections/Portfolio"));
const Experience = lazy(() =>
  import("./components/sections/Experience").then((m) => ({
    default: m.Experience,
  })),
);
const Contact = lazy(() =>
  import("./components/sections/Contact").then((m) => ({ default: m.Contact })),
);

function App() {
  const [noCursor, setNoCursor] = useState(
    typeof window !== "undefined" && window.innerWidth >= 768,
  );

  useEffect(() => {
    const check = () => setNoCursor(window.innerWidth >= 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
    <Router>
      <div
        className={`min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-sans${noCursor ? " cursor-none" : ""}`}
      >
        <CustomCursor />

        {/* Animated Arch Gradients Background Layer - CSS driven for off-main-thread perf */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="orb orb-1 absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen opacity-60" />
          <div className="orb orb-2 absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[120px] mix-blend-screen opacity-60" />
          <div className="orb orb-3 absolute bottom-[-10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-chart-2/20 blur-[100px] mix-blend-screen opacity-40" />
        </div>

        <Navbar />
        <main className="flex-1 relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-32">
          <Hero />
          <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
            <About />
            <TechStack />
            <Portfolio />
            <Experience />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
    </LazyMotion>
  );
}

export default App;
