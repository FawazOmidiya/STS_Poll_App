// "use client";
// import React, { useState } from "react";
// import { Combobox } from "@/components/Combobox";
// import { BarChartComponent } from "@/components/BarChart";
// import GoogleMap from "@/components/GoogleMap";
// import GoogleMapsScript from "@/lib/GoogleMapsScript";
// import DetailPage from "@/components/DetailPage";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// function Polls() {
//   const listOfStates = [
//     "Alabama",
//     "Alaska",
//     "Arizona",
//     "Arkansas",
//     "California",
//     "Colorado",
//     "Connecticut",
//     "Delaware",
//     "Florida",
//     "Georgia",
//     "Hawaii",
//     "Idaho",
//     "Illinois",
//     "Indiana",
//     "Iowa",
//     "Kansas",
//     "Kentucky",
//     "Louisiana",
//     "Maine",
//     "Maryland",
//     "Massachusetts",
//     "Michigan",
//     "Minnesota",
//     "Mississippi",
//     "Missouri",
//     "Montana",
//     "Nebraska",
//     "Nevada",
//     "New Hampshire",
//     "New Jersey",
//     "New Mexico",
//     "New York",
//     "North Carolina",
//     "North Dakota",
//     "Ohio",
//     "Oklahoma",
//     "Oregon",
//     "Pennsylvania",
//     "Rhode Island",
//     "South Carolina",
//     "South Dakota",
//     "Tennessee",
//     "Texas",
//     "Utah",
//     "Vermont",
//     "Virginia",
//     "Washington",
//     "West Virginia",
//     "Wisconsin",
//     "Wyoming",
//   ];

//   const [selectedState, setSelectedState] = useState("");
//   const [isDialogOpen, setIsDialogOpen] = useState(false); // Tracks dialog visibility

//   const handleStateSelection = (state) => {
//     setSelectedState(state);
//     setIsDialogOpen(true); // Open the dialog
//   };

//   const closeDialog = () => {
//     setIsDialogOpen(false); // Close the dialog
//     setSelectedState(null); // Clear the selected state
//   };

//   return (
//     <div className="p-4 bg-slate-500">
//       <GoogleMapsScript />{" "}
//       {/* Ensure GoogleMapsScript is imported and included */}
//       <h1 className="text-2xl font-bold mb-4">Select Your State</h1>
//       <Combobox list={listOfStates} onSelect={handleStateSelection} />
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle className="text-xl font-bold">
//               {selectedState} Details
//             </DialogTitle>
//           </DialogHeader>
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold">
//               Polling Results for {selectedState}
//             </h2>
//             <GoogleMap location={selectedState} />
//             <div className="h-3/4 w-3/4 m-auto">
//               <BarChartComponent stateName={selectedState} />
//             </div>
//             {/* Render your chart or polling data here */}
//           </div>
//         </DialogContent>
//       </Dialog>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-slate-500">
//         {listOfStates.map((state) => (
//           <div key={state} className="p-4 rounded-lg h-fit w-full">
//             {/* Pass stateName to the BarChartComponent */}
//             <BarChartComponent stateName={state} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Polls;
"use client";

import React, { useState } from "react";
import { Combobox } from "@/components/Combobox";
import { BarChartComponent } from "@/components/BarChart";
import GoogleMap from "@/components/GoogleMap";
import GoogleMapsScript from "@/lib/GoogleMapsScript";
import DialogComponent from "@/components/DialogComponent";

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

  return (
    <div className="p-4 bg-slate-500">
      <GoogleMapsScript /> {/* Ensure GoogleMapsScript is imported */}
      <h1 className="text-2xl font-bold mb-4">Select Your State</h1>
      <Combobox
        list={listOfStates}
        onSelect={openDialog} // Open dialog on combobox selection
      />
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
          <GoogleMap location={selectedState} />
          <div className="grid grid-cols-2 h-3/4 gap-3 m-auto mt-5">
            <BarChartComponent stateName={selectedState} />
            <BarChartComponent stateName={selectedState} />
          </div>
        </div>
      </DialogComponent>
      {/* State Bar Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-slate-500">
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
