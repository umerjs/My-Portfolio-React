import { Helmet } from "react-helmet-async";

const SITE_URL = "https://umer-jsx.vercel.app";
const DEFAULT_TITLE =
  "Muhammad Umer | MERN Stack Developer & Full Stack Engineer";
const DEFAULT_DESC =
  "Portfolio of Muhammad Umer — a MERN Stack Developer specializing in React, TypeScript, Node.js, Express, MongoDB, and modern web technologies. Browse projects, experience, and skills.";
const OG_IMAGE = `${SITE_URL}/assets/og-image.png`;

export function SEO() {
  return (
    <Helmet>
      <title>{DEFAULT_TITLE}</title>
      <meta name="title" content={DEFAULT_TITLE} />
      <meta name="description" content={DEFAULT_DESC} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={SITE_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:site_name" content="Muhammad Umer — Portfolio" />
      <meta property="og:title" content={DEFAULT_TITLE} />
      <meta property="og:description" content={DEFAULT_DESC} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:secure_url" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta
        property="og:image:alt"
        content="Muhammad Umer — MERN Stack Developer Portfolio"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@umerjs" />
      <meta name="twitter:title" content={DEFAULT_TITLE} />
      <meta name="twitter:description" content={DEFAULT_DESC} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta
        name="twitter:image:alt"
        content="Muhammad Umer — MERN Stack Developer Portfolio"
      />
    </Helmet>
  );
}
