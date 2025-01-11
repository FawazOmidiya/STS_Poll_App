"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  ResponsiveContainer,
} from "recharts";
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
      color: "hsl(var(--chart-5))",
    },
    Votes: {
      label: "Number of Votes: ",
    },
    REP: {
      color: "#d30b0d",
    },
    DEM: {
      color: "#013364",
    },
    IND: {
      color: "hsl(var(--chart-1))",
    },
    LIB: {
      color: "hsl(var(--chart-2))",
    },
    GRN: {
      color: "hsl(var(--chart-3))",
    },
    AUR: {
      color: "hsl(var(--chart-4))",
    },
    ASP: {
      color: "hsl(var(--chart-5))",
    },
    CST: {
      color: "hsl(var(--chart-3))",
    },
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{stateName}</CardTitle>
        <CardDescription>2024 Presidential Election</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart
            accessibilityLayer
            data={pollData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="fullName"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                // Split the full name into first and last names
                const [firstName, lastName] = value.split(" ");
                // Return formatted name: first initial + last name
                return `${firstName.charAt(0)}. ${lastName}`;
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="Votes" />}
            />
            <Bar dataKey="voteNum" radius={8}>
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
          As reported by CNN
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total votes per candidate
        </div>
      </CardFooter>
    </Card>
  );
}
