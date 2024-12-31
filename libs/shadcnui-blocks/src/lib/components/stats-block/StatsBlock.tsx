import React from 'react';
import { StatItem, StatItemProps } from './StatItem';

interface StatsBlockProps {
  stats: StatItemProps[];
  className?: string;
}

/**
 * StatsBlock component.
 * 
 * A Stats Block is a UI component designed to present key statistical information in a concise and visually engaging manner.
 * It aggregates multiple data points, such as user counts, performance metrics, or business achievements, and displays them
 * in a structured format that is easy for users to interpret.
 * 
 * Use Cases:
 * - Business Dashboards: Showcase company performance indicators like revenue growth, customer acquisition rates, or project completions.
 * - Portfolio Websites: Highlight personal achievements, such as the number of completed projects, satisfied clients, or years of experience.
 * - E-commerce Platforms: Display metrics like total products sold, active users, or average customer ratings to build trust with potential customers.
 * - Educational Platforms: Present statistics on courses offered, enrolled students, or success stories to attract prospective learners.
 * - Non-Profit Organizations: Illustrate impact metrics, such as funds raised, communities served, or volunteer hours contributed, to engage supporters.
 */
const StatsBlock: React.FC<StatsBlockProps> = ({ stats, className }) => {
  if (stats.length === 0) {
    return (
      <div className={`flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md ${className}`} role="region" aria-label="No data available">
        <p className="text-lg font-medium text-gray-900">No data available</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center items-center gap-4 ${className}`}>
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};

export { StatsBlock, StatsBlockProps };
