import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import InfinityMark from "./InfinityMark";

const LINKS = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Products", href: "#products" },
  { label: "Vision", href: "#vision" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-6"
        }`}
      >
        <nav
          className={`flex w-[min(1100px,92vw)] items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? "border border-white/10 bg-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a
            href="#top"
            data-cursor="explore"
            onClick={(e) => {
              e.preventDefault();
              goTo("#top");
            }}
            className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <InfinityMark size={34} glow={false} />
            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-semibold tracking-[0.15em] text-white">
                VELORA
              </span>
              <span className="text-[9px] font-medium tracking-[0.35em] text-white/50">
                GLOBAL
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-cursor="explore"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.href);
                  }}
                  className="group relative text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 h-px w-0 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            data-cursor="cta"
            onClick={() => goTo("#ecosystem")}
            className="hidden rounded-full border border-white/20 px-5 py-2 text-[11px] font-semibold tracking-[0.2em] text-white uppercase transition-all hover:border-white/60 hover:bg-white hover:text-black lg:block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Enter
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#05050a]/98 px-8 backdrop-blur-2xl lg:hidden"
          >
            <nav>
              <ul className="flex flex-col gap-2">
                {[...LINKS, { label: "The Future", href: "#climax" }].map(
                  (link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.07,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(link.href);
                        }}
                        className="block py-3 font-display text-[13vw] leading-none font-medium tracking-tight text-white/90 uppercase"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 text-[11px] tracking-[0.3em] text-white/40 uppercase"
            >
              Infinite Opportunities. Limitless Wealth.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
