import { motion } from "motion/react";
import { Wallet, Zap, Percent, Eye, ArrowRight } from "lucide-react";
import ProductShell from "./ProductShell";
import { products, velswapFeatures, velswapPools } from "../../data/products";

const ICONS = { Wallet, Zap, Percent, Eye };
const product = products.find((p) => p.id === "velswap");

export default function Velswap() {
  const features = velswapFeatures.map((f) => ({ ...f, Icon: ICONS[f.icon] }));

  return (
    <ProductShell
      product={product}
      features={features}
      cta={{ label: "Launch App", href: product.externalUrl }}
      background={
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(56,189,248,0.14), transparent 30%, rgba(37,99,235,0.12), transparent 70%, rgba(56,189,248,0.14))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 50% 50%, transparent 20%, #04070f 75%)" }}
          />
        </div>
      }
      visual={
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
        >
          <p className="text-[10px] font-semibold tracking-[0.3em] text-white/40 uppercase">
            Live Pools
          </p>
          <div className="mt-4 divide-y divide-white/10">
            {velswapPools.map((pool, i) => (
              <motion.div
                key={pool.asset}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400" />
                  <span className="text-sm font-semibold text-white">{pool.asset}</span>
                  <span className="text-xs text-white/40">{pool.rate} fee</span>
                </div>
                <span className="font-display text-lg text-white/90">{pool.tvl}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-semibold tracking-[0.15em] text-white/60 uppercase">
            <span>Loan</span>
            <ArrowRight size={12} />
            <span>Trade</span>
            <ArrowRight size={12} />
            <span>Repay</span>
          </div>
        </motion.div>
      }
    />
  );
}
