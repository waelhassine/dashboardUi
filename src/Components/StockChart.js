import React from "react";
import Chart from "react-apexcharts";

const series = {
    series:  [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }]
    
};
const options = {
    chart: {
      height: 250,
      type: 'area',
      stacked: false,
      sparkline: {
        enabled: true
      },
      toolbar: {
          show: false
      },
      zoom: {
          enabled: false
      }
    },
    horizontal: false,
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    legend: {
        show: false
    },
    
   
    
};

const  Charts = () => {
  return (
    <div >
     <Chart
              options={options}
              series={series.series}
              type="area" height={250}
            />
          </div>

    

  );
}
export default Charts;