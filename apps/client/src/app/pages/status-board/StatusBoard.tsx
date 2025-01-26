'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import {
  CalendarDays,
  Clock,
  MessageSquare,
  Percent,
  Star,
} from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ChartConfig,
  ChartContainer,
  Button,
  Input,
  Textarea,
} from '@rwoc/shadcnui';
import { useEffect, useState } from 'react';
import { Logo } from '@rwoc/shadcnui-blocks';
import { navigationConfig } from '../../constants/navigationConfig';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

const projectData = [
  { name: 'TRANSMIT', count: 18, days: 1 },
  { name: 'CODA', count: 29, days: 3 },
  { name: 'UNISON', count: 48, days: 3 },
  { name: 'CANDYBAR', count: 8, days: 2 },
  { name: 'GENERAL', count: 3, days: 0 },
].map((item) => ({
  name: item.name || '',
  count: item.count ?? 0,
  days: item.days ?? 0,
}));

const scheduleData = [
  { route: '4', time: '1:02', minutes: '9 Min' },
  { route: '9', time: '9 Min', minutes: '5 Min' },
  { route: '14', time: '5 Min', minutes: '11 Min' },
  { route: '19', time: '11 Min', minutes: '3:55' },
  { route: '20', time: '3:55', minutes: '' },
];

const calendarEvents = [
  { date: '3/11', event: 'Ned Out (Vacation)' },
  { date: '3/12', event: 'Ned Out (Vacation)' },
  { date: '3/15', event: 'Status Meeting' },
  { date: '3/22', event: 'Mike Out (Vacation)' },
  { date: '3/23', event: 'Mike Out (Vacation)' },
];

const incidentHistory = [
  { date: '3/10', incident: 'Server Outage', resolution: 'Resolved' },
  { date: '3/11', incident: 'Database Issue', resolution: 'Resolved' },
  { date: '3/12', incident: 'Network Latency', resolution: 'Ongoing' },
];

const maintenanceSchedule = [
  { date: '3/20', maintenance: 'Database Upgrade', impact: 'Downtime' },
  { date: '3/25', maintenance: 'Server Maintenance', impact: 'Downtime' },
];

export function StatusBoardPage() {
  const [statusData, setStatusData] = useState([
    { name: 'TRANSMIT', status: 'yellow' },
    { name: 'UNISON', status: 'red' },
    { name: 'CODA', status: 'green' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      setStatusData((prevData) =>
        prevData.map((item) => ({
          ...item,
          status: ['green', 'yellow', 'red'][Math.floor(Math.random() * 3)],
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen text-foreground">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Logo
            fill="fill-primary"
            height="50px"
            name="company-logo"
            width="50px"
          />
          <h1 className="text-4xl font-bold text-primary">Status Board</h1>
        </div>
        <Button
          variant="default"
          onClick={() => window.open(navigationConfig.paths.contact, '_blank')}
        >
          Contact Support
        </Button>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-secondary border-muted">
          <CardHeader>
            <CardTitle className="text-primary">Project Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-[200px]" config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectData}>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Bar
                    dataKey="count"
                    fill="currentColor"
                    className="fill-primary"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-muted">
          <CardHeader>
            <CardTitle className="text-primary">Project Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {statusData.map((project) => (
                <div key={project.name} className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      project.status === 'yellow'
                        ? 'bg-yellow-500'
                        : project.status === 'red'
                        ? 'bg-red-500'
                        : 'bg-green-500'
                    }`}
                  />
                  <span>{project.name}</span>
                  <div className="flex gap-1 ml-auto">
                    {Array.from({ length: 3 }, (_, i) => (
                      <Avatar key={i} className="w-6 h-6">
                        <AvatarFallback className="bg-muted text-xs">
                          {i + 1}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-secondary border-muted">
          <CardHeader className="flex flex-row items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <CardTitle className="text-primary">Launch Countdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25 DAYS</div>
            <div className="text-sm text-muted">UNTIL IPAD LAUNCH</div>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-muted">
          <CardHeader className="flex flex-row items-center gap-2">
            <Percent className="w-4 h-4 text-green-500" />
            <CardTitle className="text-primary">Revenue Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-bold">0.95%</div>
              <div className="text-green-500">▲</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-muted">
          <CardHeader className="flex flex-row items-center gap-2">
            <Clock className="w-4 h-4" />
            <CardTitle className="text-primary">Bus Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {scheduleData?.map((schedule) => (
                <div
                  key={schedule.route}
                  className="flex justify-between text-sm"
                >
                  <span>Route {schedule.route}</span>
                  <span className="text-muted">{schedule.minutes}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-secondary border-muted">
          <CardHeader className="flex flex-row items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <CardTitle className="text-primary">Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {calendarEvents?.map((event, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-muted">{event.date}</span>
                  <span>{event.event}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-muted">
          <CardHeader className="flex flex-row items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <CardTitle className="text-primary">Latest Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted">
              <p>WHATEVER DOES THAT COUNT?</p>
              <p>I CONFESS: I DIDN'T THINK MUCH OF HU</p>
              <p>HEALTHY!</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-secondary border-muted">
          <CardHeader className="flex flex-row items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <CardTitle className="text-primary">Incident History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {incidentHistory.map((incident, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-muted">{incident.date}</span>
                  <span>{incident.incident}</span>
                  <span className="text-muted">{incident.resolution}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-muted">
          <CardHeader className="flex flex-row items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <CardTitle className="text-primary">Maintenance Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {maintenanceSchedule.map((maintenance, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-muted">{maintenance.date}</span>
                  <span>{maintenance.maintenance}</span>
                  <span className="text-muted">{maintenance.impact}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-secondary border-muted">
          <CardHeader className="flex flex-row items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <CardTitle className="text-primary">Subscribe to Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <Input id="phone" type="tel" required />
              </div>
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-muted">
          <CardHeader className="flex flex-row items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <CardTitle className="text-primary">Support Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted">
              <p>
                For assistance, please visit our{' '}
                <a
                  href={navigationConfig.paths.contact}
                  className="text-primary underline"
                >
                  Contact Page
                </a>
                .
              </p>
              <p>
                Check out our{' '}
                <a
                  href={navigationConfig.paths.faq}
                  className="text-primary underline"
                >
                  FAQ
                </a>{' '}
                for common questions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
