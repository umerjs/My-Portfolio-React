import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "DilseBuy",
    description:
      "Modern e-commerce interface with clean design, intuitive navigation, and responsive layout.",
    tags: ["E-Commerce", "HTML/CSS"],
    color: "from-blue-500/20 to-purple-500/20",
    link: "https://dilsebuy.netlify.app",
    image: "/assets/dilsebuy.png",
  },
  {
    title: "Calculator",
    description:
      "Responsive calculator application with sleek interface for all basic mathematical operations.",
    tags: ["Tool", "JavaScript"],
    color: "from-emerald-500/20 to-teal-500/20",
    link: "https://calculatorbyumer.netlify.app",
    image: "/assets/calculator.png",
  },
  {
    title: "Quiz App",
    description:
      "Interactive quiz application with dynamic questions and real-time score tracking.",
    tags: ["Interactive", "Tailwind"],
    color: "from-orange-500/20 to-red-500/20",
    link: "https://quizzappbyumer.netlify.app",
    image: "/assets/quizzapp.png",
  },
  {
    title: "Car Website",
    description:
      "Automotive showcase website featuring detailed specs and elegant modern design.",
    tags: ["Showcase", "Responsive"],
    color: "from-slate-500/20 to-gray-500/20",
    link: "https://carexperts.netlify.app/",
    image: "/assets/car website.png",
  },
  {
    title: "Starbucks Clone",
    description:
      "Pixel-perfect recreation of Starbucks website using pure HTML and CSS.",
    tags: ["Clone", "CSS"],
    color: "from-green-500/20 to-emerald-500/20",
    link: "https://starcoffee-by-umer.netlify.app/",
    image: "/assets/starbucks.png",
  },
  {
    title: "Chess Board",
    description:
      "CSS-styled chessboard demonstrating advanced layout and design mastery.",
    tags: ["Game", "CSS Grid"],
    color: "from-yellow-500/20 to-amber-500/20",
    link: "https://chessbyumer.netlify.app/",
    image: "/assets/chess board.png",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
          💼 My Work
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Featured Work
        </h2>
        <p className="text-muted-foreground max-w-2xl text-xl">
          A showcase of my recent web development projects combining creativity
          and functionality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              bounce: 0.4,
            }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="group h-full cursor-none"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="block h-full"
            >
              <Card className="overflow-hidden bg-background/40 backdrop-blur-md border-border/50 group-hover:border-primary/50 transition-all duration-500 h-full flex flex-col shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/10">
                <div className="h-56 relative overflow-hidden flex items-center justify-center bg-muted/20">
                  {/* Real Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Fallback Abstract Gradient if image doesn't load */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-80 transition-all duration-700 -z-10`}
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-white font-medium bg-primary/80 px-6 py-3 rounded-full">
                      View Project <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 flex-1 flex flex-col relative z-20 bg-background/80">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 flex-1 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1 text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
