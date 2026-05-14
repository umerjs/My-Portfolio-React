/**
 * DepthLayer — Simulates card thickness and edge lighting using stacked
 * pseudo-3D layers offset behind the main card face.
 *
 * Technique: Multiple thin strips are positioned with slight translateZ
 * and translateY offsets to create the illusion of physical card edge
 * thickness. Edge lighting gradients simulate rim light hitting the
 * card's edge at an angle.
 */

import { motion, useTransform, type MotionValue } from 'framer-motion';

interface DepthLayerProps {
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
}

export function DepthLayer({ tiltX, tiltY }: DepthLayerProps) {
  // Shift the depth layers slightly opposite to tilt for parallax separation
  const offsetX = useTransform(tiltX, (v) => v * -0.3);
  const offsetY = useTransform(tiltY, (v) => v * -0.3);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        rotateY: offsetX,
        rotateX: offsetY,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Layer 1 — Deepest shadow layer (farthest back) */}
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{
          transform: 'translateZ(-8px) translateY(3px)',
          background: '#050507',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }}
      />

      {/* Layer 2 — Mid-depth with subtle edge highlight */}
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{
          transform: 'translateZ(-5px) translateY(2px)',
          background: 'linear-gradient(180deg, #1a1a1d 0%, #0c0c0e 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      />

      {/* Layer 3 — Near-depth with rim lighting effect */}
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{
          transform: 'translateZ(-2px) translateY(1px)',
          background: 'linear-gradient(180deg, #18181b 0%, #0e0e10 100%)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(255,255,255,0.02)',
        }}
      />

      {/* Bottom edge — visible "thickness" when card tilts */}
      <div
        className="absolute bottom-0 left-2 right-2 h-[6px] rounded-b-[20px]"
        style={{
          transform: 'translateZ(-4px) translateY(4px)',
          background:
            'linear-gradient(180deg, #151517 0%, #0a0a0c 100%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
        }}
      />

      {/* Right edge — rim light visible on tilt */}
      <div
        className="absolute top-2 right-0 bottom-2 w-[4px] rounded-r-[20px]"
        style={{
          transform: 'translateZ(-3px) translateX(2px)',
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.04))',
        }}
      />
    </motion.div>
  );
}
