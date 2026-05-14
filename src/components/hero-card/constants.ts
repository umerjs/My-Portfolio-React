import type { CardProfile } from './types';

/* ─── Motion ─── */

/** Spring config for card tilt response — smooth, premium feel */
export const TILT_SPRING = {
  stiffness: 150,
  damping: 25,
  mass: 0.8,
} as const;

/** Spring for the rope/lanyard — slightly laggier than card */
export const ROPE_SPRING = {
  stiffness: 100,
  damping: 30,
  mass: 1.2,
} as const;

/** Maximum tilt angle in degrees for mouse interaction */
export const MAX_TILT_DEG = 12;

/** Entrance animation duration in seconds */
export const ENTRANCE_DURATION = 1.4;

/** Subtle idle sway cycle duration (seconds) */
export const IDLE_SWAY_DURATION = 6;

/** Idle sway amplitude in degrees */
export const IDLE_SWAY_AMPLITUDE = 1.5;

/** Perspective distance for the 3D transform container */
export const PERSPECTIVE_PX = 1200;

/* ─── Card dimensions ─── */
export const CARD_WIDTH = 340;
export const CARD_HEIGHT = 480;
export const CARD_BORDER_RADIUS = 22;

/* ─── Rope/Lanyard ─── */
export const ROPE_HEIGHT = 120;
export const ROPE_WIDTH = 3;

/* ─── Default profile data ─── */
export const DEFAULT_PROFILE: CardProfile = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/178928829?v=4',
  name: 'Umer Memon',
  title: 'Full Stack Developer',
  stackBadges: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
  idCode: '0x004',
  year: '2026',
  accessLevel: 'All Areas',
};

/* ─── Colors ─── */
export const COLORS = {
  cardBg: '#0c0c0e',
  cardSurface: '#111114',
  cardDeep: '#0a0a0c',
  gold: '#c9a96a',
  goldMuted: 'rgba(201, 169, 106, 0.4)',
  silver: '#d4d4d4',
  silverMuted: 'rgba(212, 212, 212, 0.15)',
  white05: 'rgba(255, 255, 255, 0.05)',
  white07: 'rgba(255, 255, 255, 0.07)',
  white10: 'rgba(255, 255, 255, 0.10)',
  white15: 'rgba(255, 255, 255, 0.15)',
  white40: 'rgba(255, 255, 255, 0.40)',
  white50: 'rgba(255, 255, 255, 0.50)',
  white70: 'rgba(255, 255, 255, 0.70)',
  white80: 'rgba(255, 255, 255, 0.80)',
} as const;
