/**
 * HangingCard — The cinematic hero component that orchestrates the entire
 * hanging developer ID badge experience.
 *
 * Architecture:
 * ┌─────────────────────────────────────────────┐
 * │  Perspective Container (1200px depth)        │
 * │  ┌───────────────────────────────────────┐   │
 * │  │  AmbientGlow (atmospheric backlight)  │   │
 * │  │  ┌─────────────────────────────────┐  │   │
 * │  │  │  Rope (anchor → rope → clasp)  │  │   │
 * │  │  │  ┌───────────────────────────┐  │  │   │
 * │  │  │  │  CardBody (tilts on Y/X)  │  │  │   │
 * │  │  │  │  ├── DepthLayer           │  │  │   │
 * │  │  │  │  ├── CardFace             │  │  │   │
 * │  │  │  │  └── ShineOverlay         │  │  │   │
 * │  │  │  └───────────────────────────┘  │  │   │
 * │  │  └─────────────────────────────────┘  │   │
 * │  └───────────────────────────────────────┘   │
 * └─────────────────────────────────────────────┘
 *
 * All 3D illusion is achieved via:
 * - CSS perspective + rotateX/Y transforms
 * - Stacked offset layers for thickness
 * - Dynamic shadows opposite to tilt
 * - Moving specular highlight
 * - Spring-based mouse tracking via Framer Motion values
 *
 * NO Three.js, WebGL, or Canvas is used.
 */

import { motion } from 'framer-motion';
import { useMouseTilt } from './useMouseTilt';
import { Rope } from './Rope';
import { CardBody } from './CardBody';
import { AmbientGlow } from './AmbientGlow';
import {
  PERSPECTIVE_PX,
  IDLE_SWAY_DURATION,
  IDLE_SWAY_AMPLITUDE,
} from './constants';

interface HangingCardProps {
  className?: string;
}

export default function HangingCard({ className = '' }: HangingCardProps) {
  const { containerRef, tiltX, tiltY, mouseX, mouseY, ropeSway } =
    useMouseTilt();

  return (
    <div
      ref={containerRef}
      className={`relative flex items-start justify-center select-none ${className}`}
      style={{
        perspective: PERSPECTIVE_PX,
        perspectiveOrigin: '50% 0%',
        touchAction: 'none',
      }}
    >
      {/* ─── Ambient atmospheric glow ─── */}
      <AmbientGlow mouseX={mouseX} mouseY={mouseY} />

      {/* ─── Main hanging assembly ─── */}
      <motion.div
        className="relative flex flex-col items-center will-change-transform"
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'top center',
        }}
        // Subtle idle sway animation — pendulum-like
        animate={{
          rotateZ: [
            -IDLE_SWAY_AMPLITUDE,
            IDLE_SWAY_AMPLITUDE,
            -IDLE_SWAY_AMPLITUDE,
          ],
        }}
        transition={{
          duration: IDLE_SWAY_DURATION,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Rope + anchor system */}
        <Rope ropeSway={ropeSway} />

        {/* Card body with all depth layers */}
        <CardBody
          tiltX={tiltX}
          tiltY={tiltY}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      </motion.div>
    </div>
  );
}
