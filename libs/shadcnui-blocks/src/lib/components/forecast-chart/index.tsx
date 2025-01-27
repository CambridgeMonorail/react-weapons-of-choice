import { Card, CardContent, CardHeader, CardTitle } from "@erisfy/shadcnui";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FC } from "react";

interface ForecastChartProps {
  /**
   * Array of data points for the chart.
   * Each data point should include a month, forecast value, and actual value.
   */
  data: { month: string; forecast: number; actual: number }[];
}

/**
 * ForecastChart component displays a line chart comparing forecasted and actual values over time.
 * It uses the Recharts library for rendering the chart and Shadcn UI components for styling.
 */
const ForecastChart: FC<ForecastChartProps> = ({ data }) => {
  return (
    <Card className="bg-secondary border-0 text-foreground">
      <CardHeader>
        <CardTitle>Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="#888888" />
              <YAxis stroke="#888888" tickFormatter={(value) => `$${value}`} />
              <Tooltip />
              <Line type="monotone" dataKey="forecast" stroke="#8884d8" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="actual" stroke="#82ca9d" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export { ForecastChart, ForecastChartProps };
