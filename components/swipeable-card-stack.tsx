import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwipeableCardStackProps {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
}

export function SwipeableCardStack({ items, renderItem }: SwipeableCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitX, setExitX] = useState<number>(0);

  const removeCard = (direction: number) => {
    setExitX(direction);
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
      setExitX(0);
    }, 100);
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      removeCard(info.offset.x > 0 ? 200 : -200);
    }
  };

  const handlePrevious = () => {
    setExitX(200);
    setTimeout(() => {
      setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
      setExitX(0);
    }, 100);
  };

  const handleNext = () => {
    setExitX(-200);
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
      setExitX(0);
    }, 100);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % items.length;
      cards.push({ ...items[index], originalIndex: index });
    }
    return cards;
  };

  return (
    <div className="relative h-[520px] w-full max-w-md mx-auto">
      <div className="absolute top-0 left-0 right-0 h-[460px]">
        <AnimatePresence>
          {getVisibleCards().map((item, index) => {
            const isTop = index === 0;
            const stackOffset = index * 40;
            const rotationOffset = index * 3;
            const scaleOffset = 1 - index * 0.08;

            return (
              <motion.div
                key={`card-${item.originalIndex}`}
                className="absolute w-full cursor-grab active:cursor-grabbing"
                style={{ 
                  zIndex: items.length - index,
                  transformOrigin: "bottom center",
                  filter: index > 0 ? `brightness(${1 - index * 0.2})` : 'none'
                }}
                animate={{
                  x: isTop ? exitX : 0,
                  y: -stackOffset,
                  rotate: isTop ? exitX * 0.05 : rotationOffset,
                  scale: scaleOffset,
                }}
                initial={{
                  x: isTop ? 0 : 0,
                  y: -stackOffset,
                  rotate: rotationOffset,
                  scale: scaleOffset,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={isTop ? handleDrag : undefined}
                whileDrag={{
                  cursor: "grabbing",
                  scale: 1.05,
                }}
                whileHover={isTop ? {
                  scale: 1.05,
                  transition: { duration: 0.2 }
                } : undefined}
              >
                {renderItem(item)}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-white/80">
          Swipe to explore
        </span>
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevious}
            className="p-2 hover:bg-[#528385]/20 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white/80" />
          </button>
          <span className="text-sm text-white/80">
            {currentIndex + 1}/{items.length}
          </span>
          <button
            onClick={handleNext}
            className="p-2 hover:bg-[#528385]/20 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white/80" />
          </button>
        </div>
      </div>
    </div>
  );
}