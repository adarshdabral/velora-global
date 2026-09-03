import { motion } from "motion/react";
import {
  SlidersHorizontal,
  Gauge,
  ShieldCheck,
  Globe2,
  Layers,
  Cpu,
  Eye,
  Waves,
  Lock,
  Rocket,
} from "lucide-react";
import ProductShell from "./ProductShell";
import { products, brokerHouseBenefits, brokerHouseDifferentiators } from "../../data/products";
import brokerPhone from "../../assets/images/broker-phone.webp";

const ICONS = { SlidersHorizontal, Gauge, ShieldCheck, Globe2, Layers, Cpu, Eye, Waves, Lock, Rocket };
const product = products.find((p) => p.id === "broker-house");

export default function BrokerHouse() {
  const features = brokerHouseBenefits.map((f) => ({ ...f, Icon: ICONS[f.icon] }));

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
                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.16), transparent 45%), radial-gradient(circle at 85% 70%, rgba(124,58,237,0.16), transparent 50%)",
            }}
          />
        </div>
      }
      visual={
        <div className="relative w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-[70%]"
          >
            <img
              src={brokerPhone}
              alt="Velora Broker House concept on a mobile interface, marked Revealing Soon"
              className="mask-fade-edges w-full drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]"
              loading="lazy"
            />
          </motion.div>
          {brokerHouseDifferentiators.slice(0, 3).map((d, i) => {
            const Icon = ICONS[d.icon];
            const pos = [
              { top: "6%", left: "-4%" },
              { top: "42%", right: "-8%" },
              { bottom: "8%", left: "2%" },
            ][i];
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="animate-float absolute hidden max-w-[150px] rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md sm:block"
                style={{ ...pos, animationDelay: `${i * 0.7}s` }}
              >
                <Icon size={14} className="mb-1.5 text-blue-300" />
                <p className="text-[10px] font-semibold text-white/90">{d.title}</p>
              </motion.div>
            );
          })}
        </div>
      }
    />
  );
}
