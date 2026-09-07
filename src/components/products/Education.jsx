import { motion } from "motion/react";
import { BookOpen, SlidersHorizontal, LineChart, Video, GraduationCap, Award } from "lucide-react";
import ProductShell from "./ProductShell";
import { products, educationFeatures } from "../../data/products";

const ICONS = { BookOpen, SlidersHorizontal, LineChart, Video, GraduationCap, Award };
const product = products.find((p) => p.id === "education");

export default function Education() {
  const features = educationFeatures.map((f) => ({ ...f, Icon: ICONS[f.icon] }));

  return (
    <ProductShell
      product={product}
      features={features}
      background={
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            background:
              "radial-gradient(circle at 80% 10%, rgba(59,130,246,0.10), transparent 45%), radial-gradient(circle at 10% 90%, rgba(37,99,235,0.10), transparent 45%)",
          }}
          aria-hidden="true"
        />
      }
      visual={
        <div className="relative flex w-full max-w-sm items-center justify-center">
          <svg viewBox="0 0 300 220" className="w-full" aria-hidden="true">
            <defs>
              <linearGradient id="edu-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <motion.path
              d="M10 170 L60 130 L100 150 L150 80 L200 100 L250 40 L290 60"
              fill="none"
              stroke="url(#edu-line)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
            {[
              [10, 170],
              [100, 150],
              [200, 100],
              [290, 60],
            ].map(([cx, cy], i) => (
              <motion.circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="4.5"
                fill="#7c3aed"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.3, duration: 0.4 }}
              />
            ))}
          </svg>

          <motion.div
            className="animate-float absolute -top-4 right-4 flex h-14 w-14 items-center justify-center rounded-full border border-slate-900/10 bg-white shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <GraduationCap size={22} className="text-blue-600" />
          </motion.div>
          <motion.div
            className="animate-float absolute bottom-2 left-2 flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/10 bg-white shadow-lg"
            style={{ animationDelay: "1.4s" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <BookOpen size={18} className="text-blue-600" />
          </motion.div>
        </div>
      }
    />
  );
}
