import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Tooltip } from "@erisfy/shadcnui";
import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar } from "recharts";

interface TargetAchievementData {
  state: string;
  targetAchieved: number;
}

export interface TargetAchievementChartProps {
  data: TargetAchievementData[];
}

export const TargetAchievementChart: FC<TargetAchievementChartProps> = ({ data }) => {
  return (
    <Card className="bg-secondary border-0 text-foreground lg:col-span-2">
      <CardHeader>
        <CardTitle>Target Achieved</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
              <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
              <YAxis dataKey="state" type="category" />
              <Tooltip />
              <Bar dataKey="targetAchieved" fill="#8884d8" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
