import { RevenueOverview } from './RevenueOverview';
import { StatePerformanceTable } from './StatePerformance';
import { ForecastChart } from './ForecastChart';
import { TargetAchievementChart } from './TargetAchievementChart'; // Import the TargetAchievementChart component

export function DashboardPage() {
  const sampleData = {
    totalRevenue: 750000,
    targetRevenue: 1000000,
  };

  const statePerformanceData = [
    {
      state: 'California',
      forecast: 200000,
      q3Adjusted: 180000,
      actual: 190000,
      risk: 'medium' as const, // Ensure the risk property matches the expected type
      targetAchieved: 95,
    },
    // ... more data
  ];

  const forecastData = [
    { month: 'Jan', forecast: 100000, actual: 95000 },
    { month: 'Feb', forecast: 120000, actual: 110000 },
    // ... more data
  ];

  const targetAchievementData = [
    { state: 'California', targetAchieved: 95 },
    { state: 'Texas', targetAchieved: 85 },
    // ... more data
  ];

  return (
    <div className="p-6 m-4 space-y-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
      <RevenueOverview {...sampleData} />

      <StatePerformanceTable data={statePerformanceData} />

      {/* Forecast Chart */}
      <ForecastChart data={forecastData} />

      {/* Target Achievement Chart */}
      <TargetAchievementChart data={targetAchievementData} /> {/* Add the TargetAchievementChart component */}
    </div>
  );
}

