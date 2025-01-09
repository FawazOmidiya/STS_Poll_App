"use client";

import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import LineChart from "@/components/LineChart";

export default function OddsPage() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    // Load and parse the CSV
    const fetchData = async () => {
      const response = await fetch("/2024ElectionCSV.csv"); // Update with the correct path
      const csvText = await response.text();
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setCsvData(result.data); // Set the parsed CSV data
        },
      });
    };

    fetchData();
  }, []);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Odds</h1>
      <p>Explore the election odds here.</p>
      <LineChart csvData={csvData} />
    </div>
  );
}
