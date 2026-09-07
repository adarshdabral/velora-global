import { motion } from "motion/react";
import { UserCog, Copy, Bot, Crown, ShieldCheck } from "lucide-react";
import ProductShell from "./ProductShell";
import { products, fundManagementFeatures } from "../../data/products";

const ICONS = { UserCog, Copy, Bot, Crown, ShieldCheck };
const product = products.find((p) => p.id === "fund-management");
const BARS = [30, 48, 40, 65, 58, 82];

export default function FundManagement() {
  const features = fundManagementFeatures.map((f) => ({ ...f, Icon: ICONS[f.icon] }));

  return (
    <ProductShell
      product={product}
      features={features}
      background={
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            background:
              "radial-gradient(circle at 85% 15%, rgba(59,130,246,0.10), transparent 45%), radial-gradient(circle at 15% 85%, rgba(37,99,235,0.10), transparent 45%)",
          }}
          aria-hidden="true"
        />
      }
      visual={
        <div className="flex h-64 w-full max-w-sm items-end justify-center gap-3 rounded-3xl border border-slate-900/10 bg-white/60 p-10 shadow-xl backdrop-blur-sm">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: `${h}%` }}
              className={`w-7 rounded-t-md sm:w-9 ${
                i % 2 === 0
                  ? "bg-gradient-to-t from-blue-600 to-blue-300"
                  : "bg-gradient-to-t from-blue-700 to-blue-300"
              }`}
            />
          ))}
        </div>
      }
    />
  );
}
