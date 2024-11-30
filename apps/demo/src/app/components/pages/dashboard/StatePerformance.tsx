
import { Card, CardContent, CardHeader, CardTitle, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@rwoc/shared";
import { AlertCircle, AlertTriangle, Table } from "lucide-react";

interface StatePerformanceData {
  state: string;
  forecast: number;
  q3Adjusted: number;
  actual: number;
  risk: 'high' | 'medium' | 'low';
  targetAchieved: number;
}

interface StatePerformanceTableProps {
  data: StatePerformanceData[];
}

export function StatePerformanceTable({ data }: StatePerformanceTableProps) {
  return (
    <Card className="bg-secondary border-0 text-foreground lg:col-span-2">
      <CardHeader>
        <CardTitle>By State</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>State</TableHead>
              <TableHead>Forecast</TableHead>
              <TableHead>Q3 Adjusted</TableHead>
              <TableHead>Actual</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead>Target Achieved</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.state}>
                <TableCell>{row.state}</TableCell>
                <TableCell>${row.forecast}</TableCell>
                <TableCell>${row.q3Adjusted}</TableCell>
                <TableCell>${row.actual}</TableCell>
                <TableCell>
                  {row.risk === "high" ? (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  ) : row.risk === "medium" ? (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  ) : (
                    <span className="text-green-500">Low</span>
                  )}
                </TableCell>
                <TableCell>{row.targetAchieved}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}