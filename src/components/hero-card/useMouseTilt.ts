/**
 * useMouseTilt — Tracks cursor position relative to a container and
 * produces smoothed Framer Motion values for tilt, highlight shift,
 * and parallax depth. Uses requestAnimationFrame for jank-free updates.
 *
 * Returns MotionValues so consumers can use them directly in `style`
 * without triggering React re-renders on every mouse move.
 */

import { useRef, useEffect, useCallback } from 'react';
import {
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { MAX_TILT_DEG, TILT_SPRING } from './constants';

export interface UseMouseTiltReturn {
  /** Ref to attach to the interactive container */
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** Smoothed X tilt in degrees (for rotateY — intentionally swapped) */
  tiltX: MotionValue<number>;
  /** Smoothed Y tilt in degrees (for rotateX) */
  tiltY: MotionValue<number>;
  /** Raw normalized mouse X (-1 to 1), useful for shine/highlight positioning */
  mouseX: MotionValue<number>;
  /** Raw normalized mouse Y (-1 to 1) */
  mouseY: MotionValue<number>;
  /** Smoothed rope sway in degrees (lags behind card tilt for realism) */
  ropeSway: MotionValue<number>;
}

export function useMouseTilt(): UseMouseTiltReturn {
  const containerRef = useRef<HTMLDivElement>(null);

  // Raw normalized values (-1 to 1)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smoothed tilt angles via spring physics
  const tiltX = useSpring(
    useTransform(rawX, [-1, 1], [MAX_TILT_DEG, -MAX_TILT_DEG]),
    TILT_SPRING,
  );
  const tiltY = useSpring(
    useTransform(rawY, [-1, 1], [-MAX_TILT_DEG, MAX_TILT_DEG]),
    TILT_SPRING,
  );

  // Rope sway — uses a softer spring to lag behind the card
  const ropeSway = useSpring(
    useTransform(rawX, [-1, 1], [3, -3]),
    { stiffness: 80, damping: 35, mass: 1.5 },
  );

  // Smoothed mouse position for highlight/shine effects
  const mouseX = useSpring(rawX, { stiffness: 200, damping: 30 });
  const mouseY = useSpring(rawY, { stiffness: 200, damping: 30 });

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Normalize to -1..1
      const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((clientY - rect.top) / rect.height) * 2 - 1;
      rawX.set(nx);
      rawY.set(ny);
    },
    [rawX, rawY],
  );

  const handleLeave = useCallback(() => {
    // Smoothly return to neutral
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handleMove(t.clientX, t.clientY);
    };
    const onLeave = () => handleLeave();

    el.addEventListener('mousemove', onMouseMove, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: true });
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [handleMove, handleLeave]);

  return { containerRef, tiltX, tiltY, mouseX, mouseY, ropeSway };
}
