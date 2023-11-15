import React, { useState } from "react";
import "../App.css";

const NavBar = () => {
  const [activeChart, setActiveChart] = useState("bar");

  const handleItemClick = (chart) => {
    setActiveChart(chart);
  };

  return (
    <nav className="top-nav">
      <ul>
        <li
          className={activeChart === "bar" ? "active-bar" : ""}
          onClick={() => handleItemClick("bar")}
        >
          <a href="/">Home</a>
        </li>
        <li
          className={activeChart === "pieAge" ? "active-pie-age" : ""}
          onClick={() => handleItemClick("pieAge")}
        >
          <a href="/packagesused">Packages Used</a>
        </li>
        <li
          className={activeChart === "pieModel" ? "active-pie-model" : ""}
          onClick={() => handleItemClick("pieModel")}
        >
          <a href="/references">References</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
