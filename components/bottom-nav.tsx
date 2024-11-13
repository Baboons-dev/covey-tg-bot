import { HomeIcon, AppWindow, Code2Icon, Users2Icon } from 'lucide-react';
import Link from 'next/link';

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: HomeIcon, label: 'Home', href: '/' },
  { icon: AppWindow, label: 'TG Apps', href: '/apps' },
  { icon: Code2Icon, label: 'Development', href: '/dev' },
  { icon: Users2Icon, label: 'Partners', href: '/partners' },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-t border-[#528385]/20">
      <div className="container mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-1 px-3 py-2 text-white/80 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}