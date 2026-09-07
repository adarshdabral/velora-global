import { useRef, useState } from "react";
import { motion, useTransform } from "motion/react";
import {
  Zap,
  Waves,
  ArrowLeftRight,
  Bitcoin,
  Coins,
  FileCode2,
  Lock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import InfinityMark from "./InfinityMark";
import { ecosystemNodes } from "../data/ecosystem";
import { products } from "../data/products";
import { useMouseParallax } from "../hooks/useMouseParallax";

const ICONS = {
  Zap,
  Waves,
  ArrowLeftRight,
  Bitcoin,
  Coins,
  FileCode2,
  Lock,
  ShieldCheck,
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
                <stop offset="100%" stopColor="#38bdf8" />
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
              VELSWAP
            </span>
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
        <h3 className="font-display text-3xl font-semibold text-slate-900">
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
            {activeProduct.eyebrow === "By Velora Global" ? "Explore VelSwap" : `Explore ${activeProduct.title}`}{" "}
            <ArrowRight size={13} />
          </button>
        )}
      </motion.div>
    </div>
  );
}

export default function Vision() {
  return (
    <section
      id="opportunity"
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

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold tracking-[0.4em] text-blue-600 uppercase">
          The Opportunity
        </p>
        <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          DeFi Markets Don't Always Agree On Price.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-slate-500">
          Liquidity is fragmented across dozens of decentralized exchanges. The same asset can
          trade at slightly different prices in different places, at the same time — and that
          gap is where arbitrage opportunity lives. Traditional arbitrage usually requires deep
          capital reserves. A flashloan changes that equation: temporary liquidity, borrowed and
          repaid inside a single transaction, without committing the full trade capital upfront.
        </p>
      </div>

      <div id="ecosystem" className="relative mt-20 scroll-mt-24">
        <OrbitEcosystem />
      </div>
    </section>
  );
}
