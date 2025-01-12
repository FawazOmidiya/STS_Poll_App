"use client";

import React, { useState } from "react";
import { Combobox } from "@/components/Combobox";
import { BarChartComponent } from "@/components/BarChart";
import GoogleMap from "@/components/GoogleMap";
import GoogleMapsScript from "@/lib/GoogleMapsScript";
import DialogComponent from "@/components/DialogComponent";
import { Toggle } from "@/components/ui/toggle";
import { PieChartComponent } from "@/components/PieChart";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (state) => {
    setSelectedState(state);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedState(null);
  };

  const getLocationForMap = () => {
    return customLocation.trim() ? customLocation : selectedState;
  };

  return (
    <div className="p-4 bg-black">
      <GoogleMapsScript /> {/* Ensure GoogleMapsScript is imported */}
      <h1 className="text-2xl font-bold mb-4">Select Your State</h1>
      <Combobox
        list={listOfStates}
        onSelect={openDialog} // Open dialog on combobox selection
      />
      <Toggle
        label="Custom Location"
        onChange={(event) => setCustomLocation(event.target.value)}
      >
        Pie Chart
      </Toggle>
      {/* Reusable Dialog */}
      <DialogComponent
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title={`${selectedState} Details`}
      >
        <div className="mt-6 flex-row">
          <h2 className="text-xl font-semibold">
            Polling Results for {selectedState}
          </h2>
          <div className="grid grid-cols-2 h-3/4 gap-3 m-auto mt-5">
            <BarChartComponent stateName={selectedState} />
            <PieChartComponent stateName={selectedState} />
          </div>
          <GoogleMap location={selectedState} />
        </div>
      </DialogComponent>
      {/* State Bar Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-inherit">
        {listOfStates.map((state) => (
          <div
            key={state}
            className="p-4 rounded-lg h-fit w-full cursor-pointer"
            onClick={() => openDialog(state)} // Open dialog on bar chart click
          >
            <BarChartComponent stateName={state} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Polls;
