/**
 * Rope — The lanyard/suspension system connecting the card to the top anchor.
 *
 * Visual components:
 * 1. Ceiling anchor plate (matte metallic disc)
 * 2. Anchor ring (small torus-like metallic ring)
 * 3. Lanyard/rope (thin vertical strip with subtle sway)
 * 4. Bottom clasp (metallic clip where rope meets card)
 *
 * The rope sways slightly behind the card's tilt to simulate
 * realistic inertia and pendulum-like tension.
 *
 * All visuals are pure CSS — no SVG, no Canvas.
 */

import { motion, type MotionValue, useTransform } from 'framer-motion';
import { ROPE_HEIGHT, ENTRANCE_DURATION, COLORS } from './constants';

interface RopeProps {
  ropeSway: MotionValue<number>;
}

export function Rope({ ropeSway }: RopeProps) {
  // The rope bows slightly in the middle based on sway
  const ropeSkew = useTransform(ropeSway, (v) => v * 0.4);

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center"
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{
        duration: ENTRANCE_DURATION * 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      }}
      style={{ transformOrigin: 'top center' }}
    >
      {/* ─── Ceiling anchor plate ─── */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: 36, height: 12 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 36,
            height: 12,
            background:
              'linear-gradient(180deg, #e0e0e0 0%, #a0a0a0 40%, #888 100%)',
            boxShadow:
              '0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.5)',
          }}
        />
      </div>

      {/* ─── Anchor ring ─── */}
      <div
        className="relative -mt-0.5"
        style={{ width: 16, height: 16 }}
      >
        <div
          className="rounded-full border-[2.5px]"
          style={{
            width: 16,
            height: 16,
            borderColor: COLORS.silver,
            background: 'transparent',
            boxShadow: `0 1px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)`,
          }}
        />
      </div>

      {/* ─── Lanyard body ─── */}
      <motion.div
        className="relative"
        style={{
          width: 3,
          height: ROPE_HEIGHT,
          skewX: ropeSkew,
          transformOrigin: 'top center',
        }}
      >
        {/* Main rope */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 40%, #1a1a1a 100%)',
            boxShadow: '1px 0 3px rgba(0,0,0,0.3)',
          }}
        />
        {/* Rope highlight — simulates light catching the edge */}
        <div
          className="absolute top-0 bottom-0 left-[1px] w-[1px] rounded-full"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)',
          }}
        />
      </motion.div>

      {/* ─── Bottom clasp (where rope meets card) ─── */}
      <div
        className="relative -mt-0.5 flex items-center justify-center"
        style={{ width: 28, height: 14 }}
      >
        <div
          className="rounded-[3px]"
          style={{
            width: 28,
            height: 10,
            background:
              'linear-gradient(180deg, #c8c8c8 0%, #9a9a9a 50%, #888 100%)',
            boxShadow:
              '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)',
          }}
        />
        {/* Clasp slot */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm"
          style={{
            width: 8,
            height: 3,
            background: 'rgba(0,0,0,0.3)',
          }}
        />
      </div>
    </motion.div>
  );
}
