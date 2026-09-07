import { useId } from "react";
import { motion } from "motion/react";

const INFINITY_PATH =
  "M484.4 96C407.7 96 349.3 164.1 320 208.5C290.7 164.1 232.3 96 155.6 96C69.75 96 0 165.7 0 251.6C0 337.4 69.75 407.1 155.6 407.1C232.3 407.1 290.7 339.1 320 294.6C349.3 339 407.7 407.1 484.4 407.1C570.3 407.1 640 337.4 640 251.5C640 165.6 570.3 96 484.4 96zM155.6 351.1C100.7 351.1 56 306.5 56 251.6C56 196.7 100.7 152 155.6 152C201.9 152 245.9 189.6 277.2 251.6C245.9 313.5 201.9 351.1 155.6 351.1zM484.4 351.1C430.1 351.1 386.1 313.5 354.8 251.5C386.1 189.6 430.1 152 484.4 152C539.3 152 584 196.6 584 251.5C584 306.4 539.3 351 484.4 351z";

/**
 * The Velora infinity mark — the website's recurring visual motif.
 * Renders as a glowing gradient glyph; optionally pulses / spins slowly.
 */
export default function InfinityMark({
  size = 64,
  glow = true,
  spin = false,
  pulse = false,
  className = "",
  style = {},
}) {
  const uid = useId().replace(/[:]/g, "");
  const gradId = `velora-inf-grad-${uid}`;
  const glowId = `velora-inf-glow-${uid}`;

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size * 0.4, ...style }}
      animate={spin ? { rotate: 360 } : undefined}
      transition={spin ? { duration: 60, repeat: Infinity, ease: "linear" } : undefined}
    >
      {glow && (
        <svg
          viewBox="0 0 640 512"
          className="absolute inset-0 h-full w-full scale-150 blur-xl"
          style={{ opacity: 0.65 }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={glowId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <path d={INFINITY_PATH} fill={`url(#${glowId})`} />
        </svg>
      )}
      <svg
        viewBox="0 0 640 512"
        className={`relative h-full w-full ${pulse ? "animate-pulse-soft" : ""}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="45%" stopColor="#3b82f6" />
            <stop offset="65%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
        <path d={INFINITY_PATH} fill={`url(#${gradId})`} />
      </svg>
    </motion.div>
  );
}
