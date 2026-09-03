import { motion } from "motion/react";
import ProductShell from "./ProductShell";
import { products } from "../../data/products";
import crate from "../../assets/images/crypto-crate.webp";

const product = products.find((p) => p.id === "crypto-arbitrage");

export default function CryptoArbitrage() {
  return (
    <ProductShell
      product={product}
      background={
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(168,85,247,0.14), transparent 30%, rgba(217,70,239,0.12), transparent 70%, rgba(168,85,247,0.14))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 20%, #050308 75%)",
            }}
          />
        </div>
      }
      visual={
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={crate}
            alt="A sealed, glowing crate marked with a question mark — the Crypto Arbitrage Platform, revealing soon"
            className="mask-fade-edges relative w-64 drop-shadow-[0_30px_70px_rgba(168,85,247,0.35)] sm:w-72"
            animate={{ rotateY: [0, 10, 0, -10, 0], y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>
      }
    />
  );
}
