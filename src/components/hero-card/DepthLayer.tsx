import { m, useTransform, type MotionValue } from "framer-motion";

interface DepthLayerProps {
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
}

export function DepthLayer({ tiltX, tiltY }: DepthLayerProps) {
  const offsetX = useTransform(tiltX, (v) => v * -0.4);
  const offsetY = useTransform(tiltY, (v) => v * -0.4);

  return (
    <m.div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        rotateY: offsetX,
        rotateX: offsetY,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{
          transform: "translateZ(-12px) translateY(4px)",
          background: "#040405",
          boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
        }}
      />
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{
          transform: "translateZ(-8px) translateY(3px)",
          background: "linear-gradient(180deg, #1a1a1d 0%, #0a0a0c 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      />
      <div
        className="absolute inset-0 rounded-[22px]"
        style={{
          transform: "translateZ(-4px) translateY(1.5px)",
          background: "linear-gradient(180deg, #18181b 0%, #0c0c0e 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(255,255,255,0.02)",
        }}
      />
      <div
        className="absolute bottom-0 left-2 right-2 h-[8px] rounded-b-[20px]"
        style={{
          transform: "translateZ(-6px) translateY(5px)",
          background: "linear-gradient(180deg, #151517 0%, #08080a 100%)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      />
      <div
        className="absolute top-2 right-0 bottom-2 w-[5px] rounded-r-[20px]"
        style={{
          transform: "translateZ(-4px) translateX(2.5px)",
          background:
            "linear-gradient(180deg, rgba(201,169,106,0.06), transparent, rgba(100,200,255,0.04))",
        }}
      />
      <div
        className="absolute top-2 left-0 bottom-2 w-[3px] rounded-l-[20px]"
        style={{
          transform: "translateZ(-4px) translateX(-2px)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), transparent)",
        }}
      />
    </m.div>
  );
}
