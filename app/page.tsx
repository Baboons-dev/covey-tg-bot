'use client';

import { ProjectCard } from "@/components/project-card";
import { BottomNav } from "@/components/bottom-nav";
import { HomeIcon, AppWindow, Code2Icon, Users2Icon } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { BrandTelegram } from "@/components/icons/brand-telegram";
import { CoveyLogo } from "@/components/icons/covey-logo";

const navigationCards = [
  {
    icon: AppWindow,
    title: "Telegram Apps",
    description: "Explore our collection of powerful Telegram bots and applications",
    href: "/apps"
  },
  {
    icon: Code2Icon,
    title: "Development",
    description: "Custom development services and solutions",
    href: "/dev"
  },
  {
    icon: Users2Icon,
    title: "Partners",
    description: "Meet our trusted partners and collaborators",
    href: "/partners"
  }
];

export default function Home() {
  const user = {
    name: "John Doe"
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 18) return "Good afternoon";
    if (hour >= 18 && hour < 22) return "Good evening";
    return "Good night";
  };

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
            <h2 className="text-[#528385] text-xl sm:text-2xl font-medium tracking-wide">
              {getGreeting()}
            </h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              {user.name} 👋
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-2 leading-relaxed max-w-2xl">
              Welcome to Covey's portfolio of innovative solutions. Explore our services and discover how we can help you succeed.
            </p>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {navigationCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link 
                key={card.title} 
                href={card.href}
                className="group relative overflow-hidden rounded-2xl border border-[#528385]/20 bg-[#528385]/10 hover:bg-[#528385]/15 backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-[#528385] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-white/80">{card.description}</p>
                </div>
              </Link>
            )
          })}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}