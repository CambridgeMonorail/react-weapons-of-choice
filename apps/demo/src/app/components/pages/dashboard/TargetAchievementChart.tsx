import { Card, CardContent, CardHeader, CardTitle, Tooltip } from "@rwoc/shared";
import { BarChart } from "recharts";
import { ResponsiveContainer, XAxis, YAxis, Bar } from "recharts";


interface TargetAchievementData {
  state: string;
  targetAchieved: number;
}

interface TargetAchievementChartProps {
  data: TargetAchievementData[];
}

export function TargetAchievementChart({ data }: TargetAchievementChartProps) {
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
}
