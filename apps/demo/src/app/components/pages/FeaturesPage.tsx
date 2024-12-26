import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tooltip,
} from '@rwoc/shadcnui';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@rwoc/shadcnui';
import { BarChart, CartesianGrid, XAxis, Bar } from 'recharts';
import { Rocket, Palette, Paintbrush, BarChart as BarChartIcon, Video } from 'lucide-react';

interface ChartData {
  label: string;
  performance: number;
}

const FeaturesPage = () => {
  const [chartData] = useState<ChartData[]>([
    { label: 'Before', performance: 50 },
    { label: 'After', performance: 80 },
  ]);

  const chartConfig = {
    performance: {
      label: 'Performance',
      color: 'var(--color-performance)',
    },
  };

  useEffect(() => {
    // Any side effects or data fetching can be handled here
  }, []);

  return (
    <div className="p-6 m-4 space-y-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4 text-primary">Features</h1>
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">Detailed Descriptions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <Rocket className="inline-block mr-2 text-red-500" />
                Pre-configured Nx Workspace for Monorepo Management
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
          {/* Card 2 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <Palette className="inline-block mr-2 text-blue-500" />
                Tailwind CSS Integration for Utility-First Styling
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
          {/* Card 3 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <Paintbrush className="inline-block mr-2 text-green-500" />
                Shadcn UI Components for Consistent Design
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
        <h2 className="text-4xl font-bold mb-4 text-primary">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 4 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <BarChartIcon className="inline-block mr-2 text-yellow-500" />
                Performance Improvements
              </CardTitle>
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
                    fill={chartConfig.performance.color}
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          {/* Card 5 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <BarChartIcon className="inline-block mr-2 text-yellow-500" />
                Scalability
              </CardTitle>
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
          {/* Card 6 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <Video className="inline-block mr-2 text-orange-500" />
                Video Demonstration
              </CardTitle>
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

export { FeaturesPage };
