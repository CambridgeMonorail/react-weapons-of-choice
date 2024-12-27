import React, { FC, useEffect, useRef } from 'react';
import { cn } from '@rwoc/shadcnui';
import { useTheme } from '@rwoc/shadcnui';
import { motion, useAnimation } from 'framer-motion';

interface LogoData {
  id: string;
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: LogoData[];
  header?: string;
  subheader?: string;
}

const LogoCarousel: FC<LogoCarouselProps> = ({ logos, header, subheader }) => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        x: '-100%',
        transition: { duration: 10, ease: 'linear' },
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="flex flex-col items-center justify-center">
      {header && <h2 className="text-2xl font-bold text-primary">{header}</h2>}
      {subheader && <p className="text-lg text-muted">{subheader}</p>}
      <div
        ref={carouselRef}
        className="overflow-hidden w-full mt-4"
        style={{ height: '100px' }}
      >
        <motion.div
          className="flex"
          animate={controls}
          initial={{ x: '0%' }}
          onAnimationComplete={() => controls.start({ x: '0%' })}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              className="flex-shrink-0 w-24 h-24 mx-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export { LogoCarousel, LogoCarouselProps };
