import { motion } from 'framer-motion';
import { useMouseTilt } from './useMouseTilt';
import { Rope } from './Rope';
import { CardBody } from './CardBody';
import { AmbientGlow } from './AmbientGlow';
// QR code image for the hanging card (replace with your actual QR asset)
import qrCodeImg from "@/assets/Linkedin.png";
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

      {/* ─── QR Code overlay (bottom‑right corner) ─── */}
      <div className="absolute bottom-4 right-4 w-20 h-20 pointer-events-none">
        <img
          src={qrCodeImg}
          alt="QR Code"
          className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>

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
