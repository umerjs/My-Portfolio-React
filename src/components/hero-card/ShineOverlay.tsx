/**
 * ShineOverlay — A directional specular highlight that moves with the cursor.
 *
 * Creates the illusion of a reflective card surface by rendering a diagonal
 * gradient whose position tracks the mouse. The gradient mimics a studio
 * softbox reflection sliding across a glossy surface.
 *
 * Technique: A large linear-gradient is translated via CSS transform,
 * driven by Framer Motion spring values to avoid re-renders.
 */

import { motion, useTransform, type MotionValue } from "framer-motion";

interface ShineOverlayProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function ShineOverlay({ mouseX, mouseY }: ShineOverlayProps) {
  // Map normalised mouse (-1..1) to translate offsets for the shine
  const shineX = useTransform(mouseX, [-1, 1], [-120, 120]);
  const shineY = useTransform(mouseY, [-1, 1], [-80, 80]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[22px]"
      style={{
        x: shineX,
        y: shineY,
      }}
    >
      {/* Primary specular highlight — elongated elliptical reflection */}
      <div
        className="absolute -inset-1/2 opacity-[0.12]"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.15) 55%, transparent 70%)",
        }}
      />
      {/* Secondary warm accent — subtle gold rim from simulated warm light */}
      <div
        className="absolute -inset-1/2 opacity-[0.06]"
        style={{
          background:
            "linear-gradient(220deg, transparent 40%, rgba(201,169,106,0.5) 50%, transparent 60%)",
        }}
      />
    </motion.div>
  );
}
