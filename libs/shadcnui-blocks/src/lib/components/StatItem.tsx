import React from 'react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string | number;
  title: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, title, description }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md" role="region" aria-labelledby={`${title}-stat`}>
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
