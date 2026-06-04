import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";

const techStack = [
  {
    category: "Frontend",
    items: [
      "HTML5 & CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Sass/SCSS",
      "Tailwind CSS",
      "TypeScript",
    ],
    color: "group-hover:border-blue-500/50 group-hover:shadow-blue-500/20",
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "GraphQL",
      "JWT Authentication",
    ],
    color: "group-hover:border-green-500/50 group-hover:shadow-green-500/20",
  },
  {
    category: "Database & Deploy",
    items: [
      "MongoDB",
      "Vercel",
      "Netlify",
      "Supabase",
      "Firebase",
      "FireStore",
    ],
    color:
      "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/20",
  },
  {
    category: "Tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Vite",
      "ESLint",
      "Prettier",
      "NPM",
      "Linux",
    ],
    color: "group-hover:border-orange-500/50 group-hover:shadow-orange-500/20",
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
          Tech Arsenal
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-primary text-2xl inline-block"
          >
            ✦
          </motion.span>
        </h2>
        <p className="text-muted-foreground max-w-2xl text-xl">
          Passionate developer with expertise in modern web technologies and
          design.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((stack, index) => (
          <GlowCard key={stack.category} stack={stack} index={index} />
        ))}
      </div>
    </section>
  );
}

function GlowCard({
  stack,
  index,
}: {
  stack: (typeof techStack)[0];
  index: number;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group h-full relative"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <Card
        className={`relative z-10 bg-background/50 backdrop-blur-md border-border/50 h-full transition-all duration-300 shadow-lg ${stack.color}`}
      >
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-foreground/90 group-hover:text-primary transition-colors">
            {stack.category}
          </h3>
          <ul className="space-y-4">
            {stack.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-muted-foreground flex items-center text-lg group-hover:text-foreground/80 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-4 group-hover:bg-primary transition-colors group-hover:scale-150" />
                {item}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
