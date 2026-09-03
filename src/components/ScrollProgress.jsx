import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useIsDesktop } from "../hooks/useMediaQuery";

/**
 * Fixed cinematic scroll indicator: NN / total on top, active section label,
 * and a glowing vertical progress line — updates as the user scrolls through
 * sections registered via data-section-label / data-section-index.
 */
export default function ScrollProgress({ sections }) {
  const progress = useScrollProgress();
  const [active, setActive] = useState(0);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex">
      <div className="text-right font-sans text-[11px] tracking-[0.3em] text-white/50">
        <span className="text-white">{String(active + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(sections.length).padStart(2, "0")}</span>
      </div>
      <motion.div
        key={sections[active]?.label}
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-1 text-right text-[10px] font-medium tracking-[0.25em] text-white/70 uppercase"
      >
        {sections[active]?.label}
      </motion.div>
      <div className="relative h-40 w-px overflow-hidden bg-white/10">
        <motion.div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-blue-400 via-violet-400 to-fuchsia-400"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}
