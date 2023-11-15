import React, { useState } from "react";
import "./App.css";
import BarChart from "./charts/barchart";
import PieAgeChart from "./charts/pieagechart";
import PieModelChart from "./charts/piemodelchart";
import UserList from "./lists/userlist";
import CarList from "./lists/carlist";
import NavBar from "./navigation/navbar";
import Data from "./data/data";

function App() {
  const { combinedArray, carsArray } = Data();
  const [activeChart, setActiveChart] = useState("bar");

  const handleButtonClick = (chartType) => {
    setActiveChart(chartType);
  };

  return (
    <div>
      <NavBar />
      <div className="chart-buttons">
        <button
          className={activeChart === "bar" ? "active" : ""}
          onClick={() => handleButtonClick("bar")}
        >
          Bar Chart
        </button>
        <button
          className={activeChart === "pieAge" ? "active" : ""}
          onClick={() => handleButtonClick("pieAge")}
        >
          Pie Age Chart
        </button>
        <button
          className={activeChart === "pieModel" ? "active" : ""}
          onClick={() => handleButtonClick("pieModel")}
        >
          Pie Model Chart
        </button>
        <button
          className={activeChart === "userlist" ? "active" : ""}
          onClick={() => handleButtonClick("userlist")}
        >
          User List
        </button>
        <button
          className={activeChart === "carlist" ? "active" : ""}
          onClick={() => handleButtonClick("carlist")}
        >
          Car List
        </button>
      </div>
      <div>
        {activeChart === "bar" && <BarChart combinedArray={combinedArray} />}
        {activeChart === "pieAge" && (
          <PieAgeChart combinedArray={combinedArray} />
        )}
        {activeChart === "pieModel" && (
          <PieModelChart combinedArray={combinedArray} />
        )}
        {activeChart === "userlist" && (
          <UserList combinedArray={combinedArray} />
        )}
        {activeChart === "carlist" && (
          <CarList combinedArray={combinedArray} carsArray={carsArray} />
        )}
      </div>
    </div>
  );
}

export default App;
