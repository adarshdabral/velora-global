import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useIsDesktop } from "../hooks/useMediaQuery";

/**
 * Custom cursor: a small glowing dot that morphs into a labeled pill
 * when hovering elements tagged with data-cursor="explore|view|cta|drag".
 * Desktop only — inert (and invisible) on touch/mobile.
 */
export default function Cursor() {
  const isDesktop = useIsDesktop();
  const [variant, setVariant] = useState(null);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const over = (e) => {
      const el = e.target.closest?.("[data-cursor]");
      setVariant(el ? el.getAttribute("data-cursor") : null);
    };
    const leaveWindow = () => setVisible(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    document.documentElement.addEventListener("mouseleave", leaveWindow);
    document.body.classList.add("cursor-none-desktop");

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", leaveWindow);
      document.body.classList.remove("cursor-none-desktop");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  if (!isDesktop) return null;

  const labels = {
    explore: "EXPLORE",
    view: "VIEW",
    cta: null,
    drag: "DRAG",
  };

  const label = variant ? labels[variant] : null;
  const isCta = variant === "cta";
  const isExpanded = Boolean(variant);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1.5 rounded-full bg-white text-black"
        animate={{
          width: isExpanded ? (isCta ? 56 : label ? 92 : 14) : 14,
          height: isExpanded ? (isCta ? 56 : label ? 36 : 14) : 14,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        {isCta && <ArrowUpRight size={20} strokeWidth={2.25} />}
        {label && (
          <span className="text-[10px] font-semibold tracking-[0.2em] whitespace-nowrap">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
