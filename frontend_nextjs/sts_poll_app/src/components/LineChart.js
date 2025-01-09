"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { transformCsvData } from "@/lib/csvTransformer";

function MultiLineChart({ csvData }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Transform the CSV data for the line chart
    const transformedData = transformCsvData(csvData);
    setChartData(transformedData);
  }, [csvData]);

  if (!chartData.length) {
    return <p>Loading...</p>;
  }

  // Dynamically generate lines for each candidate
  const candidates = Object.keys(chartData[0]).filter((key) => key !== "date");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Betting Odds Over Time</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          {candidates.map((candidate) => (
            <Line
              key={candidate}
              type="monotone"
              dataKey={candidate}
              stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MultiLineChart;
