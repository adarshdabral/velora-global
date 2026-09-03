import { useRef } from "react";
import { motion, useTransform } from "motion/react";
import { BrainCircuit, Target, MessagesSquare, TrendingUp, ShieldAlert } from "lucide-react";
import ProductShell from "./ProductShell";
import { products, aiAgentFeatures } from "../../data/products";
import { useMouseParallax } from "../../hooks/useMouseParallax";
import brain from "../../assets/images/ai-brain.webp";

const ICONS = { BrainCircuit, Target, MessagesSquare, TrendingUp, ShieldAlert };
const product = products.find((p) => p.id === "ai-agent");

export default function AIAgent() {
  const features = aiAgentFeatures.map((f) => ({ ...f, Icon: ICONS[f.icon] }));
  const ref = useRef(null);
  const { x, y } = useMouseParallax(ref);
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

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
                "radial-gradient(circle at 70% 40%, rgba(129,140,248,0.16), transparent 50%), radial-gradient(circle at 10% 85%, rgba(59,130,246,0.12), transparent 50%)",
            }}
          />
        </div>
      }
      visual={
        <div ref={ref} className="relative w-full max-w-md" style={{ perspective: 900 }}>
          <motion.img
            src={brain}
            alt="A holographic AI brain interface displaying market predictions, sentiment and risk analysis"
            className="mask-fade-edges w-full drop-shadow-[0_30px_70px_rgba(99,102,241,0.3)]"
            loading="lazy"
            style={{ rotateX, rotateY }}
          />
        </div>
      }
    />
  );
}
