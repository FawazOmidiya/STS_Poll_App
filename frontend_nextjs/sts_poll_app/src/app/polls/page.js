import React from "react";
import BarGraph from "@/components/BarGraph";
import { BarChartComponent } from "@/components/BarChart";

function Polls() {
  return (
    <div>
      <h1>Polls</h1>
      <BarChartComponent stateName={"Alaska"} />
    </div>
  );
}

export default Polls;
