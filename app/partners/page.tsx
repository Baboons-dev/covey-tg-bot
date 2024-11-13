'use client';

import { BottomNav } from "@/components/bottom-nav";
import { Button } from "@/components/ui/button";
import { BrandTelegram } from "@/components/icons/brand-telegram";
import { CoveyLogo } from "@/components/icons/covey-logo";
import Image from "next/image";

const partners = [
  {
    name: "Zokyo",
    logo: "/images/zoyko.png",
    website: "https://zokyo.io/"
  },
  {
    name: "Hasu Capital",
    logo: "/images/hasu.png",
    website: "https://hasu.digital"
  },
  {
    name: "Hypermind",
    logo: "/images/hypermind.png",
    website: "#"
  },
  {
    name: "Hacken",
    logo: "/images/hacken.png",
    website: "https://hacken.io/"
  },
  {
    name: "Chainge",
    logo: "/images/chainge.png",
    website: "#"
  },
  {
    name: "TH3M",
    logo: "/images/th3m.png",
    website: "#"
  }
];

export default function PartnersPage() {
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
              Partners
            </h1>
            <p className="text-base sm:text-lg text-white/80 mt-2 leading-relaxed max-w-2xl">
              Meet our trusted partners and collaborators who help make our vision a reality.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl border border-[#528385]/20 bg-[#528385]/10 hover:bg-[#528385]/15 backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain p-4 transition-opacity filter brightness-0 invert opacity-70 group-hover:opacity-100"
                />
              </div>
            </a>
          ))}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}