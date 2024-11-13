'use client';

import { ProjectCard } from "@/components/project-card";
import { SwipeableCardStack } from "@/components/swipeable-card-stack";
import { BottomNav } from "@/components/bottom-nav";
import { Button } from "@/components/ui/button";
import { BrandTelegram } from "@/components/icons/brand-telegram";
import { CoveyLogo } from "@/components/icons/covey-logo";

const services = [
  {
    name: "Swap, bridge chains, tap into liquidity, and trade perpetuals.",
    image: "/images/shido.jpg",
    tags: ["SHIDO","Platform", "Web App"],
    websiteLink: "https://app.shido.io"
  },
  {
    name: "Institutional offers made available to retail",
    image: "/images/acquire.jpg",
    tags: ["Acquire.Fi", "Offers", "OTC"],
    websiteLink: "https://offers.acquire.fi"
  },
  {
    name: "Stake, earn, and dominate the leaderboard.",
    image: "/images/degen.jpg",
    tags: ["DRINK", "Web App", "Gamify"],
    websiteLink: "https://club.degendistillery.com"
  },
  {
    name: "Stay ahead of the game with real-time data and insightful analytics.",
    image: "/images/coveyinsight.jpg",
    tags: ["Portfolio", "Tracker", "Insight"],
    websiteLink: "#"
  },
  {
    name: "Unlock Earning Potential. Become a Liquidity Provider with SHIDO POOL",
    image: "/images/shido-pool.jpg",
    tags: ["Pool Creation", "Smart Contract", "DeFi"],
    websiteLink: "https://pool.shido.io"
  },
  {
    name: "This intuitive platform offers a range of trading tools.",
    image: "/images/shido-app.jpg",
    tags: ["iOS", "Android", "Wallet"],
    websiteLink: "https://apps.apple.com/nl/app/shido-app/id6473452165"
  }
];

export default function DevPage() {
  return (
    <div className="gradient-bg min-h-screen pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-[#528385]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <CoveyLogo className="w-[120px] h-auto" />
          <a
            href="https://t.me/EspenCovey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              className="text-white hover:bg-[#528385]/20 gap-2"
            >
              <BrandTelegram className="w-5 h-5" />
              Contact Us
            </Button>
          </a>
        </div>
      </header>

      <main className="container mx-auto px-6">
        <section className="pt-24 pb-8">
          <div className="flex flex-col items-start space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Development Services
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-2 leading-relaxed max-w-2xl">
              Professional development services tailored to your needs. From Telegram bots to full-stack applications, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="pt-8">
          <SwipeableCardStack
            items={services}
            renderItem={(service) => (
              <ProjectCard project={service} />
            )}
          />
        </section>
      </main>

      <BottomNav />
    </div>
  );
}