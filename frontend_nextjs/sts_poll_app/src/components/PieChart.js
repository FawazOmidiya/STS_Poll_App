"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function PieChartComponent({ stateName }) {
  const [pollData, setPollData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/state_polling/${stateName}` // Backend API URL
        );
        setPollData(response.data.candidates);
      } catch (err) {
        console.log(err.response.data);
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
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{stateName}</CardTitle>
        <CardDescription>2024 Presidential Election</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={pollData} dataKey="votePcnt" nameKey="fullName" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          As reported by CNN
        </div>
        <div className="leading-none text-muted-foreground">
          Showing percent of votes per candidate
        </div>
      </CardFooter>
    </Card>
  );
}
