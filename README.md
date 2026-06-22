# Muhammad Umer - Web Developer Portfolio

Personal portfolio built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **GSAP**. Features code-split chunks, lazy-loaded sections, and brotli/gzip compression for maximum load speed.

> **Note**: This project is **private** and **not free to use**. For collaborations or usage permissions, please contact me directly.

---

## Live Preview

👉 [Visit Live Site](https://umer-memon.vercel.app/)

---

## Features

- ⚡ **React 19** with server components and concurrent rendering
- 🎯 **Cyberpunk aesthetic** with dark mode and animated gradient orbs (CSS-only, off main thread)
- 🧠 **Smooth scrolling** navigation between sections
- 🧩 **3D hanging card** hero animation with mouse tilt (Framer Motion + custom hooks)
- 📄 **Resume download** functionality
- 📱 **Hamburger menu** with AnimatePresence transitions
- 🎨 **shadcn/ui** components with Tailwind CSS v4 theming
- 🔒 **Private access** – not intended for reuse or redistribution
- ✨ **GSAP ScrollTrigger** animations for scroll-reveal effects
- 💫 **Code splitting**: vendor chunks split by library (react, framer, gsap, ui)
- 🚀 **Lazy-loaded sections**: below-the-fold content loads as async chunks
- 📦 **Brotli + Gzip compression** via vite-plugin-compression

---

## Tech Stack

| Technology | Use Case |
|------------------------------|----------------------------------------|
| **React 19** | UI library with concurrent features |
| **TypeScript** | Type-safe development |
| **Vite 8** | Build tool with instant HMR |
| **Tailwind CSS v4** | Utility-first CSS with CSS-first config |
| **Framer Motion 12** | Declarative animations + LazyMotion |
| **GSAP 3** | ScrollTrigger and timeline animations |
| **React Router v7** | Client-side routing context |
| **shadcn/ui** | Accessible UI primitives |
| **Lucide React** | Icon library |
| **EmailJS** | Contact form email service |
| **Geist Variable** | Typography (via @fontsource-variable) |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint check |
| `npm run build:images` | Optimize images with sharp |

---

## Build Optimizations

- **Manual chunk splitting**: `vendor-react` (React, ReactDOM, React Router), `vendor-framer` (Framer Motion), `vendor-gsap` (GSAP), `vendor-ui` (shadcn utilities)
- **LazyMotion**: Framer Motion loads only `domAnimation` features — no drag/pan/layout bloat
- **React.lazy + Suspense**: Below-the-fold sections (About, TechStack, Portfolio, Experience, Contact) are async chunks
- **Terser minification**: drops `console.log` and `debugger` in production
- **Brotli + Gzip**: pre-compressed assets served by Vercel
- **CSS-only orb animations**: animated backgrounds run on the compositor thread, not JS
- **Immutable cache**: hashed assets cached for 1 year; index.html never cached

---

## Featured Projects

### 1. **DilseBuy** - E-Commerce Interface

- Modern e-commerce design inspired by industry standards
- **Tech**: HTML, CSS
- **Live**: [dilsebuy.netlify.app](https://dilsebuy.netlify.app)

### 2. **Interactive Calculator**

- Responsive calculator for basic mathematical operations
- **Tech**: HTML, CSS, JavaScript
- **Live**: [calculatorbyumer.netlify.app](https://calculatorbyumer.netlify.app)

### 3. **Quiz Application**

- Interactive quiz app with user feedback and scoring
- **Tech**: HTML, Tailwind CSS, JavaScript
- **Live**: [quizzappbyumer.netlify.app](https://quizzappbyumer.netlify.app)

### 4. **Car Showcase Website**

- Car designs, specs, and reviews display
- **Tech**: HTML, CSS, JavaScript
- **Live**: [carexperts.netlify.app](https://carexperts.netlify.app/)

### 5. **Starbucks Clone**

- Pure HTML and CSS recreation of Starbucks website
- **Tech**: HTML, CSS
- **Live**: [starcoffee-by-umer.netlify.app](https://starcoffee-by-umer.netlify.app/)

### 6. **Facebook Login Page Clone**

- Responsive recreation of Facebook login interface
- **Tech**: HTML, CSS
- **Live**: [fbloginpageclonebyumer.netlify.app](https://fbloginpageclonebyumer.netlify.app/)

### 7. **First Portfolio**

- Original portfolio showcasing beginner-level design
- **Tech**: HTML, CSS
- **Live**: [nextgenbyumer.netlify.app](https://nextgenbyumer.netlify.app/)

### 8. **CSS Chess Board**

- Pure HTML and CSS chessboard design
- **Tech**: HTML, CSS
- **Live**: [chessbyumer.netlify.app](https://chessbyumer.netlify.app/)

### 9. **Gym/Fitness Login**

- Login UI for fitness applications
- **Tech**: HTML, CSS
- **Live**: [fitnesst.netlify.app](https://fitnesst.netlify.app/)

---

## Skills & Technologies Breakdown

**Frontend Development:**

- React 19, Next.js
- TypeScript, JavaScript (ES2023+)
- Tailwind CSS v4, CSS3
- Framer Motion, GSAP
- HTML5 (Semantic Markup)

**Backend & Databases:**

- Node.js
- Express.js
- MongoDB

**Tools & Deployment:**

- Git & GitHub
- Vite
- Vercel
- VS Code

---

## Contact Me

Let's connect! Feel free to reach out for collaborations or web development projects.

- **Email**: [umery101@gmail.com](mailto:umery101@gmail.com)
- **WhatsApp**: [+92-316-139-5147](https://wa.me/923161395147)
- **LinkedIn**: [Umer-The-Dev](https://www.linkedin.com/in/umer-the-dev/)
- **GitHub**: [@umerjs](https://github.com/umerjs)

---

## License & Usage

This project is released under the **MIT License**, but with important additional restrictions:

### **Important Restrictions**

- **Not free to use or redistribute** as your own portfolio or business site
- **No plagiarism** of design, code, or content without permission
- **Permission required** for any commercial, educational, or public reuse
- **Contact me** for licensing, collaboration, or usage inquiries at [umery101@gmail.com](mailto:umery101@gmail.com)

### **What You Can Do**

- Use this as **reference** for your own portfolio design
- **Learn** from the code structure and techniques
- **Fork** and create your own unique version
- **Adapt** the design patterns for your projects (with proper attribution)

---

MIT License

Copyright (c) 2024 Muhammad Umer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
