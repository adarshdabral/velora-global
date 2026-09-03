import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Users, ShieldCheck, Globe2 } from "lucide-react";
import InfinityMark from "./InfinityMark";
import teamImg from "../assets/images/core-team.webp";

const PILLARS = [
  { label: "One Rank.", icon: Users },
  { label: "One Team.", icon: ShieldCheck },
  { label: "One Vision.", icon: Globe2 },
];

export default function CoreTeam() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.15"],
  });
  const brightness = useTransform(scrollYProgress, [0, 1], [0.4, 1.15]);
  const filter = useTransform(brightness, (b) => `brightness(${b}) saturate(1.1)`);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);
  const infinityOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <section
      id="team"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#05050a] px-6 py-28 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(59,130,246,0.14), transparent 45%)",
        }}
        aria-hidden="true"
      />

      <p className="relative text-[11px] font-semibold tracking-[0.4em] text-blue-300/80 uppercase">
        Upcoming Core Team
      </p>
      <h2 className="relative mt-4 max-w-3xl text-balance font-display text-4xl font-semibold text-white sm:text-6xl">
        One rank will define
        <br /> the leaders of tomorrow.
      </h2>
      <p className="relative mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-white/55 sm:text-base">
        The Velora Global team will be formed by leaders who achieve the prestigious rank of{" "}
        <span className="font-semibold text-white">Blue Diamond Rank.</span>
      </p>

      <div className="relative mt-14 w-full max-w-4xl">
        <motion.img
          src={teamImg}
          alt="Silhouettes of future Velora Global leaders gathering around a glowing blue diamond"
          className="mask-fade-bottom w-full"
          style={{ filter, opacity, scale }}
          loading="lazy"
        />
        <motion.div
          style={{ opacity: infinityOpacity }}
          className="absolute inset-x-0 top-1/3 flex justify-center"
        >
          <InfinityMark size={70} />
        </motion.div>
      </div>

      <div className="relative mt-14 flex flex-wrap items-center justify-center gap-10">
        {PILLARS.map(({ label, icon: Icon }) => (
          <div key={label} className="flex items-center gap-2 text-white/60">
            <Icon size={16} strokeWidth={1.6} />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
