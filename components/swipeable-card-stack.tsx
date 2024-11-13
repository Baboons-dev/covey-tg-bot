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
  const [isDragging, setIsDragging] = useState(false);

  const removeCard = (direction: number) => {
    setExitX(direction);
    setCurrentIndex(prev => (prev + 1) % items.length);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Reduced swipe threshold and immediate transition
    const swipeThreshold = 30;
    if (Math.abs(info.offset.x) > swipeThreshold) {
      const direction = info.offset.x > 0 ? 200 : -200;
      removeCard(direction);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setExitX(0);
  };

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % items.length);
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
    <div className="relative h-[520px] w-full max-w-md mx-auto touch-pan-y">
      <div className="absolute top-0 left-0 right-0 h-[460px]">
        <AnimatePresence mode="popLayout">
          {getVisibleCards().map((item, index) => {
            const isTop = index === 0;
            const stackOffset = index * 40;
            const rotationOffset = index * 3;
            const scaleOffset = 1 - index * 0.08;

            return (
              <motion.div
                key={`card-${item.originalIndex}`}
                className={`absolute w-full cursor-grab active:cursor-grabbing ${isDragging ? 'touch-none' : 'touch-pan-x'}`}
                style={{ 
                  zIndex: items.length - index,
                  transformOrigin: "bottom center",
                  filter: index > 0 ? `brightness(${1 - index * 0.2})` : 'none',
                  touchAction: 'pan-x'
                }}
                initial={{
                  scale: isTop ? 0.8 : scaleOffset,
                  y: isTop ? -stackOffset + 50 : -stackOffset,
                  rotate: rotationOffset,
                }}
                animate={{
                  scale: scaleOffset,
                  y: -stackOffset,
                  rotate: isTop ? (exitX * 0.05) : rotationOffset,
                  x: isTop ? exitX : 0,
                }}
                exit={{
                  x: exitX,
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: -100, right: 100 }}
                dragElastic={0.9}
                onDragStart={handleDragStart}
                onDrag={isTop ? handleDrag : undefined}
                onDragEnd={handleDragEnd}
                whileDrag={{
                  cursor: "grabbing",
                  scale: 1.02,
                }}
                whileHover={isTop ? {
                  scale: 1.02,
                  transition: { duration: 0.2 }
                } : undefined}
              >
                {renderItem(item)}
                {isTop && (
                  <div 
                    className="absolute inset-0 flex justify-between items-center pointer-events-none px-4 opacity-0 transition-opacity duration-200"
                    style={{
                      opacity: isDragging ? 0.8 : 0
                    }}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ChevronLeft className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ChevronRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

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