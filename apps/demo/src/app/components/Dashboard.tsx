"use client"


import { Card, CardContent, CardHeader, CardTitle, ChartContainer, ChartTooltip, ChartTooltipContent, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@rwoc/shared'
import { BadgeAlertIcon as Alert, AlertCircle, Table} from 'lucide-react'
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

// Sample data matching the dashboard
const forecastData = [
  { month: "Jan", forecast: 500, actual: 450 },
  { month: "Mar", forecast: 450, actual: 550 },
  { month: "May", forecast: 900, actual: 850 },
  { month: "Jul", forecast: 250, actual: 300 },
  { month: "Sep", forecast: 800, actual: 850 },
  { month: "Nov", forecast: 500, actual: 600 },
]

const stateData = [
  { state: "AL", forecast: 250, q3Adjusted: -5, actual: 200, risk: "medium", targetAchieved: 82 },
  { state: "CA", forecast: 750, q3Adjusted: -75, actual: 450, risk: "high", targetAchieved: 67 },
  { state: "CO", forecast: 250, q3Adjusted: 4, actual: 205, risk: "low", targetAchieved: 81 },
  { state: "DC", forecast: 400, q3Adjusted: 5, actual: 354, risk: "low", targetAchieved: 87 },
  { state: "DE", forecast: 225, q3Adjusted: 10, actual: 204, risk: "low", targetAchieved: 87 },
  { state: "FL", forecast: 400, q3Adjusted: 0, actual: 356, risk: "low", targetAchieved: 89 },
  { state: "IL", forecast: 504, q3Adjusted: -64, actual: 302, risk: "high", targetAchieved: 69 },
  { state: "IN", forecast: 400, q3Adjusted: 0, actual: 350, risk: "low", targetAchieved: 88 },
  { state: "MA", forecast: 360, q3Adjusted: 0, actual: 304, risk: "low", targetAchieved: 84 },
  { state: "MI", forecast: 400, q3Adjusted: 15, actual: 356, risk: "low", targetAchieved: 86 },
  { state: "NH", forecast: 400, q3Adjusted: 15, actual: 342, risk: "low", targetAchieved: 82 },
  { state: "NJ", forecast: 410, q3Adjusted: -8, actual: 304, risk: "medium", targetAchieved: 76 },
  { state: "NY", forecast: 800, q3Adjusted: 3, actual: 580, risk: "low", targetAchieved: 72 },
  { state: "OH", forecast: 350, q3Adjusted: 0, actual: 302, risk: "low", targetAchieved: 86 },
  { state: "PA", forecast: 580, q3Adjusted: 10, actual: 462, risk: "low", targetAchieved: 78 },
  { state: "RI", forecast: 450, q3Adjusted: 0, actual: 387, risk: "low", targetAchieved: 86 },
  { state: "TX", forecast: 650, q3Adjusted: 20, actual: 600, risk: "low", targetAchieved: 90 },
]

export function Dashboard() {
  const totalRevenue = 6058
  const targetRevenue = 7579
  const percentageAchieved = Math.round((totalRevenue / targetRevenue) * 100)

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {/* Revenue Overview */}
        <Card className="bg-secondary border-0 text-foreground">
          <CardContent className="pt-6">
            <div className="text-6xl font-bold">${totalRevenue.toLocaleString()}</div>
            <div className="text-lg text-muted mt-2">Actual Revenue (thousands)</div>
            <div className="mt-4 h-2 bg-muted rounded">
              <div
                className="h-2 bg-primary rounded"
                style={{ width: `${percentageAchieved}%` }}
              />
            </div>
            <div className="text-sm text-muted mt-2">{percentageAchieved}%</div>
          </CardContent>
        </Card>

        {/* State Performance Table */}
        <Card className="bg-secondary border-0 text-foreground lg:col-span-2">
          <CardHeader>
            <CardTitle>By state</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-muted">State</TableHead>
                  <TableHead className="text-muted">Forecast</TableHead>
                  <TableHead className="text-muted">Q3 Adjusted</TableHead>
                  <TableHead className="text-muted">Actual</TableHead>
                  <TableHead className="text-muted">Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stateData.map((row) => (
                  <TableRow key={row.state}>
                    <TableCell>{row.state}</TableCell>
                    <TableCell>${row.forecast}</TableCell>
                    <TableCell>${row.q3Adjusted}</TableCell>
                    <TableCell>${row.actual}</TableCell>
                    <TableCell>
                      {row.risk === "high" ? (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      ) : row.risk === "medium" ? (
                        <Alert className="h-4 w-4 text-yellow-500" />
                      ) : null}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Forecast Chart */}
        <Card className="bg-secondary border-0 text-foreground">
          <CardHeader>
            <CardTitle>Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                forecast: {
                  label: "Forecast",
                  color: "hsl(var(--chart-1))",
                },
                actual: {
                  label: "Actual",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData}>
                  <XAxis
                    dataKey="month"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="var(--color-forecast)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="var(--color-actual)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Target Achievement Chart */}
        <Card className="bg-secondary border-0 text-foreground lg:col-span-2">
          <CardHeader>
            <CardTitle>Target achieved</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                targetAchieved: {
                  label: "Target Achieved",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stateData}
                  layout="vertical"
                  margin={{ top: 0, right: 0, bottom: 0, left: 40 }}
                >
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                  <YAxis dataKey="state" type="category" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="targetAchieved"
                    fill="var(--color-targetAchieved)"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

