import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { useEffect, useRef, memo } from "react";
import { Globe, Server, Database, Rocket } from "lucide-react";

const counters = [
  { end: 2, suffix: "+", label: "Years Experience" },
  { end: 50, suffix: "+", label: "Projects Built" },
  { end: 9, suffix: "+", label: "Happy Clients" },
  { end: 16, suffix: "+", label: "GitHub Stars" },
  { end: 400, suffix: "+", label: "Hours on Code-Camp.Org" },
  { end: 15, suffix: "+", label: "Certificate's" },
  { end: 300, suffix: "K", label: "Lines of Code Written" },
  { end: 7, suffix: "+", label: "Tech Stacks Mastered" },
  { end: 25, suffix: "+", label: "Workshops Conducted" },
  { end: 100, suffix: "%", label: "Client Satisfaction" },
  { end: 5, suffix: "+", label: "Awards Won" },
  { end: 20, suffix: "+", label: "Community Events" },
];

const services = [
  { icon: Globe, label: "Web Apps", desc: "Full-stack web applications" },
  { icon: Server, label: "REST APIs", desc: "Scalable backend services" },
  { icon: Database, label: "Database Design", desc: "Optimized data schemas" },
  { icon: Rocket, label: "Deployment", desc: "CI/CD & cloud hosting" },
];

const CounterCard = memo(function CounterCard({
  end,
  suffix,
  label,
  index,
}: {
  end: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { count, startCounting } = useCounter(end);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startCounting();
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startCounting]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 text-center hover:border-primary/50 hover:bg-card transition-all duration-300"
    >
      <p className="font-syne text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">{label}</p>
    </motion.div>
  );
});

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-2 inline-block text-sm font-medium text-primary"
          >
            🙋 About Me
          </motion.span>
          <h2 className="mb-4 font-syne text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 grid items-center gap-12 md:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/20 to-transparent blur-xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/20 to-accent/10">
                <img
                  src="https://avatars.githubusercontent.com/u/178928829?v=4"
                  alt="Profile Image"
                  className="flex h-full w-full items-center justify-center font-syne text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
                ></img>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm a Full Stack MERN Developer with 3+ years of experience
              building scalable web applications. I specialize in React.js,
              Node.js, Express.js, and MongoDB — turning ideas into
              production-ready digital products.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm passionate about clean code, elegant architectures, and
              creating seamless user experiences. When I'm not coding, you'll
              find me exploring new technologies, contributing to open source,
              or writing technical articles.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4 flex gap-3"
            >
              {["React", "Node.js", "TypeScript", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Counter Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {counters.map((c, idx) => (
            <CounterCard key={c.label} {...c} index={idx} />
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="mb-10 text-center font-syne text-2xl md:text-3xl font-bold text-foreground">
            What I Do
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {services.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  >
                    <Icon size={24} className="text-primary" />
                  </motion.div>
                  <h4 className="mb-2 font-syne text-sm font-bold text-foreground">
                    {label}
                  </h4>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
