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
import { CalendarDateRangePicker } from '../components/date-range-picker';
import { Overview } from '../components/overview';
import { RecentSales } from '../components/recent-sales';
import { salesData } from '../../../data/salesData';
import { TrendingUp } from 'lucide-react';

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
      className={`h-full min-h-full text-primary-900 flex-col ${
        isMobile ? 'flex' : 'hidden'
      } md:flex`}
    >
      <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Dashboard
          </h2>
          <div className="flex items-center space-x-3">
            <CalendarDateRangePicker />
            <Button
              variant="default"
            >
              Download
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="border-b border-gray-200">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger
              value="analytics"
              disabled
              className="py-2 text-sm font-medium text-gray-400 cursor-not-allowed"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              disabled
              className="py-2 text-sm font-medium text-gray-400 cursor-not-allowed"
            >
              Reports
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              disabled
              className="py-2 text-sm font-medium text-gray-400 cursor-not-allowed"
            >
              Notifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards with Trend Arrows and Sparklines */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* Total Revenue Card */}
              <Card className="border border-gray-200 bg-primary-50 p-2 md:p-4 hover:shadow-sm transition-shadow flex flex-col items-start">
                <CardHeader className="flex w-full items-start justify-between">
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="text-sm font-semibold text-primary-700 ml-2">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </CardHeader>
                <CardContent className="w-full">
                  <div className="text-2xl font-bold text-primary-900">
                    $45,231.89
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-green-600 mt-1">
                    <ArrowUpIcon />
                    <span>+20.1%</span>
                    <span className="text-gray-500">MoM</span>
                  </div>
                  <Sparkline color="text-green-600" />
                </CardContent>
              </Card>

              {/* Subscriptions Card */}
              <Card className="border border-gray-200 bg-primary-50 p-2 md:p-4 hover:shadow-sm transition-shadow flex flex-col items-start">
                <CardHeader className="flex w-full items-start justify-between">
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="text-sm font-semibold text-primary-700 ml-2">
                      Subscriptions
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="9" cy="7" r="4" />
                      <path
                        d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </CardHeader>
                <CardContent className="w-full">
                  <div className="text-2xl font-bold text-primary-900">+2,350</div>
                  <div className="flex items-center space-x-1 text-sm text-green-600 mt-1">
                    <ArrowUpIcon />
                    <span>+180.1%</span>
                    <span className="text-gray-500">MoM</span>
                  </div>
                  <Sparkline color="text-green-600" />
                </CardContent>
              </Card>

              {/* Sales Card */}
              <Card className="border border-gray-200 bg-primary-50 p-2 md:p-4 hover:shadow-sm transition-shadow flex flex-col items-start">
                <CardHeader className="flex w-full items-start justify-between">
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="text-sm font-semibold text-primary-700 ml-2">
                      Sales
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-400"
                    >
                      <rect
                        width="20"
                        height="14"
                        x="2"
                        y="5"
                        rx="2"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 10h20"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </CardHeader>
                <CardContent className="w-full">
                  <div className="text-2xl font-bold text-primary-900">
                    +12,234
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-green-600 mt-1">
                    <ArrowUpIcon />
                    <span>+19%</span>
                    <span className="text-gray-500">MoM</span>
                  </div>
                  <Sparkline color="text-green-600" />
                </CardContent>
              </Card>

              {/* Active Now Card */}
              <Card className="border border-gray-200 bg-primary-50 p-2 md:p-4 hover:shadow-sm transition-shadow flex flex-col items-start">
                <CardHeader className="flex w-full items-start justify-between">
                  <div className="flex items-center justify-between w-full">
                    <CardTitle className="text-sm font-semibold text-primary-700 ml-2">
                      Active Now
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        d="M22 12h-4l-3 9L9 3l-3 9H2"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </CardHeader>
                <CardContent className="w-full">
                  <div className="text-2xl font-bold text-primary-900">+573</div>
                  <div className="flex items-center space-x-1 text-sm text-green-600 mt-1">
                    <ArrowUpIcon />
                    <span>+201</span>
                    <span className="text-gray-500">HoH</span>
                  </div>
                  <Sparkline color="text-green-600" />
                </CardContent>
              </Card>
            </div>

            {/* Overview and Recent Sales */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-1 md:col-span-2 lg:col-span-4 border border-gray-200 bg-primary-50 hover:shadow-sm transition-shadow flex flex-col items-start p-4">
                <CardHeader className="w-full">
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
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 leading-none text-muted-foreground">
                        January - June 2024
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card className="col-span-1 md:col-span-2 lg:col-span-3 border border-gray-200 bg-primary-50 hover:shadow-sm transition-shadow flex flex-col items-start p-4">
                <CardHeader className="w-full">
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
