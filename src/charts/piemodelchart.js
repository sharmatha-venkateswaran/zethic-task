import React, { useState } from "react";
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
import { Pie } from "react-chartjs-2";
import "react-virtualized/styles.css";
function PieModelChart(combinedArray) {
  ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ArcElement
  );
  const ageRanges = [
    { label: "1-100", start: 1, end: 100 },
    { label: "20-25", start: 20, end: 25 },
    { label: "25-30", start: 25, end: 30 },
    { label: "30-35", start: 30, end: 35 },
    { label: "35-40", start: 35, end: 40 },
    { label: "40-45", start: 40, end: 45 },
    { label: "45-50", start: 45, end: 50 },
    { label: "50-55", start: 50, end: 55 },
    { label: "55-60", start: 55, end: 60 },
    { label: "60-65", start: 60, end: 65 },
    { label: "65-70", start: 65, end: 70 },
    { label: "70-75", start: 70, end: 75 },
    { label: "75-80", start: 75, end: 80 },
  ];
  const [selectedAgeRange, setSelectedAgeRange] = useState(ageRanges[0]);
  const filteredCombinedArray = combinedArray.combinedArray.filter(
    ({ person }) => {
      const personAge = person.age;
      return (
        personAge >= selectedAgeRange.start &&
        personAge <= selectedAgeRange.end
      );
    }
  );
  const carModelsByManufacturer = filteredCombinedArray.reduce(
    (groupedCars, { vehicle, person }) => {
      const { maker, model } = vehicle;
      const { age } = person;
      const existingManufacturer = groupedCars.find(
        (item) => item.manufacturer === maker
      );

      if (existingManufacturer) {
        const existingModel = existingManufacturer.models.find(
          (item) => item.model === model
        );
        if (existingModel) {
          existingModel.count++;
        } else {
          existingManufacturer.models.push({ model, count: 1, age });
        }
      } else {
        groupedCars.push({
          manufacturer: maker,
          models: [{ model, count: 1, age }],
        });
      }

      return groupedCars;
    },
    []
  );
  const pieDataArray = carModelsByManufacturer.map((manufacturer) => {
    const models = manufacturer.models.map((item) => item.model);
    const counts = manufacturer.models.map((item) => item.count);
    return {
      labels: models,
      datasets: [
        {
          label: "count",
          data: counts,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  });
  const manufacturersArray = carModelsByManufacturer.map(
    (manufacturer) => manufacturer.manufacturer
  );
  const chartOptions = {
    responsive: true,
  };
  return (
    <div>
      <p style={{fontWeight:'bold'}}>Piechart for No.of.Cars vs No.of.Ages :</p>
      <div>

        <label>Select Age Range:</label>
        <select
          value={`${selectedAgeRange.start}-${selectedAgeRange.end}`}
          onChange={(e) => {
            const [start, end] = e.target.value.split("-").map(Number);
            setSelectedAgeRange({ start, end });
          }}
        >
          {ageRanges.map((range) => (
            <option
              key={`${range.start}-${range.end}`}
              value={`${range.start}-${range.end}`}
            >
              {range.label}
            </option>
          ))}
        </select>
      </div>
      {}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {pieDataArray.map(
          (piedata, index) =>
            index % 2 === 0 && (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <div style={{ width: 500, height: 500, marginRight: 16 }}>
                  <div style={{ fontWeight: "bold" }}>
                    {manufacturersArray[index]}
                  </div>
                  <Pie data={piedata} options={chartOptions} />
                </div>

                {index + 1 < pieDataArray.length && (
                  <div style={{ width: 500, height: 500 }}>
                    <div style={{ fontWeight: "bold" }}>
                      {manufacturersArray[index + 1]}
                    </div>
                    <Pie
                      data={pieDataArray[index + 1]}
                      options={chartOptions}
                    />
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
export default PieModelChart;
