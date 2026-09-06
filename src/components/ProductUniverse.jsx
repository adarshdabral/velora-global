import { motion } from "motion/react";
import BrokerHouse from "./products/BrokerHouse";
import PropFund from "./products/PropFund";
import Velswap from "./products/Velswap";
import AIAgent from "./products/AIAgent";
import Education from "./products/Education";
import ForexCards from "./products/ForexCards";
import FundManagement from "./products/FundManagement";
import AutomationBot from "./products/AutomationBot";

export default function ProductUniverse() {
  return (
    <div id="products" className="relative scroll-mt-24 bg-[#05050a]">
      <div className="relative flex h-[40vh] flex-col items-center justify-center bg-[#05050a] px-6 text-center sm:h-[50vh]">
        <p className="text-[11px] font-semibold tracking-[0.4em] text-blue-300/80 uppercase">
          The Product Universe
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold text-white sm:text-6xl"
        >
          Eight pillars. One infinite ecosystem.
        </motion.h2>
      </div>

      <BrokerHouse />
      <PropFund />
      <Velswap />
      <AIAgent />
      <Education />
      <ForexCards />
      <FundManagement />
      <AutomationBot />
    </div>
  );
}
