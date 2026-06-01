import { useRef, useEffect, useCallback } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { MAX_TILT_DEG, TILT_SPRING } from "./constants";

export interface UseMouseTiltReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  ropeSway: MotionValue<number>;
}

export function useMouseTilt(): UseMouseTiltReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const tiltX = useSpring(
    useTransform(rawX, [-1, 1], [MAX_TILT_DEG, -MAX_TILT_DEG]),
    TILT_SPRING,
  );
  const tiltY = useSpring(
    useTransform(rawY, [-1, 1], [-MAX_TILT_DEG, MAX_TILT_DEG]),
    TILT_SPRING,
  );

  const ropeSway = useSpring(useTransform(rawX, [-1, 1], [3, -3]), {
    stiffness: 80, damping: 35, mass: 1.5,
  });

  const mouseX = useSpring(rawX, { stiffness: 200, damping: 30 });
  const mouseY = useSpring(rawY, { stiffness: 200, damping: 30 });

  const handleMove = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(nx);
    rawY.set(ny);
  }, [rawX, rawY]);

  const handleLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let pointerActive = false;
    let startX = 0;
    let startY = 0;

    const onPointerDown = (e: PointerEvent) => {
      pointerActive = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        handleMove(e.clientX, e.clientY);
      } else if (pointerActive) {
        const dy = Math.abs(e.clientY - startY);
        const dx = Math.abs(e.clientX - startX);
        if (dy > dx && dy > 8) {
          pointerActive = false;
          handleLeave();
        } else {
          handleMove(e.clientX, e.clientY);
        }
      }
    };

    const onPointerEnd = () => {
      pointerActive = false;
      handleLeave();
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove, { passive: true });
    el.addEventListener("pointerup", onPointerEnd);
    el.addEventListener("pointercancel", onPointerEnd);
    el.addEventListener("pointerleave", onPointerEnd);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerEnd);
      el.removeEventListener("pointercancel", onPointerEnd);
      el.removeEventListener("pointerleave", onPointerEnd);
    };
  }, [handleMove, handleLeave]);

  return { containerRef, tiltX, tiltY, mouseX, mouseY, ropeSway };
}
