import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { useIsDesktop, usePrefersReducedMotion } from "./useMediaQuery";

/**
 * Tracks pointer position within [-0.5, 0.5] of a container (or window),
 * exposed as spring-smoothed motion values for parallax transforms.
 */
export function useMouseParallax(ref) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });
  const isDesktop = useIsDesktop();
  const reduceMotion = usePrefersReducedMotion();
  const frame = useRef(null);

  useEffect(() => {
    if (!isDesktop || reduceMotion) return;
    const el = ref?.current ?? null;

    const handleMove = (e) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = el
          ? el.getBoundingClientRect()
          : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(px);
        y.set(py);
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [ref, isDesktop, reduceMotion, x, y]);

  return { x: springX, y: springY };
}
