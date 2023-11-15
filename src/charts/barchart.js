import React from "react";
import "../App.css";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "react-virtualized/styles.css";
function BarChart(combinedArray) {
  ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
  );
  const countryCounts = combinedArray.combinedArray.reduce(
    (counts, { person }) => {
      counts[person.country] = (counts[person.country] || 0) + 1;
      return counts;
    },
    {}
  );
  const chartData = Object.entries(countryCounts).map(([country, count]) => ({
    country,
    count,
  }));
  const count = chartData.map(({ count }) => count);
  const country = chartData.map(({ country }) => country);
  const bardata = {
    labels: country,
    datasets: [
      {
        label: "no.of.users",
        data: count,
        backgroundColor: "red",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
  };
  return (
    <div>
      <p style={{fontWeight:'bold'}}>Barchart for No.of.Users vs Country :</p>
      <div style={{padding:40}}>
        <Bar data={bardata} options={options}></Bar>
      </div>
    </div>
  );
}
export default BarChart;
