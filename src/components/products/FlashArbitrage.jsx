import { motion } from "motion/react";
import { Radar, Zap, Lock, RefreshCw, ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import ProductShell from "./ProductShell";
import { products, flashArbitrageFeatures } from "../../data/products";

const ICONS = { Radar, Zap, Lock, RefreshCw };
const product = products.find((p) => p.id === "flash-arbitrage");

export default function FlashArbitrage() {
  const features = flashArbitrageFeatures.map((f) => ({ ...f, Icon: ICONS[f.icon] }));

  return (
    <ProductShell
      product={product}
      features={features}
      background={
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 40%, rgba(56,189,248,0.14), transparent 50%), radial-gradient(circle at 10% 85%, rgba(37,99,235,0.14), transparent 50%)",
            }}
          />
        </div>
      }
      visual={
        <div className="relative w-full max-w-sm">
          <div className="flex items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md"
            >
              <TrendingDown size={18} className="mx-auto mb-2 text-blue-300" />
              <p className="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                Pool A
              </p>
              <p className="mt-1 font-display text-lg text-white">Lower Price</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10"
              style={{ boxShadow: "0 0 40px rgba(56,189,248,0.35)" }}
            >
              <Zap size={22} className="text-blue-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md"
            >
              <TrendingUp size={18} className="mx-auto mb-2 text-cyan-300" />
              <p className="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                Pool B
              </p>
              <p className="mt-1 font-display text-lg text-white">Higher Price</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-semibold tracking-[0.15em] text-white/60 uppercase"
          >
            <span>Borrow</span>
            <ArrowRight size={12} />
            <span>Buy Low</span>
            <ArrowRight size={12} />
            <span>Sell High</span>
            <ArrowRight size={12} />
            <span>Repay</span>
          </motion.div>
        </div>
      }
    />
  );
}
