import React from "react";
// import { Data } from "./Data";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <h1>Chart place</h1>
<Bar
  data={{
    labels: ["red", "green", "orange", "yellow"]
  }}
/>
    </div>
  );
};

export default BarChart
