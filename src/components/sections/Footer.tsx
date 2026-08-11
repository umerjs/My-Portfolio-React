import { m } from "framer-motion";
import {
  MessageSquareIcon as MessageSquare,
  MailIcon as Mail,
  MapPin,
  Code2,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <a
                href="https://umer-jsx.vercel.app"
                className="text-xl font-bold no-underline hover:text-primary"
              >
                Umer.Dev
              </a>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong>MERN Stack Developer</strong> and{" "}
              <strong>Full Stack Engineer</strong> based in Karachi, Pakistan. I
              craft beautiful, responsive web experiences with React,
              TypeScript, Node.js, and modern technologies. Always open to
              exciting projects and collaborations.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Karachi, Pakistan</span>
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Me
              </a>
              <a
                href="#stack"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Tech Stack
              </a>
              <a
                href="#work"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </m.div>

          {/* Contact & Social */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:codebyumer.dev@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>codebyumer.dev@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923161395147"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>+92 316 1395147</span>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <m.a
                href="https://github.com/umerjs"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-background/50 border border-border/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </m.a>
              <m.a
                href="https://www.linkedin.com/in/umer-the-dev/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-background/50 border border-border/50 rounded-full hover:bg-[#0A66C2] hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </m.a>
              <m.a
                href="https://wa.me/923161395147"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-background/50 border border-border/50 rounded-full hover:bg-[#25D366] hover:text-white transition-all"
              >
                <MessageSquare className="w-5 h-5" />
              </m.a>
            </div>
          </m.div>
        </div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2026 Muhammad Umer. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Crafted By Muhammad Umer With
            <Heart className="w-4 h-4 m-2 text-red-500 fill-red-500" /> Using
            ReactJs and TailwindCss
          </p>
        </m.div>
      </div>
    </footer>
  );
}
