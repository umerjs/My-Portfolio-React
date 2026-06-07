import { m } from "framer-motion";

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "Tech Innovators Inc.",
    period: "2023 - Present",
    description:
      "Leading the development of high-traffic web applications using the MERN stack. Mentoring junior developers and architecting scalable backend microservices.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions LLC",
    period: "2020 - 2023",
    description:
      "Built and maintained multiple client projects. Improved database query performance by 40% and implemented robust CI/CD pipelines.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description:
      "Focused on creating responsive, pixel-perfect user interfaces with React and modern CSS frameworks.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Experience
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
