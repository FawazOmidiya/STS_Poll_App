"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
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
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import axios from "axios";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function BarChartComponent({ stateName }) {
  const [pollData, setPollData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/state_polling/${stateName}` // Backend API URL
        );
        setPollData(response.data.candidates);
      } catch (err) {
        setError("Failed to load data.");
        console.error(err);
      }
    };

    fetchData();
  }, [stateName]);

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  };
  return (
    <AspectRatio ratio={16 / 9}>
      <Card className="w-fit justify-center">
        <CardHeader>
          <CardTitle>{stateName}</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="max-h-[400px] w-[400px]"
          >
            <BarChart
              accessibilityLayer
              data={pollData}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              {/* hiding the tooltip for later in case I want to refine it */}
              {/* <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              /> */}
              <Bar dataKey="voteNum" fill="var(--color-desktop)" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </AspectRatio>
  );
}
