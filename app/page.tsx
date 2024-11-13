'use client';

import { ProjectCard } from "@/components/project-card";
import { SwipeableCardStack } from "@/components/swipeable-card-stack";
import { Button } from "@/components/ui/button";
import { BrandTelegram } from "@/components/icons/brand-telegram";

const projects = [
  {
    name: "AI Chat Assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    tags: ["AI", "ChatGPT", "Machine Learning"],
    telegramLink: "https://t.me/your_bot_name"
  },
  {
    name: "Smart Home Controller",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    tags: ["IoT", "Automation", "Smart Home"],
    telegramLink: "https://t.me/your_bot_name"
  },
  {
    name: "Crypto Portfolio Tracker",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    tags: ["Crypto", "Finance", "Blockchain"],
    telegramLink: "https://t.me/your_bot_name"
  },
  {
    name: "Travel Planner",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    tags: ["Travel", "Planning", "Maps"],
    telegramLink: "https://t.me/your_bot_name"
  },
  {
    name: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    tags: ["Health", "Fitness", "Coaching"],
    telegramLink: "https://t.me/your_bot_name"
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
    <div className="gradient-bg min-h-screen pb-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-[#528385]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-wider">
            COVEY
          </h1>
          <a 
            href="https://t.me/CoveySupport" 
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
        <section className="pt-32 pb-12">
          <div className="flex flex-col items-start space-y-3">
            <h2 className="text-[#528385] text-2xl sm:text-3xl font-medium tracking-wide">
              {getGreeting()}
            </h2>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              {user.name} 👋
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-4 leading-relaxed max-w-2xl">
              Welcome to Covey's portfolio of innovative Telegram applications. Explore our collection of powerful bots designed to enhance your digital experience.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="pt-8">
          <SwipeableCardStack
            items={projects}
            renderItem={(project) => (
              <ProjectCard project={project} />
            )}
          />
        </section>
      </main>
    </div>
  );
}