import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@rwoc/shared/components/ui/card';

import { Button } from '@rwoc/shared/components/ui/button';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@rwoc/shared';

import { BarChart, CartesianGrid, XAxis, Bar } from 'recharts';

const FeaturesPage: React.FC = () => {
  const chartData = [
    { label: 'Before', performance: 50 },
    { label: 'After', performance: 80 },
  ];

  const chartConfig = {
    performance: {
      label: 'Performance',
      color: '#2563eb', // You can use any valid CSS color value
    },
  };

  return (
    <div className="p-8">
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Detailed Descriptions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                🚀 Pre-configured Nx Workspace for Monorepo Management
              </CardTitle>
              <CardDescription>
                Manage your monorepo with ease using Nx.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="./nx-workspace.png"
                alt="Nx Workspace"
                className="w-full h-auto mb-4"
              />
              <p>
                Streamline your development process with a pre-configured Nx
                workspace.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                🎨 Tailwind CSS Integration for Utility-First Styling
              </CardTitle>
              <CardDescription>
                Style your components effortlessly with Tailwind CSS.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="./tailwind-css.png"
                alt="Tailwind CSS"
                className="w-full h-auto mb-4"
              />
              <p>
                Utilize the power of Tailwind CSS for fast and efficient
                styling.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                🖌️ Shadcn UI Components for Consistent Design
              </CardTitle>
              <CardDescription>
                Use Shadcn UI components for a consistent look and feel.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="./shadcn-ui.png"
                alt="Shadcn UI"
                className="w-full h-auto mb-4"
              />
              <p>Achieve a cohesive design with Shadcn UI components.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>📊 Performance Improvements</CardTitle>
              <CardDescription>
                Visualize the performance improvements with Nx.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="min-h-[200px] w-full"
              >
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="label"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="performance"
                    fill="var(--color-performance)"
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>📈 Scalability</CardTitle>
              <CardDescription>
                See how our modular architecture scales with your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="./scalability.png"
                alt="Scalability"
                className="w-full h-auto mb-4"
              />
              <p>
                Our architecture ensures your project can grow without
                limitations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>📹 Video Demonstration</CardTitle>
              <CardDescription>
                Watch a video demonstration of our features in action.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <video controls className="w-full h-auto mb-4">
                <source src="./demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>
                Experience the capabilities of our boilerplate through a video
                demo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
