import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Rocket, TrendingUp, Globe2, Handshake, Gem } from "lucide-react";
import { roadmap } from "../data/roadmap";
import { useIsDesktop } from "../hooks/useMediaQuery";
import roadmapBg from "../assets/images/roadmap-bg.webp";

const ICONS = { Rocket, TrendingUp, Globe2, Handshake, Gem };

const STAGE_GLOW = [
  "rgba(59,130,246,0.35)",
  "rgba(56,189,248,0.32)",
  "rgba(37,99,235,0.32)",
  "rgba(29,78,216,0.32)",
  "rgba(147,197,253,0.35)",
];

function Milestone({ item, i }) {
  const Icon = ICONS[item.icon];
  return (
    <div className="relative flex h-screen w-screen shrink-0 items-center justify-center px-6 md:px-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${STAGE_GLOW[i]}, transparent 55%)`,
        }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute font-display font-semibold text-white/[0.05] select-none"
        style={{ fontSize: "clamp(10rem, 32vw, 26rem)", lineHeight: 1 }}
        aria-hidden="true"
      >
        {item.index}
      </span>

      <div className="relative flex max-w-2xl flex-col items-center text-center">
        <div
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/15 backdrop-blur-sm"
          style={{ boxShadow: `0 0 50px ${STAGE_GLOW[i]}` }}
        >
          <Icon size={30} className="text-white" strokeWidth={1.6} />
        </div>
        <p className="mb-3 text-[11px] font-medium tracking-[0.4em] text-white/50 uppercase">
          Stage {item.index}
        </p>
        <h3 className="font-display text-6xl font-semibold tracking-tight text-white uppercase sm:text-7xl md:text-8xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm font-medium tracking-[0.25em] text-blue-300/80 uppercase">
          {item.subtitle}
        </p>
        <p className="mt-6 max-w-md text-balance text-[15px] leading-relaxed text-white/60">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function DesktopRoadmap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = roadmap.length;
  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", `-${(n - 1) * 100}%`]);
  const railWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} style={{ height: `${n * 100}vh` }} className="relative bg-[#04070f]">
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        <motion.div className="flex h-full" style={{ x: trackX }}>
          {roadmap.map((item, i) => (
            <Milestone item={item} i={i} key={item.id} />
          ))}
        </motion.div>

        {/* Persistent progress rail with stage nodes */}
        <div className="pointer-events-none absolute inset-x-0 bottom-16 flex justify-center px-10">
          <div className="relative h-px w-full max-w-4xl bg-white/10">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700"
              style={{ width: railWidth }}
            />
            <div className="absolute inset-0 flex items-center justify-between">
              {roadmap.map((item) => (
                <div key={item.id} className="relative flex flex-col items-center">
                  <span className="h-2.5 w-2.5 rounded-full border border-white/40 bg-[#04070f]" />
                  <span className="absolute top-4 hidden text-[9px] tracking-[0.2em] text-white/40 uppercase md:block">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileRoadmap() {
  return (
    <div className="relative bg-[#04070f] px-6 py-24">
      <div className="absolute left-[38px] top-24 bottom-24 w-px bg-gradient-to-b from-blue-300/60 via-blue-500/60 to-blue-700/60" />
      <div className="flex flex-col gap-16">
        {roadmap.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-6 pl-2"
            >
              <div
                className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0a1628]"
                style={{ boxShadow: `0 0 40px ${STAGE_GLOW[i]}` }}
              >
                <Icon size={22} className="text-white" strokeWidth={1.6} />
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase">
                  Stage {item.index}
                </p>
                <h3 className="mt-1 font-display text-3xl font-semibold text-white uppercase">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium tracking-[0.2em] text-blue-300/80 uppercase">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Roadmap() {
  const isDesktop = useIsDesktop();

  return (
    <section id="roadmap" aria-label="Roadmap of Velora Global" className="relative">
      <div className="relative z-10 pt-28 text-center">
        <img
          src={roadmapBg}
          alt=""
          className="duotone-blue pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] w-full object-cover opacity-[0.15]"
          loading="lazy"
        />
        <p className="text-[11px] font-medium tracking-[0.4em] text-blue-300/80 uppercase">
          The Journey Ahead
        </p>
        <h2 className="mt-4 font-display text-5xl font-semibold text-white uppercase sm:text-6xl">
          Roadmap of Velora Global
        </h2>
      </div>
      {isDesktop ? <DesktopRoadmap /> : <MobileRoadmap />}
    </section>
  );
}
