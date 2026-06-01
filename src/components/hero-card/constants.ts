import type { CardProfile } from "./types";

export const TILT_SPRING = {
  stiffness: 150,
  damping: 25,
  mass: 0.8,
} as const;

export const ROPE_SPRING = {
  stiffness: 100,
  damping: 30,
  mass: 1.2,
} as const;

export const MAX_TILT_DEG = 12;
export const ENTRANCE_DURATION = 1.4;
export const IDLE_SWAY_DURATION = 6;
export const IDLE_SWAY_AMPLITUDE = 1.5;
export const PERSPECTIVE_PX = 1200;

export const CARD_WIDTH = 340;
export const CARD_HEIGHT = 480;
export const CARD_BORDER_RADIUS = 22;

export const ROPE_HEIGHT = 100;
export const ROPE_WIDTH = 14;

export const DEFAULT_PROFILE: CardProfile = {
  avatarUrl: "https://avatars.githubusercontent.com/u/178928829?v=4",
  name: "Umer Memon",
  title: "Full Stack Developer",
  stackBadges: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB ",
  ],
  idCode: "488103",
  year: "2026",
  accessLevel: "All Areas",
};

export const COLORS = {
  cardBg: "#0c0c0e",
  cardSurface: "#111114",
  cardDeep: "#0a0a0c",
  gold: "#c9a96a",
  goldBright: "#e8d48b",
  goldMuted: "rgba(201, 169, 106, 0.4)",
  goldGlow: "rgba(201, 169, 106, 0.25)",
  cyanGlow: "rgba(100, 200, 255, 0.12)",
  silver: "#d4d4d4",
  silverMuted: "rgba(212, 212, 212, 0.15)",
  white05: "rgba(255, 255, 255, 0.05)",
  white07: "rgba(255, 255, 255, 0.07)",
  white10: "rgba(255, 255, 255, 0.10)",
  white15: "rgba(255, 255, 255, 0.15)",
  white40: "rgba(255, 255, 255, 0.40)",
  white50: "rgba(255, 255, 255, 0.50)",
  white70: "rgba(255, 255, 255, 0.70)",
  white80: "rgba(255, 255, 255, 0.80)",
} as const;

export const CARD_WIDTH_CLAMP = "clamp(300px, 85vw, 340px)";
export const CARD_HEIGHT_CLAMP = "clamp(400px, 120vw, 480px)";
