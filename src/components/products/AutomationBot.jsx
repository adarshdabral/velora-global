import { motion } from "motion/react";
import { Cpu, Bot, Copy, ShieldAlert, Crown } from "lucide-react";
import ProductShell from "./ProductShell";
import { products, automationBotFeatures } from "../../data/products";
import robot from "../../assets/images/automation-robot.webp";

const ICONS = { Cpu, Bot, Copy, ShieldAlert, Crown };
const product = products.find((p) => p.id === "automation-bot");

export default function AutomationBot() {
  const features = automationBotFeatures.map((f) => ({ ...f, Icon: ICONS[f.icon] }));

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
                "radial-gradient(circle at 25% 30%, rgba(59,130,246,0.16), transparent 50%), radial-gradient(circle at 85% 75%, rgba(99,102,241,0.14), transparent 50%)",
            }}
          />
        </div>
      }
      visual={
        <motion.img
          src={robot}
          alt="A humanoid automation robot bearing the Velora Global infinity emblem, interacting with a trading interface"
          className="duotone-blue mask-fade-edges w-full max-w-xs drop-shadow-[0_30px_70px_rgba(59,130,246,0.3)] sm:max-w-sm"
          loading="lazy"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        />
      }
    />
  );
}
