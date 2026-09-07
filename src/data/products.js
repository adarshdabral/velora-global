export const flashloansFeatures = [
  { title: "No Upfront Capital", blurb: "Liquidity is borrowed for the transaction itself — not held in advance.", icon: "Wallet" },
  { title: "Atomic by Design", blurb: "Every step succeeds together, or the transaction reverts as if it never happened.", icon: "Lock" },
  { title: "Smart Contract Enforced", blurb: "Repayment isn't optional — the contract requires it before the transaction can complete.", icon: "FileCode2" },
  { title: "Same-Block Settlement", blurb: "Borrow and repay happen within a single block, with no overnight exposure.", icon: "Zap" },
];

export const arbitrageFeatures = [
  { title: "Cross-Market Scanning", blurb: "Continuously tracks price gaps for the same asset across pools and exchanges.", icon: "Radar" },
  { title: "Zero-Capital Execution", blurb: "Funded entirely by a flashloan — no upfront capital, no balance sheet risk.", icon: "Zap" },
  { title: "Atomic Settlement", blurb: "The loan, the trade and the repayment complete in one transaction — or none of it happens.", icon: "Lock" },
  { title: "Runs Around the Clock", blurb: "Automated execution around the clock, without manual intervention.", icon: "RefreshCw" },
];

export const velswapFeatures = [
  { title: "Deposit & Earn", blurb: "Supply a pool's principal and accrue a pro-rata share of every fee it collects, paid out automatically on deposit or withdrawal.", icon: "Wallet" },
  { title: "Isolated Flashloans", blurb: "Borrow up to a pool's full balance for a single transaction — loan, trade and repayment settle atomically, or none of it happens.", icon: "Zap" },
  { title: "Capped Fee Split", blurb: "Every fee splits between the protocol and depositors, with the protocol's cut hard-capped on-chain — the rest always flows to LPs.", icon: "Percent" },
  { title: "Full On-Chain Transparency", blurb: "Every deposit, withdrawal and loan is emitted as a public, indexable event — nothing settles off-chain.", icon: "Eye" },
];

export const velswapPools = [
  { asset: "USDC", tvl: "$1.9M", rate: "0.30%" },
  { asset: "DAI", tvl: "$954K", rate: "0.20%" },
  { asset: "USDT", tvl: "$640K", rate: "0.45%" },
];

// The three sections that make up the VelSwap narrative.
export const products = [
  {
    id: "flashloans",
    number: "01",
    eyebrow: "The Concept",
    title: "Flashloans",
    tagline: "Borrow first. Repay before the block closes.",
    status: "Core Primitive",
    theme: "dark",
    accent: "from-blue-400 to-blue-600",
    description:
      "A flashloan grants temporary access to on-chain liquidity for the length of a single transaction. If the borrowed amount — plus its fee — isn't returned before that transaction ends, the entire transaction is undone, as if it never happened.",
    closing: "No collateral. No waiting period. One all-or-nothing transaction.",
    image: null,
  },
  {
    id: "arbitrage",
    number: "02",
    eyebrow: "The Strategy",
    title: "Arbitrage",
    tagline: "Same asset. Two prices. One opportunity.",
    status: "Automated & Continuous",
    theme: "dark",
    accent: "from-blue-500 to-cyan-400",
    description:
      "When the same asset prices differently across two markets, that gap is a potential arbitrage opportunity. The strategy borrows the liquidity through a flashloan, executes both legs of the trade, repays the loan, and — when the economics work after fees and execution costs — captures what's left of the spread.",
    closing: "Potential profit, not guaranteed profit — captured only when conditions allow.",
    image: null,
  },
  {
    id: "velswap",
    number: "03",
    eyebrow: "By Velora Global",
    title: "VelSwap",
    tagline: "Borrow any pool. Settle same block.",
    status: "Live",
    theme: "dark",
    accent: "from-blue-500 to-cyan-400",
    description:
      "VelSwap is the flashloan liquidity layer behind the strategy above — isolated, single-asset pools that lend against their full balance within one atomic transaction, and pay depositors a share of every fee collected. Non-custodial, on-chain, and fully auditable.",
    closing: "No hidden fees. Non-custodial. Multi-chain.",
    image: null,
    externalUrl: "https://velswap.vercel.app",
  },
];
