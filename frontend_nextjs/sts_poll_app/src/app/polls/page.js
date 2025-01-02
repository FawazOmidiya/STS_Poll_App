"use client";
import React, { useState } from "react";
import { Combobox } from "@/components/Combobox";
import { BarChartComponent } from "@/components/BarChart";

function Polls() {
  const listOfStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const [selectedState, setSelectedState] = useState("");

  const handleStateSelection = (state) => {
    setSelectedState(state);
    // Fetch polling data or update the chart here
    console.log(`Selected state: ${state}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Your State</h1>
      <Combobox list={listOfStates} onSelect={handleStateSelection} />
      {selectedState && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">
            Polling Results for {selectedState}
            <div className="h-3/4 w-3/4 m-auto">
              <BarChartComponent stateName={selectedState} />
            </div>
          </h2>
          {/* Render your chart or polling data here */}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listOfStates.map((state) => (
          <div
            key={state}
            className="p-4 rounded-lg bg-white dark:bg-gray-800 h-fit w-full"
          >
            {/* Pass stateName to the BarChartComponent */}
            <BarChartComponent stateName={state} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Polls;
