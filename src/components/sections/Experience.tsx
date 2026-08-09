import { m } from "framer-motion";
import { LiquidHeading } from '@/components/ui/LiquidHeading';

const experiences = [
  {
    role: "Senior Full Stack Engineer (MERN)",
    company: "Tech Innovators Inc.",
    period: "2023 - Present",
    description:
      "Leading development of high-traffic MERN stack web applications — React, Node.js, Express, and MongoDB. Architecting scalable microservices, mentoring junior developers, and driving CI/CD best practices.",
  },
  {
    role: "Full Stack Developer (React & Node.js)",
    company: "Digital Solutions LLC",
    period: "2020 - 2023",
    description:
      "Built and maintained full-stack React and Node.js client projects. Optimized MongoDB query performance by 40% and implemented robust CI/CD pipelines with automated testing.",
  },
  {
    role: "React Frontend Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description:
      "Developed responsive, pixel-perfect React user interfaces with TypeScript and Tailwind CSS. Collaborated on design systems and component libraries.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          <LiquidHeading as="span">Experience</LiquidHeading>
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          My professional journey in software engineering.
        </p>
      </div>

      <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
              <span className="text-sm font-medium text-primary md:ml-4">
                {exp.period}
              </span>
            </div>
            <div className="text-lg font-medium text-muted-foreground mb-4">
              {exp.company}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
          </m.div>
        ))}
      </div>
    </section>
  );
}
