import { FC } from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@rwoc/shadcnui/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@rwoc/shadcnui/components/ui/chart";

interface DataItem {
  name: string;
  total: number;
}

interface PieDataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 900 },
  { name: "Mar", total: 1600 },
  { name: "Apr", total: 1400 },
  { name: "May", total: 2200 },
  { name: "Jun", total: 1800 },
];

const pieData: PieDataItem[] = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export const ChartDemo: FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Bar Chart</CardTitle>
          <CardDescription>Monthly revenue for the current year</CardDescription>
        </CardHeader>
        <CardContent className="pb-4">
          <ChartContainer
            config={{
              total: {
                label: "Total",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <BarChart data={data}>
              <Bar dataKey="total" fill="var(--color-total)" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Line Chart</CardTitle>
          <CardDescription>Monthly revenue trend</CardDescription>
        </CardHeader>
        <CardContent className="pb-4">
          <ChartContainer
            config={{
              total: {
                label: "Total",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <LineChart data={data}>
              <Line type="monotone" dataKey="total" stroke="var(--color-total)" strokeWidth={2} />
              <ChartTooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pie Chart</CardTitle>
          <CardDescription>Distribution of sales by group</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Value",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <PieChart data={pieData}>
              <Pie
                dataKey="value"
                data={pieData}
                fill="var(--color-value)"
                label
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

