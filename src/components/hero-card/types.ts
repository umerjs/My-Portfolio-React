/**
 * Shared types for the Hanging ID Card hero component.
 * All depth and interaction types are defined here for modularity.
 */

/** 2D coordinate used for mouse/touch tracking */
export interface Point2D {
  x: number;
  y: number;
}

/** Normalized tilt values (-1 to 1 range) derived from cursor position */
export interface TiltValues {
  rotateX: number;
  rotateY: number;
}

/** Card metadata displayed on the badge */
export interface CardProfile {
  avatarUrl: string;
  name: string;
  title: string;
  stackBadges: string[];
  idCode: string;
  year: string;
  accessLevel: string;
}

/** Props for components that accept tilt input */
export interface TiltableProps {
  rotateX: number;
  rotateY: number;
  mouseX: number;
  mouseY: number;
}
