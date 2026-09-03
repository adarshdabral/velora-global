import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown, Euro, DollarSign, Bitcoin } from "lucide-react";
import InfinityMark from "./InfinityMark";
import { useTypewriter } from "../hooks/useTypewriter";
import { useMouseParallax } from "../hooks/useMouseParallax";
import heroBg from "../assets/images/hero-bg.webp";

const HEADLINE = ["THE FUTURE", "OF FINANCE", "IS AN", "ECOSYSTEM."];

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

function FloatingOrb({ icon: Icon, color, top, left, delay, size = 44 }) {
  return (
    <div
      className="absolute hidden animate-float md:block"
      style={{ top, left, animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <div
        className="flex items-center justify-center rounded-full border border-white/10 backdrop-blur-sm"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 30% 30%, ${color}55, ${color}15)`,
          boxShadow: `0 0 24px ${color}40`,
        }}
      >
        <Icon size={size * 0.4} color={color} strokeWidth={2} />
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const { displayed, done } = useTypewriter("WELCOME TO VELORA GLOBAL", 34, 500);
  const { x, y } = useMouseParallax(parallaxRef);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const infinityScale = useTransform(scrollYProgress, [0.05, 0.95], [1, 9]);
  const infinityOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const vignette = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  const rotate = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const tiltX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const shiftX = useTransform(x, [-0.5, 0.5], [-16, 16]);
  const shiftY = useTransform(y, [-0.5, 0.5], [-10, 10]);

  return (
    <section
      id="top"
      ref={heroRef}
      style={{ height: "185vh" }}
      className="relative"
    >
      <div
        ref={parallaxRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#05050a]"
      >
        {/* Atmospheric background image, sourced from the Velora launch deck */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: bgOpacity }}
          aria-hidden="true"
        >
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover opacity-[0.32]"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#05050a]/70 to-[#05050a]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, rgba(99,102,241,0.22), transparent 45%), radial-gradient(circle at 80% 75%, rgba(124,58,237,0.16), transparent 50%)",
            }}
          />
        </motion.div>

        {/* World-map dotted grid, faint */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
          aria-hidden="true"
        />

        {/* Floating currency orbs, echoing the deck's floating coin motif */}
        <FloatingOrb icon={Euro} color="#60a5fa" top="22%" left="10%" delay={0} />
        <FloatingOrb icon={DollarSign} color="#a78bfa" top="65%" left="14%" delay={1.2} size={38} />
        <FloatingOrb icon={Bitcoin} color="#f0b90b" top="30%" left="88%" delay={0.6} />
        <FloatingOrb icon={DollarSign} color="#22d3ee" top="70%" left="85%" delay={1.8} size={36} />

        {/* Vignette that deepens as we scroll into the portal transition */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[#05050a]"
          style={{ opacity: vignette }}
          aria-hidden="true"
        />

        {/* Central infinity portal */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ scale: infinityScale, opacity: infinityOpacity }}
        >
          <motion.div
            style={{ rotate, x: shiftX, y: shiftY }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute h-[280px] w-[280px] rounded-full border border-blue-400/20 animate-spin-slow md:h-[420px] md:w-[420px]" />
            <div className="absolute h-[340px] w-[340px] rounded-full border border-violet-400/15 animate-spin-slower md:h-[520px] md:w-[520px]" />
            <InfinityMark size={220} pulse className="md:hidden" />
            <InfinityMark size={340} pulse className="hidden md:block" />
          </motion.div>
        </motion.div>

        {/* Foreground content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY, x: shiftX, rotateX: tiltX }}
          className="relative flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <p className="mb-6 h-4 font-sans text-[11px] font-medium tracking-[0.45em] text-blue-300/90 uppercase">
            {displayed}
            <span className={done ? "hidden" : "animate-blink"}>|</span>
          </p>

          <h1 className="flex flex-col overflow-hidden font-display font-semibold text-white uppercase">
            {HEADLINE.map((line, i) => (
              <span key={line} className="overflow-hidden py-1 sm:py-2">
                <motion.span
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className={`block leading-[0.88] tracking-[-0.03em] ${
                    i === HEADLINE.length - 1
                      ? "bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent"
                      : ""
                  }`}
                  style={{ fontSize: "clamp(2.75rem, 9vw, 8.5rem)" }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-white/60 uppercase"
          >
            <span>Infinite Opportunities.</span>
            <InfinityMark size={26} glow={false} />
            <span>Limitless Wealth.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#ecosystem"
              data-cursor="cta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#ecosystem")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[12px] font-semibold tracking-[0.15em] text-black uppercase transition-transform hover:scale-[1.03]"
            >
              Enter the Ecosystem
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#roadmap"
              data-cursor="explore"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#roadmap")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full border border-white/20 px-7 py-3.5 text-[12px] font-semibold tracking-[0.15em] text-white/90 uppercase transition-colors hover:border-white/50"
            >
              Follow the Roadmap
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
