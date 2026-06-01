// src/components/hero-card/HangingCard.tsx
import { motion } from "framer-motion";
import { useMouseTilt } from "./useMouseTilt";
import { Rope } from "./Rope";
import { CardBody } from "./CardBody";
import { AmbientGlow } from "./AmbientGlow";
import {
  PERSPECTIVE_PX,
  IDLE_SWAY_DURATION,
  IDLE_SWAY_AMPLITUDE,
} from "./constants";
import { useEffect, useState } from "react";

interface HangingCardProps {
  className?: string;
}

export default function HangingCard({ className = "" }: HangingCardProps) {
  const { containerRef, tiltX, tiltY, mouseX, mouseY, ropeSway } =
    useMouseTilt();
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-start justify-start select-none ${className}`}
      style={{
        perspective: PERSPECTIVE_PX,
        perspectiveOrigin: "50% 0%",
        // KEY FIX: touch-action pan-y lets the browser handle vertical scroll
        // natively — the card tilt only responds to horizontal pointer movement
        touchAction: "pan-y",
        // Ensure the card container never intercepts vertical swipes
        overscrollBehavior: "none",
      }}
    >
      <AmbientGlow mouseX={mouseX} mouseY={mouseY} />

      <motion.div
        className="relative flex flex-col items-center will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "top center",
          // Prevent this element from creating a scroll trap
          pointerEvents: "none",
        }}
        {...(reducedMotion
          ? {}
          : {
              animate: {
                rotateZ: [
                  -IDLE_SWAY_AMPLITUDE,
                  IDLE_SWAY_AMPLITUDE,
                  -IDLE_SWAY_AMPLITUDE,
                ],
              },
              transition: {
                duration: IDLE_SWAY_DURATION,
                repeat: Infinity,
                ease: "easeInOut",
              },
            })}
      >
        <Rope ropeSway={ropeSway} />
        <CardBody tiltX={tiltX} tiltY={tiltY} />
      </motion.div>
    </div>
  );
}