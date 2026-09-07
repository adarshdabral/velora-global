import Cursor from "./components/Cursor";
import NoiseOverlay from "./components/NoiseOverlay";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Flashloans from "./components/products/Flashloans";
import Arbitrage from "./components/products/Arbitrage";
import Velswap from "./components/products/Velswap";
import HowItWorks from "./components/HowItWorks";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "opportunity", label: "Opportunity" },
  { id: "product-flashloans", label: "Flashloans" },
  { id: "product-arbitrage", label: "Arbitrage" },
  { id: "product-velswap", label: "VelSwap" },
  { id: "how-it-works", label: "How It Works" },
  { id: "future", label: "Closing" },
];

export default function App() {
  return (
    <div className="relative bg-[#04070f] font-sans text-white antialiased selection:bg-blue-500/30">
      <Cursor />
      <NoiseOverlay />
      <ScrollProgress sections={SECTIONS} />
      <Navbar />

      <main>
        <Hero />
        <Vision />
        <Flashloans />
        <Arbitrage />
        <Velswap />
        <HowItWorks />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
