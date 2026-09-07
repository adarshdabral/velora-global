import { motion } from "motion/react";
import ProductShell from "./ProductShell";
import { products } from "../../data/products";
import cardsImg from "../../assets/images/forex-cards.webp";

const product = products.find((p) => p.id === "forex-cards");
const SWATCHES = [
  "linear-gradient(135deg,#1d4ed8,#38bdf8)",
  "linear-gradient(135deg,#1e293b,#0f172a)",
  "linear-gradient(135deg,#e2e8f0,#f8fafc)",
];

export default function ForexCards() {
  return (
    <ProductShell
      product={product}
      background={
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.16), transparent 45%), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.14), transparent 50%)",
            }}
          />
        </div>
      }
      visual={
        <div className="relative w-full max-w-md">
          <motion.img
            src={cardsImg}
            alt="Three Velora Global forex cards — deep blue, black and pearl white finishes — coming soon"
            className="duotone-blue mask-fade-edges w-full drop-shadow-[0_30px_70px_rgba(37,99,235,0.3)]"
            loading="lazy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          />
          <div className="mt-6 flex items-center justify-center gap-4">
            {SWATCHES.map((bg, i) => (
              <motion.div
                key={bg}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-8 w-8 rounded-full border border-white/20 shadow-lg"
                style={{ background: bg }}
              />
            ))}
          </div>
        </div>
      }
    />
  );
}
