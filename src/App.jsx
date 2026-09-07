import Cursor from "./components/Cursor";
import NoiseOverlay from "./components/NoiseOverlay";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Vision from "./components/Vision";
import ProductUniverse from "./components/ProductUniverse";
import CoreTeam from "./components/CoreTeam";
import EcosystemClimax from "./components/EcosystemClimax";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "roadmap", label: "Roadmap" },
  { id: "vision", label: "Vision" },
  { id: "products", label: "Products" },
  { id: "team", label: "Core Team" },
  { id: "climax", label: "Ecosystem" },
  { id: "future", label: "Bonanza" },
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
        <Roadmap />
        <Vision />
        <ProductUniverse />
        <CoreTeam />
        <EcosystemClimax />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
