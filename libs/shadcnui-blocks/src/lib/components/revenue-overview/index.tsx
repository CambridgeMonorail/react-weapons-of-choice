import { Card, CardContent, CardHeader, CardTitle } from "@erisfy/shadcnui";


interface RevenueOverviewProps {
  totalRevenue: number;
  targetRevenue: number;
}

export function RevenueOverview({ totalRevenue, targetRevenue }: RevenueOverviewProps) {
  const percentageAchieved = Math.round((totalRevenue / targetRevenue) * 100);

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-6xl font-bold">${totalRevenue.toLocaleString()}</div>
        <div className="text-lg text-foreground/90 mt-2">Actual Revenue (thousands)</div>
        <div className="mt-4 h-2 bg-muted rounded">
          <div
            className="h-2 bg-primary rounded"
            style={{ width: `${percentageAchieved}%` }}
          />
        </div>
        <div className="text-sm text-foreground/90 mt-2">{percentageAchieved}%</div>
      </CardContent>
    </Card>
  );
}