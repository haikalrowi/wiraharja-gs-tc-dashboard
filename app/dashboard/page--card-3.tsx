"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

function randomNumberFrom0to200() {
  return Math.round(Math.random() * 200);
}

const chartData = [
  { month: "January", men: 186, women: 80 },
  { month: "February", men: 305, women: 200 },
  { month: "March", men: 237, women: 120 },
  { month: "April", men: 73, women: 190 },
  { month: "May", men: 209, women: 130 },
  { month: "June", men: 214, women: 140 },
];

const chartConfig = {
  men: {
    label: "Men",
    color: "var(--chart-1)",
  },
  women: {
    label: "Women",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function Chart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-20 w-full">
      <AreaChart
        accessibilityLayer
        data={chartData.map((data) => ({
          ...data,
          men: randomNumberFrom0to200(),
          women: randomNumberFrom0to200(),
        }))}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-men)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-men)" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-women)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-women)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="men"
          type="natural"
          fill="url(#fillDesktop)"
          fillOpacity={0.4}
          stroke="var(--color-men)"
          stackId="a"
        />
        <Area
          dataKey="women"
          type="natural"
          fill="url(#fillMobile)"
          fillOpacity={0.4}
          stroke="var(--color-women)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}

export function Card3({
  arg,
}: {
  arg: {
    title: string;
    description: string;
    content: string;
    footer: string;
  };
}) {
  const { title, description, content, footer } = arg;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="my-auto">
        <h3 className="text-muted-foreground scroll-m-20 text-2xl font-bold tracking-tight">
          {content}
        </h3>
      </CardContent>
      <CardFooter className="flex-col items-start space-y-4">
        <p className="text-muted-foreground text-sm">{footer}</p>
        <Chart />
      </CardFooter>
    </Card>
  );
}
