import React from 'react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string | number;
  title: string;
  description: string;
  className?: string;
}

/**
 * StatItem component.
 * 
 * A single item within a Stats Block, designed to present a specific piece of statistical information.
 * Each StatItem includes an icon, a value, a title, and a description to provide context and enhance understanding.
 * 
 * Use Cases:
 * - Business Dashboards: Display individual performance metrics like monthly revenue, user growth, or project completion rates.
 * - Portfolio Websites: Highlight specific achievements, such as the number of projects completed or client testimonials.
 * - E-commerce Platforms: Show key metrics like total sales, active users, or average ratings for products.
 * - Educational Platforms: Present statistics on individual courses, such as enrollment numbers or completion rates.
 * - Non-Profit Organizations: Illustrate specific impact metrics, such as funds raised for a particular campaign or volunteer hours contributed.
 */
const StatItem: React.FC<StatItemProps> = ({ icon, value, title, description, className }) => {
  return (
    <div className={`flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md ${className}`} role="region" aria-labelledby={`${title}-stat`}>
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <h2 id={`${title}-stat`} className="text-lg font-medium text-gray-900">{title}</h2>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export { StatItem, StatItemProps };
