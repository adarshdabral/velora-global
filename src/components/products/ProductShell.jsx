import { motion } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { products } from "../../data/products";

const THEME_BG = {
  dark: "bg-[#05050a] text-white",
  mystery: "bg-[#050308] text-white",
  light: "bg-gradient-to-b from-white to-[#eef2ff] text-slate-900",
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

function goToProduct(id) {
  document.getElementById(`product-${id}`)?.scrollIntoView({ behavior: "smooth" });
}

export function ProductNav({ id }) {
  const idx = products.findIndex((p) => p.id === id);
  const prev = products[idx - 1];
  const next = products[idx + 1];
  return (
    <div className="absolute bottom-8 right-6 z-20 flex flex-col gap-2 sm:right-10">
      <button
        type="button"
        aria-label="Previous product"
        disabled={!prev}
        data-cursor="view"
        onClick={() => prev && goToProduct(prev.id)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-current/20 opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none disabled:opacity-20"
      >
        <ChevronUp size={16} />
      </button>
      <button
        type="button"
        aria-label="Next product"
        disabled={!next}
        data-cursor="view"
        onClick={() => next && goToProduct(next.id)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-current/20 opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none disabled:opacity-20"
      >
        <ChevronDown size={16} />
      </button>
    </div>
  );
}

export function StatusPill({ status, theme }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase ${
        theme === "light"
          ? "border-slate-900/15 text-slate-500"
          : "border-white/15 text-white/60"
      }`}
    >
      <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-current" />
      {status}
    </span>
  );
}

export function FeatureFragments({ features, theme }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
      {features.map((f, i) => {
        const Icon = f.Icon;
        return (
          <motion.div
            key={f.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex items-start gap-3"
          >
            <div
              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                theme === "light"
                  ? "border-slate-900/10 text-blue-600"
                  : "border-white/15 text-blue-300"
              }`}
            >
              <Icon size={14} strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-sm font-semibold">{f.title}</p>
              {f.blurb && (
                <p
                  className={`mt-0.5 text-[13px] leading-relaxed ${
                    theme === "light" ? "text-slate-500" : "text-white/55"
                  }`}
                >
                  {f.blurb}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/**
 * Shared full-viewport scaffold for a Product Universe entry: eyebrow, huge
 * number + title, tagline, status pill, and a slot for bespoke visuals.
 */
export default function ProductShell({
  product,
  background,
  visual,
  features,
  showClosing = true,
  contentClassName = "",
}) {
  const theme = THEME_BG[product.theme] ?? THEME_BG.dark;
  const isLight = product.theme === "light";

  return (
    <section
      id={`product-${product.id}`}
      aria-label={product.title.replace("\n", " ")}
      className={`relative flex min-h-screen w-full items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-20 ${theme}`}
    >
      {background}

      <div className={`relative z-10 grid w-full items-center gap-14 lg:grid-cols-2 ${contentClassName}`}>
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-4 flex items-center gap-4"
          >
            <span
              className={`font-display text-lg font-semibold ${
                isLight ? "text-slate-400" : "text-white/40"
              }`}
            >
              {product.number}
            </span>
            <span
              className={`h-px flex-1 max-w-16 ${isLight ? "bg-slate-900/15" : "bg-white/15"}`}
            />
            <p
              className={`text-[11px] font-semibold tracking-[0.35em] uppercase ${
                isLight ? "text-blue-600" : "text-blue-300"
              }`}
            >
              {product.eyebrow}
            </p>
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="whitespace-pre-line font-display text-5xl font-semibold leading-[0.95] tracking-tight uppercase sm:text-6xl lg:text-7xl"
          >
            {product.title}
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={`mt-5 text-base font-medium sm:text-lg ${
              isLight ? "text-slate-600" : "text-white/70"
            }`}
          >
            {product.tagline}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-6"
          >
            <StatusPill status={product.status} theme={product.theme === "light" ? "light" : "dark"} />
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={`mt-6 max-w-md text-[15px] leading-relaxed ${
              isLight ? "text-slate-500" : "text-white/55"
            }`}
          >
            {product.description}
          </motion.p>

          {features && (
            <div className="mt-8">
              <FeatureFragments features={features} theme={isLight ? "light" : "dark"} />
            </div>
          )}

          {showClosing && product.closing && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`mt-8 max-w-lg text-sm italic ${
                isLight ? "text-slate-400" : "text-white/45"
              }`}
            >
              “{product.closing}”
            </motion.p>
          )}
        </div>

        <div className="relative flex items-center justify-center">{visual}</div>
      </div>

      <ProductNav id={product.id} />
    </section>
  );
}
