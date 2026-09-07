import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import InfinityMark from "./InfinityMark";
import heroBg from "../assets/images/hero-bg.webp";

const beatVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function FinalCTA() {
  return (
    <section id="future" className="relative bg-white text-slate-900">
      <img
        src={heroBg}
        alt=""
        className="duotone-blue absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white"
        aria-hidden="true"
      />

      <motion.div
        variants={beatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 py-28 text-center"
      >
        <InfinityMark size={72} />
        <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-600 uppercase">
          Ready to Explore the Spread?
        </p>
        <h2 className="max-w-2xl text-balance font-display text-4xl font-semibold sm:text-6xl">
          Capital Efficiency Meets On-Chain Execution.
        </h2>
        <p className="max-w-md text-balance text-base text-slate-500">
          VelSwap is a product by Velora Global — flashloan liquidity built for the next
          generation of on-chain arbitrage.
        </p>
        <a
          href="https://velswap.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="cta"
          className="group mt-2 flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-[12px] font-semibold tracking-[0.15em] text-white uppercase transition-transform hover:scale-[1.03]"
        >
          Launch VelSwap
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
