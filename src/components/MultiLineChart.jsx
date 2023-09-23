import React, { Component } from "react";
import Chart from "react-google-charts";
const LineData = [
  ["x", "Last Month", "This Month"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];
const LineChartOptions = {
  hAxis: {
    title: "Week",
  },
  vAxis: {
    title: "Numbers of user",
  },
  series: {
    1: { curveType: "function" },
  },
};
class MultiLineChart extends Component {
  render() {
    return (
      <div className="row flex-column flex-md-row m-2">
        <div className="col-12 mt-2">
          <h2 className="fw-bold" style={{ color: "#132328" }}>
            Analytics
          </h2>
          <Chart
          className="mt-3 shadow"
            style={{ height: "400px" }}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={LineData}
            options={LineChartOptions}
            rootProps={{ "data-testid": "2" }}
          />
        </div>
      </div>
    );
  }
}
export default MultiLineChart;
