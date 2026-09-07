import {
  Landmark,
  CreditCard,
  Bitcoin,
  ShieldCheck,
  Zap,
  Vault,
  GraduationCap,
  Bot,
} from "lucide-react";
import { motion } from "motion/react";
import InfinityMark from "./InfinityMark";
import climaxBg from "../assets/images/ecosystem-climax.webp";

const CONVERGING = [
  { Icon: Landmark, label: "Broker", from: { x: -280, y: -160 } },
  { Icon: Zap, label: "Arbitrage", from: { x: 280, y: -160 } },
  { Icon: ShieldCheck, label: "Prop Firm", from: { x: -320, y: 40 } },
  { Icon: Vault, label: "Fund Mgmt.", from: { x: 320, y: 40 } },
  { Icon: Bitcoin, label: "Crypto", from: { x: -220, y: 200 } },
  { Icon: GraduationCap, label: "Education", from: { x: 220, y: 200 } },
  { Icon: CreditCard, label: "Forex Cards", from: { x: 0, y: -220 } },
  { Icon: Bot, label: "Automation", from: { x: 0, y: 220 } },
];

export default function EcosystemClimax() {
  return (
    <section
      id="climax"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f8fafc] px-6 py-28 text-center"
    >
      <img
        src={climaxBg}
        alt=""
        className="duotone-blue absolute inset-0 h-full w-full object-cover opacity-70"
        loading="lazy"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white"
        aria-hidden="true"
      />

      <div className="relative">
        <p className="text-[11px] font-semibold tracking-[0.4em] text-blue-600 uppercase">
          Building the
        </p>
        <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold text-slate-900 sm:text-6xl">
          World's Complete
          <br /> Finance Ecosystem
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm font-medium tracking-[0.15em] text-slate-500 uppercase">
          One Ecosystem. One Vision. Limitless Future.
        </p>
      </div>

      <div className="relative mt-16 flex h-[420px] w-full max-w-2xl items-center justify-center sm:h-[480px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-10 flex flex-col items-center rounded-full bg-white/80 p-8 shadow-[0_0_80px_rgba(59,130,246,0.25)] backdrop-blur-md"
        >
          <InfinityMark size={90} />
          <span className="mt-1 text-[11px] font-semibold tracking-[0.3em] text-slate-900">
            VELORA
          </span>
        </motion.div>

        {CONVERGING.map(({ Icon, label, from }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: from.x, y: from.y }}
            whileInView={{ opacity: 1, x: from.x * 0.62, y: from.y * 0.62 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
            className="absolute flex flex-col items-center gap-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/10 bg-white shadow-md sm:h-14 sm:w-14">
              <Icon size={18} className="text-blue-600" strokeWidth={1.6} />
            </div>
            <span className="text-[9px] font-semibold tracking-[0.15em] text-slate-500 uppercase">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
