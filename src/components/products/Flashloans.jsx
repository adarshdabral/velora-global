import { motion } from "motion/react";
import { Wallet, Lock, FileCode2, Zap, ArrowRight } from "lucide-react";
import ProductShell from "./ProductShell";
import { products, flashloansFeatures } from "../../data/products";

const ICONS = { Wallet, Lock, FileCode2, Zap };
const product = products.find((p) => p.id === "flashloans");

const STEPS = ["Borrow", "Trade", "Repay"];

export default function Flashloans() {
  const features = flashloansFeatures.map((f) => ({ ...f, Icon: ICONS[f.icon] }));

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
                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.16), transparent 45%), radial-gradient(circle at 85% 70%, rgba(37,99,235,0.16), transparent 50%)",
            }}
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
            One Transaction
          </p>

          <div className="mt-4 rounded-xl border border-dashed border-blue-400/30 p-4">
            <div className="flex items-center justify-between gap-2">
              {STEPS.map((step, i) => (
                <div key={step} className="flex flex-1 items-center gap-2">
                  <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-3 text-center">
                    <span className="text-sm font-semibold text-white">{step}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <ArrowRight size={14} className="shrink-0 text-blue-300/60" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-[11px] text-white/45">
            <Lock size={13} className="shrink-0 text-blue-300" />
            Reverts in full if any step fails — nothing is ever partially settled.
          </div>
        </motion.div>
      }
    />
  );
}
