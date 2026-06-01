import { motion, useTransform, type MotionValue } from "framer-motion";

interface ShineOverlayProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function ShineOverlay({ mouseX, mouseY }: ShineOverlayProps) {
  const shineX = useTransform(mouseX, [-1, 1], [-150, 150]);
  const shineY = useTransform(mouseY, [-1, 1], [-100, 100]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[22px]"
      style={{ x: shineX, y: shineY }}
    >
      <div
        className="absolute -inset-1/2 opacity-[0.18]"
        style={{
          background:
            "linear-gradient(115deg, transparent 25%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.12) 50%, transparent 65%)",
        }}
      />
      <div
        className="absolute -inset-1/2 opacity-[0.12]"
        style={{
          background:
            "linear-gradient(220deg, transparent 35%, rgba(201,169,106,0.6) 48%, rgba(201,169,106,0.1) 55%, transparent 65%)",
        }}
      />
      <div
        className="absolute -inset-1/2 opacity-[0.06]"
        style={{
          background:
            "linear-gradient(160deg, transparent 30%, rgba(100,200,255,0.4) 45%, transparent 60%)",
        }}
      />
    </motion.div>
  );
}
