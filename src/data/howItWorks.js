export const howItWorks = [
  {
    id: "scan",
    index: "01",
    title: "Scan",
    subtitle: "Fragmented Liquidity",
    description:
      "DeFi liquidity is spread across dozens of DEXs and pools. The same asset can trade at different prices in different places, at the same time.",
    icon: "Radar",
  },
  {
    id: "identify",
    index: "02",
    title: "Identify",
    subtitle: "The Spread",
    description:
      "When two markets disagree on price, the gap between them is a potential arbitrage opportunity — before fees and execution costs are accounted for.",
    icon: "ArrowLeftRight",
  },
  {
    id: "borrow",
    index: "03",
    title: "Borrow",
    subtitle: "Flashloan Liquidity",
    description:
      "A flashloan grants temporary access to liquidity for a single atomic transaction — no upfront capital required, provided it's repaid before the transaction ends.",
    icon: "Zap",
  },
  {
    id: "swap",
    index: "04",
    title: "Swap",
    subtitle: "Execute the Trade",
    description:
      "The borrowed liquidity is routed through the markets where the price gap exists — buying low on one side, selling high on the other.",
    icon: "Repeat",
  },
  {
    id: "repay",
    index: "05",
    title: "Repay",
    subtitle: "Return the Loan",
    description:
      "Before the transaction settles, the flashloan — principal plus fee — is repaid in full. If it can't be, the entire transaction reverts and nothing happens.",
    icon: "RotateCcw",
  },
  {
    id: "capture",
    index: "06",
    title: "Capture",
    subtitle: "The Remaining Spread",
    description:
      "What's left after the swap and the repayment is the potential profit — captured on-chain, when market conditions allow.",
    icon: "Coins",
  },
];
