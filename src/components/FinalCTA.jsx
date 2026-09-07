import { motion } from "motion/react";
import { Sparkles, MapPin } from "lucide-react";
import InfinityMark from "./InfinityMark";
import travelBg from "../assets/images/final-travel.webp";

const beatVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function FinalCTA() {
  return (
    <section id="future" className="relative bg-white text-slate-900">
      <img
        src={travelBg}
        alt=""
        className="duotone-blue absolute inset-0 h-full w-full object-cover opacity-40"
        loading="lazy"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white"
        aria-hidden="true"
      />

      {/* Beat 1 — Thank You */}
      <motion.div
        variants={beatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center"
      >
        <InfinityMark size={80} />
        <h2 className="font-display text-4xl font-semibold sm:text-6xl">Thank You</h2>
        <p className="max-w-md text-balance text-base text-slate-500">
          For being a part of Velora Global.
        </p>
        <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-slate-400 uppercase">
          Infinite Opportunities. <InfinityMark size={20} glow={false} /> Limitless Wealth.
        </div>
      </motion.div>

      {/* Beat 2 — A Surprise */}
      <motion.div
        variants={beatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 text-center"
      >
        <span className="rounded-full border border-slate-900/10 bg-white px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] text-blue-600 uppercase">
          A Surprise Is Awaiting For You
        </span>
        <h2 className="max-w-2xl text-balance font-display text-4xl font-semibold sm:text-6xl">
          Are you guys ready?
        </h2>
      </motion.div>

      {/* Beat 3 — Bonanza */}
      <motion.div
        variants={beatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative flex min-h-[85vh] flex-col items-center justify-center gap-6 px-6 pb-28 text-center"
      >
        <Sparkles size={26} className="text-blue-500" />
        <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold sm:text-6xl">
          Something Extraordinary
          <br /> Is On The Horizon.
        </h2>
        <p className="text-sm font-semibold tracking-[0.3em] text-blue-600 uppercase">
          Upcoming Bonanza
        </p>
        <p className="max-w-md text-balance text-sm text-slate-500">
          A reward. A journey. A memory for life.
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
          <MapPin size={14} />
          Destination to be disclosed soon
        </div>
        <p className="mt-4 font-display text-xl font-medium text-slate-800">
          Get ready. Stay tuned.
        </p>
      </motion.div>
    </section>
  );
}
