import React, { FC, ReactElement } from 'react';

interface LogoCarouselProps {
  logos: ReactElement[];
  header?: string;
  subheader?: string;
}

const LogoCarousel: FC<LogoCarouselProps> = ({ logos, header, subheader }) => {
  // Duplicate logos to achieve a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Header Section */}
      {header && <h2 className="text-2xl font-bold text-primary">{header}</h2>}
      {subheader && <p className="text-lg">{subheader}</p>}

      {/* Logo Carousel */}
      <div className="relative w-full overflow-hidden mt-4" style={{ height: '100px' }}>
        <div className="grid grid-flow-col auto-cols-[calc(25%)] animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-24 flex items-center justify-center"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { LogoCarousel, LogoCarouselProps };
