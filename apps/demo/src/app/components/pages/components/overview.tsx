import { FC, useMemo } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useTheme } from '@rwoc/shadcnui';

interface DataPoint {
  name: string;
  total: number;
}

const generateData = (): DataPoint[] => {
  return [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ].map(month => ({
    name: month,
    total: Math.floor(Math.random() * 5000) + 1000,
  }));
};

export const Overview: FC = () => {
  const theme = useTheme();
  const data = useMemo(generateData, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke={theme.colors.muted}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke={theme.colors.muted}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill={theme.colors.primary}
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};


