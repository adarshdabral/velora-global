import { useRef, useState } from "react";
import { motion, useTransform } from "motion/react";
import {
  Landmark,
  CreditCard,
  Bitcoin,
  ShieldCheck,
  Infinity as InfinityIcon,
  LineChart,
  Zap,
  Vault,
  Globe2,
  Users,
  Cpu,
  Handshake,
  ArrowRight,
} from "lucide-react";
import InfinityMark from "./InfinityMark";
import { ecosystemNodes, marketStats, pillars } from "../data/ecosystem";
import { products } from "../data/products";
import { useMouseParallax } from "../hooks/useMouseParallax";

const ICONS = {
  Landmark,
  CreditCard,
  Bitcoin,
  ShieldCheck,
  Infinity: InfinityIcon,
  LineChart,
  Zap,
  Vault,
  Globe2,
  Users,
  Cpu,
  Handshake,
};

const STATUS_LABEL = {
  "revealing-soon": "Revealing Soon",
  "coming-soon": "Coming Soon",
  "in-development": "In Development",
  live: "Live",
};

function OrbitEcosystem() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const { x, y } = useMouseParallax(sectionRef);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const goToProduct = (productId) => {
    if (!productId) return;
    document.getElementById(`product-${productId}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const activeNode = ecosystemNodes[active];
  const activeProduct = products.find((p) => p.id === activeNode.productId);
  const radius = 42;

  return (
    <div ref={sectionRef} className="relative mx-auto flex max-w-3xl flex-col items-center">
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="relative aspect-square w-full max-w-[560px]"
      >
        {/* Orbit rings */}
        <div className="absolute inset-[8%] rounded-full border border-slate-900/10" />
        <div className="absolute inset-0 rounded-full border border-slate-900/10" />

        {/* Rotating layer: connecting lines + nodes */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
            {ecosystemNodes.map((node, i) => {
              const angle = (360 / ecosystemNodes.length) * i - 90;
              const rad = (angle * Math.PI) / 180;
              const nx = 50 + radius * Math.cos(rad);
              const ny = 50 + radius * Math.sin(rad);
              return (
                <line
                  key={node.id}
                  x1="50"
                  y1="50"
                  x2={nx}
                  y2={ny}
                  stroke={i === active ? "url(#velora-orbit-grad)" : "#1e293b"}
                  strokeOpacity={i === active ? 1 : 0.12}
                  strokeWidth={i === active ? 0.5 : 0.3}
                />
              );
            })}
            <defs>
              <linearGradient id="velora-orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {ecosystemNodes.map((node, i) => {
            const angle = (360 / ecosystemNodes.length) * i - 90;
            const rad = (angle * Math.PI) / 180;
            const nx = 50 + radius * Math.cos(rad);
            const ny = 50 + radius * Math.sin(rad);
            const Icon = ICONS[node.icon];
            const isActive = i === active;
            return (
              <motion.button
                key={node.id}
                type="button"
                data-cursor="view"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => {
                  setActive(i);
                  goToProduct(node.productId);
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                style={{ left: `${nx}%`, top: `${ny}%` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  animate={{ scale: isActive ? 1.18 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-sm sm:h-16 sm:w-16 ${
                    isActive
                      ? "border-blue-500/60 bg-white shadow-[0_0_35px_rgba(59,130,246,0.45)]"
                      : "border-slate-900/10 bg-white/80 shadow-sm"
                  }`}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    className={isActive ? "text-blue-600" : "text-slate-500"}
                  />
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Center mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center rounded-full bg-white/70 p-8 shadow-[0_0_60px_rgba(59,130,246,0.15)] backdrop-blur-md sm:p-10">
            <InfinityMark size={72} />
            <span className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-slate-900">
              VELORA
            </span>
            <span className="text-[8px] font-medium tracking-[0.3em] text-slate-500">GLOBAL</span>
          </div>
        </div>
      </motion.div>

      {/* Detail panel */}
      <motion.div
        key={activeNode.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-10 flex w-full max-w-md flex-col items-center text-center"
      >
        <span className="rounded-full border border-slate-900/10 bg-white px-3 py-1 text-[9px] font-semibold tracking-[0.25em] text-slate-500 uppercase">
          {STATUS_LABEL[activeNode.status]}
        </span>
        <h3 className="mt-4 font-display text-3xl font-semibold text-slate-900">
          {activeNode.label}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{activeNode.blurb}</p>
        {activeProduct && (
          <button
            type="button"
            data-cursor="cta"
            onClick={() => goToProduct(activeNode.productId)}
            className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] text-blue-600 uppercase"
          >
            Explore {activeProduct.eyebrow} <ArrowRight size={13} />
          </button>
        )}
      </motion.div>
    </div>
  );
}

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#eef2ff] px-6 py-28 text-slate-900 sm:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.08), transparent 40%), radial-gradient(circle at 85% 80%, rgba(37,99,235,0.08), transparent 40%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold tracking-[0.4em] text-blue-600 uppercase">
          The Vision of Velora Global
        </p>
        <h2 className="mt-5 font-display text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          One Ecosystem.
          <br />
          Endless Possibilities.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-slate-500">
          To build the complete financial ecosystem that empowers traders, investors, and
          dreamers — step by step.
        </p>
      </div>

      <div id="ecosystem" className="relative mt-20 scroll-mt-24">
        <OrbitEcosystem />
      </div>

      <div className="relative mx-auto mt-28 max-w-5xl">
        <p className="text-center text-[11px] font-semibold tracking-[0.4em] text-slate-400 uppercase">
          The World of Trading — Opportunity Like Never Before
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-900/10 bg-slate-900/10 sm:grid-cols-3">
          {marketStats.map((stat) => {
            const Icon = ICONS[stat.icon];
            return (
              <div key={stat.id} className="bg-white p-8 text-center sm:p-10">
                <Icon size={22} className="mx-auto mb-4 text-blue-600" strokeWidth={1.6} />
                <p className="text-sm font-semibold text-slate-900">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.tag}</p>
                <p className="mt-5 font-display text-4xl font-semibold text-slate-900">
                  {stat.value}
                  <span className="ml-1 text-lg text-slate-400">{stat.unit}</span>
                </p>
                <p className="mt-1 text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto mt-20 flex max-w-5xl flex-wrap items-start justify-center gap-x-10 gap-y-8">
        {pillars.map((p) => {
          const Icon = ICONS[p.icon];
          return (
            <div key={p.label} className="flex max-w-[180px] flex-col items-center text-center">
              <Icon size={20} className="mb-3 text-blue-600" strokeWidth={1.6} />
              <p className="text-[11px] font-semibold tracking-[0.1em] text-slate-900 uppercase">
                {p.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{p.blurb}</p>
            </div>
          );
        })}
      </div>

      <p className="relative mt-20 text-center font-display text-xl font-medium text-slate-800 sm:text-2xl">
        We fund. You trade.{" "}
        <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
          Together, we build the future.
        </span>
      </p>
    </section>
  );
}
