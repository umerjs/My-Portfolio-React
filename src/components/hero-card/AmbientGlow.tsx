import { motion, useTransform, type MotionValue } from "framer-motion";

interface AmbientGlowProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function AmbientGlow({ mouseX, mouseY }: AmbientGlowProps) {
  const glowX = useTransform(mouseX, [-1, 1], [-40, 40]);
  const glowY = useTransform(mouseY, [-1, 1], [-30, 30]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0"
      style={{ x: glowX, y: glowY }}
    >
      <div
        className="absolute left-1/2 top-[40%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,106,0.25) 0%, rgba(201,169,106,0.08) 30%, transparent 65%)",
          filter: "blur(60px)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute left-1/2 top-[55%] h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(100,200,255,0.1) 0%, rgba(100,200,255,0.04) 25%, transparent 60%)",
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute left-1/2 top-[30%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 50%)",
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  );
}
