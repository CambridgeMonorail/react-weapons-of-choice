import { FC, useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@rwoc/shadcnui';

import { TrendingUp, Download } from 'lucide-react';
import {
  CalendarDateRangePicker,
  Overview,
  RecentSales,
  NumberAndSecondaryStat,
} from '@rwoc/shadcnui-blocks';
import { salesData } from '../../data/salesData';

const ArrowUpIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M5 12l5-5 5 5" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M19 12l-5 5-5-5" />
  </svg>
);

const Sparkline = ({ color = 'text-green-600' }: { color?: string }) => (
  <svg
    className={`w-full h-6 mt-1 ${color}`}
    viewBox="0 0 50 20"
    preserveAspectRatio="none"
  >
    <polyline
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      points="0,15 10,12 20,10 30,8 40,11 50,7"
    />
  </svg>
);

const DashboardPage: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      data-testid="dashboard-page"
      className={`h-full min-h-full w-full text-primary-900 flex-col ${
        isMobile ? 'flex' : 'hidden'
      } md:flex`}
    >
      <div
        className="flex-1 space-y-4 p-4 md:p-2 pt-6 w-full"
        data-testid="dashboard-content"
      >
        {/* Header Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          data-testid="dashboard-header"
        >
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            data-testid="dashboard-title"
          >
            Dashboard
          </h2>
          <div
            className="flex items-center space-x-3"
            data-testid="dashboard-actions"
          >
            <CalendarDateRangePicker data-testid="date-range-picker" />
            <Button variant="default" data-testid="download-button">
              <span className="hidden sm:inline">Download</span>
              <Download className="sm:hidden" />
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs
          defaultValue="overview"
          className="space-y-4"
          data-testid="dashboard-tabs"
        >
          <TabsList
            className="border-b border-gray-200"
            data-testid="tabs-list"
          >
            <TabsTrigger value="overview" data-testid="tab-overview">
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              disabled
              className="disabled:opacity-40 disabled:cursor-not-allowed"
              data-testid="tab-analytics"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              disabled
              className="disabled:opacity-40 disabled:cursor-not-allowed"
              data-testid="tab-reports"
            >
              Reports
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              disabled
              className="disabled:opacity-40 disabled:cursor-not-allowed"
              data-testid="tab-notifications"
            >
              Notifications
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="overview"
            className="space-y-4"
            data-testid="tab-content-overview"
          >
            {/* Stats Cards with Trend Arrows and Sparklines */}
            <div
              className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              data-testid="stats-cards"
            >
              {/* Total Revenue Card */}
              <NumberAndSecondaryStat
                mainValue={45231.89}
                prefix="$"
                mainLabel="Total Revenue"
                comparison={{
                  baselineValue: 37650,
                  displayMode: 'percent',
                  label: 'vs last month',
                }}
                trendline={[37650, 40000, 42000, 45000, 45231.89]}
                className="bg-background text-foreground min-w-[220px] min-h-[220px]"
                data-testid="total-revenue-card"
              />

              {/* Subscriptions Card */}
              <NumberAndSecondaryStat
                mainValue={2350}
                mainLabel="Subscriptions"
                comparison={{
                  baselineValue: 840,
                  displayMode: 'percent',
                  label: 'vs last month',
                }}
                trendline={[840, 1200, 1800, 2200, 2350]}
                className="bg-background text-foreground min-w-[220px] min-h-[220px]"
                data-testid="subscriptions-card"
              />

              {/* Sales Card */}
              <NumberAndSecondaryStat
                mainValue={12234}
                mainLabel="Sales"
                comparison={{
                  baselineValue: 10280,
                  displayMode: 'percent',
                  label: 'vs last month',
                }}
                trendline={[10280, 11000, 11500, 12000, 12234]}
                className="bg-background text-foreground min-w-[220px] min-h-[220px]"
                data-testid="sales-card"
              />

              {/* Active Now Card */}
              <NumberAndSecondaryStat
                mainValue={573}
                mainLabel="Active Now"
                comparison={{
                  baselineValue: 372,
                  displayMode: 'percent',
                  label: 'vs last hour',
                }}
                trendline={[372, 400, 450, 500, 573]}
                className="bg-background text-foreground min-w-[220px] min-h-[220px]"
                data-testid="active-now-card"
              />
            </div>

            {/* Overview and Recent Sales */}
            <div
              className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7"
              data-testid="overview-recent-sales"
            >
              <Card
                className="col-span-1 md:col-span-2 lg:col-span-4 border border-gray-200 bg-primary-50 hover:shadow-xs transition-shadow flex flex-col items-start p-6"
                data-testid="visitors-card"
              >
                <CardHeader className="w-full p-0 mb-4">
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    Visitors
                  </CardTitle>
                  <CardDescription>
                    Showing total visitors for the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent className="w-full pl-2">
                  <Overview />
                </CardContent>
                <CardFooter className="w-full">
                  <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 5.2% this month{' '}
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 leading-none text-muted-foreground">
                        January - June 2024
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card
                className="col-span-1 md:col-span-2 lg:col-span-3 border border-gray-200 bg-primary-50 hover:shadow-xs transition-shadow flex flex-col items-start p-6"
                data-testid="recent-sales-card"
              >
                <CardHeader className="w-full p-0 mb-4">
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    Recent Sales
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent className="w-full">
                  <RecentSales salesData={salesData} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export { DashboardPage };
