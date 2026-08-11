const SITE_URL = "https://umer-jsx.vercel.app";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Umer",
  givenName: "Umer",
  additionalName: "Muhammad Umer",
  jobTitle: "MERN Stack Developer",
  description:
    "MERN Stack Developer specializing in React, TypeScript, Node.js, Express.js, MongoDB, and modern JavaScript ecosystems. Building scalable full-stack web applications.",
  url: SITE_URL,
  image: `${SITE_URL}/assets/og-image.png`,
  email: "codebyumer.dev@gmail.com",
  telephone: "+92 316 1395147",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  knowsAbout: [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "Git",
    "GitHub",
  ],
  sameAs: ["https://github.com/umerjs", "https://linkedin.com/in/umer-the-dev"],
  alumniOf: "freeCodeCamp",
  nationality: "Pakistani",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Umer — Portfolio",
  url: SITE_URL,
  description:
    "Professional portfolio of Muhammad Umer, a MERN Stack Developer specializing in React, TypeScript, Node.js, and modern web development.",
  author: { "@type": "Person", name: "Muhammad Umer" },
  inLanguage: "en-US",
  copyrightYear: 2026,
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Muhammad Umer | MERN Stack Developer Portfolio",
  description:
    "Full-stack portfolio featuring projects built with React, TypeScript, Node.js, Express, MongoDB, and Tailwind CSS. Available for freelance and collaboration.",
  url: SITE_URL,
  author: { "@type": "Person", name: "Muhammad Umer" },
  about: {
    "@type": "Person",
    name: "Muhammad Umer",
    jobTitle: "MERN Stack Developer",
  },
  dateModified: "2026-06-22",
  primaryImageOfPage: `${SITE_URL}/assets/og-image.png`,
};

const projects = [
  {
    name: "Luxee Store",
    description:
      "Modern full-stack e-commerce platform built with React, TypeScript, and Supabase. Features include user authentication, product management, real-time inventory updates, and Resend-powered email notifications.",
    url: "https://luxee-store.vercel.app",
    codeUrl: "https://github.com/umerjs",
    keywords: ["React", "TypeScript", "Supabase", "E-Commerce", "Tailwind CSS"],
  },
  {
    name: "DilseBuy",
    description:
      "Responsive online store with a mobile-first design. Features product browsing, cart management, and clean UI built with vanilla HTML, CSS, and JavaScript.",
    url: "https://dilsebuy.netlify.app",
    codeUrl: "https://github.com/umerjs",
    keywords: ["HTML", "CSS", "JavaScript", "E-Commerce", "Responsive Design"],
  },
  {
    name: "Car Website",
    description:
      "Automotive showcase website highlighting vehicle collections, detailed specifications, and feature comparisons with a bold modern aesthetic and smooth scroll interactions.",
    url: "https://carexperts.netlify.app",
    codeUrl: "https://github.com/umerjs",
    keywords: ["HTML", "CSS", "UI Design", "Automotive", "Responsive"],
  },
  {
    name: "Starbucks Clone",
    description:
      "Pixel-perfect recreation of the Starbucks landing page experience — matching layout, typography, color system, hover states, and responsive behavior from the original.",
    url: "https://starcoffee-by-umer.netlify.app",
    codeUrl: "https://github.com/umerjs",
    keywords: ["HTML", "CSS", "Clone", "Landing Page", "UI Design"],
  },
  {
    name: "Quiz App",
    description:
      "Interactive quiz application with dynamic question generation, real-time score tracking, and instant feedback on answers. Built with clean semantic HTML and CSS.",
    url: "https://quizzappbyumer.netlify.app",
    codeUrl: "https://github.com/umerjs",
    keywords: ["HTML", "CSS", "Quiz", "Interactive", "JavaScript"],
  },
  {
    name: "Calculator App",
    description:
      "Interactive calculator application featuring a modern glassmorphic UI, smooth animations, and responsive design. Supports basic arithmetic operations with keyboard input.",
    url: "https://calculatorbyumer.netlify.app",
    codeUrl: "https://github.com/umerjs",
    keywords: ["HTML", "CSS", "JavaScript", "Calculator", "UI Design"],
  },
];

const projectSchemas = projects.map((p) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: p.name,
  description: p.description,
  url: p.url,
  codeRepository: p.codeUrl,
  programmingLanguage: ["JavaScript", "TypeScript", "HTML", "CSS"],
  keywords: p.keywords,
  author: {
    "@type": "Person",
    name: "Muhammad Umer",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/OnlineOnly",
  },
}));

const schemas = [personSchema, websiteSchema, webpageSchema, ...projectSchemas];

export function StructuredData() {
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
