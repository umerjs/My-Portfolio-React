import { motion, useTransform, type MotionValue } from 'framer-motion';
import { CARD_WIDTH, CARD_HEIGHT, CARD_BORDER_RADIUS, ENTRANCE_DURATION } from './constants';
import { CardFace } from './CardFace';
import { ShineOverlay } from './ShineOverlay';
import { DepthLayer } from './DepthLayer';

interface CardBodyProps {
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function CardBody({ tiltX, tiltY, mouseX, mouseY }: CardBodyProps) {
  // Dynamic shadow offset based on tilt — shadow moves opposite to tilt direction
  const shadowX = useTransform(tiltX, (v) => v * -1.5);
  const shadowY = useTransform(tiltY, (v) => v * 1.5 + 20);
  const shadowBlur = useTransform(tiltX, (v) => 40 + Math.abs(v) * 2);

  return (
    <motion.div
      className="relative will-change-transform"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        transformStyle: 'preserve-3d',
        rotateY: tiltX,
        rotateX: tiltY,
      }}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: ENTRANCE_DURATION,
        ease: [0.22, 1, 0.36, 1], // custom cubic-bezier for premium entrance
      }}
    >
      {/* ─── Dynamic drop shadow ─── */}
      <motion.div
        className="absolute inset-0 rounded-[22px]"
        style={{
          filter: 'blur(1px)',
          boxShadow: useTransform(
            [shadowX, shadowY, shadowBlur],
            ([sx, sy, sb]) =>
              `${sx}px ${sy}px ${sb}px rgba(0,0,0,0.45), 0 0 80px rgba(0,0,0,0.15)`,
          ),
        }}
      />

      {/* ─── Depth layers (behind the card face) ─── */}
      <DepthLayer tiltX={tiltX} tiltY={tiltY} />

      {/* ─── Card face content ─── */}
      <div
        className="relative z-10 overflow-hidden"
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: CARD_BORDER_RADIUS,
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(255,255,255,0.03),
            0 0 0 1px rgba(255,255,255,0.06)
          `,
        }}
      >
        <CardFace />

        {/* ─── Specular shine overlay ─── */}
        <ShineOverlay mouseX={mouseX} mouseY={mouseY} />
      </div>
    </motion.div>
  );
}
