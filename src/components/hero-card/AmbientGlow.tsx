/**
 * AmbientGlow — Soft radial glow behind the card that reacts to cursor
 * position. Creates cinematic depth separation and atmospheric lighting
 * similar to product photography backlight spill.
 *
 * Technique: Large radial gradient with blur, shifted by mouse position
 * to simulate dynamic ambient lighting.
 */

import { motion, useTransform, type MotionValue } from "framer-motion";

interface AmbientGlowProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function AmbientGlow({ mouseX, mouseY }: AmbientGlowProps) {
  // Subtle position shift based on cursor
  const glowX = useTransform(mouseX, [-1, 1], [-30, 30]);
  const glowY = useTransform(mouseY, [-1, 1], [-20, 20]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0"
      style={{ x: glowX, y: glowY }}
    >
      {/* Primary warm glow — simulates key light spill */}
      <div
        className="absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,106,0.06) 0%, rgba(201,169,106,0.02) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Secondary cool glow — fills from below */}
      <div
        className="absolute left-1/2 top-[60%] h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(180,180,200,0.03) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
    </motion.div>
  );
}
