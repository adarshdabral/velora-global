import { motion } from "motion/react";
import { Coins, ShieldCheck, Zap, Users } from "lucide-react";
import ProductShell from "./ProductShell";
import { products, propFirmBenefits } from "../../data/products";
import propVisual from "../../assets/images/prop-bull-globe.webp";

const ICONS = { Coins, ShieldCheck, Zap, Users };
const product = products.find((p) => p.id === "prop-firm");

export default function PropFund() {
  const features = propFirmBenefits.map((f) => ({ ...f, Icon: ICONS[f.icon] }));

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
                "radial-gradient(circle at 75% 30%, rgba(34,211,238,0.14), transparent 50%), radial-gradient(circle at 15% 80%, rgba(59,130,246,0.14), transparent 50%)",
            }}
          />
        </div>
      }
      visual={
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-sm"
        >
          <motion.img
            src={propVisual}
            alt="A bull statue rising in front of a glowing digital globe and ascending growth bars"
            className="mask-fade-edges w-full drop-shadow-[0_30px_70px_rgba(34,211,238,0.25)]"
            loading="lazy"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      }
    />
  );
}
