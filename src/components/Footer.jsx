import InfinityMark from "./InfinityMark";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#04070f] px-6 py-14 text-white/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <InfinityMark size={28} glow={false} />
          <div className="flex flex-col leading-none">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-white">
              VELORA
            </span>
            <span className="text-[8px] font-medium tracking-[0.35em] text-white/40">
              GLOBAL
            </span>
          </div>
        </div>

        <p className="text-[11px] tracking-[0.2em] uppercase">
          Infinite Opportunities. Limitless Wealth.
        </p>

        <p className="text-[11px] text-white/30">
          © {new Date().getFullYear()} Velora Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
