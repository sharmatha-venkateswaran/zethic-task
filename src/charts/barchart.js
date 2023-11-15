import React from "react";
import { Chart as ChartJs, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import UserList from "../lists/userlist";

function BarChart({ combinedArray }) {
  ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
  );

  const countryCounts = combinedArray.reduce((counts, { person }) => {
    counts[person.country] = (counts[person.country] || 0) + 1;
    return counts;
  }, {});

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
        label: "No. of Users",
        data: count,
        backgroundColor: "rgba(255, 99, 132, 0.6)", 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div style={{ display: "flex",flexDirection:"row" }}>
      <div>
      <UserList combinedArray={combinedArray} />
      </div>
      <div>
      <p style={{ fontWeight: 'bold' }}>Bar Chart for No. of Users vs Country:</p>
      <div style={{ padding: 40 }}>
        <Bar data={bardata} options={options} />
      </div>
      </div>
    </div>
  );
}

export default BarChart;
