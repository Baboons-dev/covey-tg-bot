"use client";

import { ProjectCard } from "@/components/project-card";
import { SwipeableCardStack } from "@/components/swipeable-card-stack";
import { BottomNav } from "@/components/bottom-nav";
import { Button } from "@/components/ui/button";
import { BrandTelegram } from "@/components/icons/brand-telegram";
import { CoveyLogo } from "@/components/icons/covey-logo";

const projects = [
  {
    name: "Value Laps",
    image: "/images/cryptoautos.jpg",
    tags: ["Cars", "Prices", "HP"],
    telegramLink: "https://t.me/CryptoAutosGame_bot",
  },
  {
    name: "Nodeazy",
    image: "/images/nodeazy.jpg",
    tags: ["Node", "Mining"],
    telegramLink: "https://t.me/nodeazybot",
  },
  {
    name: "PlayGPT",
    image: "/images/playgpt.jpg",
    tags: ["Gaming", "Robot"],
    telegramLink: "https://t.me/PlayTapGPT_bot",
  },
  {
    name: "Escher",
    image: "/images/escher.jpg",
    tags: ["AI", "Quiz", "Learn"],
    telegramLink: "https://t.me/Escher_dev_bot",
  },
];

export default function AppsPage() {
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
        {/* Welcome Section */}
        <section className="pt-24 pb-8">
          <div className="flex flex-col items-start space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Telegram Apps
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-2 leading-relaxed max-w-2xl">
              Explore our collection of powerful Telegram bots designed to
              enhance your digital experience.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="pt-8">
          <SwipeableCardStack
            items={projects}
            renderItem={(project) => <ProjectCard project={project} />}
          />
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
