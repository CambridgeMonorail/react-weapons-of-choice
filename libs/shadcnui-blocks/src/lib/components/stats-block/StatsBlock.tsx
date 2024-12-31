import React from 'react';
import { StatItem, StatItemProps } from './StatItem';

interface StatsBlockProps {
  stats: StatItemProps[];
}

const StatsBlock: React.FC<StatsBlockProps> = ({ stats }) => {
  if (stats.length === 0) {
    return (
      <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md" role="region" aria-label="No data available">
        <p className="text-lg font-medium text-gray-900">No data available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};

export { StatsBlock, StatsBlockProps };
