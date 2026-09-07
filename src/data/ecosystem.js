// Core concepts behind VelSwap's flashloan-powered arbitrage, shown orbiting
// the product mark in "The Opportunity" section.
export const ecosystemNodes = [
  {
    id: "flashloans",
    productId: "flashloans",
    label: "Flashloans",
    icon: "Zap",
    blurb: "Temporary liquidity, borrowed and repaid within a single transaction.",
  },
  {
    id: "dex-liquidity",
    productId: null,
    label: "DEX Liquidity",
    icon: "Waves",
    blurb: "Liquidity spread across decentralized exchanges, often priced differently.",
  },
  {
    id: "price-spreads",
    productId: "arbitrage",
    label: "Price Spreads",
    icon: "ArrowLeftRight",
    blurb: "The gap between what an asset costs on one market versus another.",
  },
  {
    id: "bitcoin",
    productId: null,
    label: "Bitcoin",
    icon: "Bitcoin",
    blurb: "The most liquid on-chain asset, and a common leg in cross-market arbitrage.",
  },
  {
    id: "eth-stables",
    productId: null,
    label: "ETH & Stablecoins",
    icon: "Coins",
    blurb: "ETH and stablecoin pairs make up much of the volume VelSwap scans.",
  },
  {
    id: "smart-contracts",
    productId: null,
    label: "Smart Contracts",
    icon: "FileCode2",
    blurb: "Every loan, swap and repayment is enforced by on-chain logic — not a promise.",
  },
  {
    id: "atomic-execution",
    productId: "flashloans",
    label: "Atomic Execution",
    icon: "Lock",
    blurb: "The trade completes in full, or it doesn't happen at all.",
  },
  {
    id: "on-chain-settlement",
    productId: "velswap",
    label: "On-Chain Settlement",
    icon: "ShieldCheck",
    blurb: "No intermediaries — every step settles directly on-chain.",
  },
];
