import React from "react";
import Chart from "react-apexcharts";

const series = {
  series: [
    {
      name: "Column A",
      type: "column",
      data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5],
    },
    {
      name: "Column B",
      type: "column",
      data: [10, 19, 27, 26, 34, 35, 40, 38],
    },
    {
      name: "Line C",
      type: "line",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
  ],
};
const options = {
  chart: {
    height: 300,
    type: "line",
    stacked: false,
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#FFFFFF", "#ccdfff", "#66ca6d"],
  horizontal: false,
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  legend: {
    show: false,
  },
};

const ChartsTwo = () => {
  return (
    <div>
      <Chart
        options={options}
        series={series.series}
        type="area"
        height={250}
      />
    </div>
  );
};
export default ChartsTwo;
