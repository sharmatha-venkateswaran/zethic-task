import React from "react";
import "../App.css";
import NavBar from "../navigation/navbar";

function PackagesUsed() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: 20 }}>
        <p style={{ fontWeight: "bold" }}>
          The below are the packages used in this website:
        </p>
        <ul>
          <li>
            <a href="https://www.npmjs.com/package/@faker-js/faker"> Faker</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-router-dom">
              Router.Dom
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-chartjs-2">
              React Chart.js
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-virtualized">
              React Virtualized
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default PackagesUsed;
