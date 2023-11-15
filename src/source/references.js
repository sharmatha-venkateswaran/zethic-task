import React from "react";
import "../App.css";
import NavBar from "../navigation/navbar";

function References() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: 20 }}>
        <p style={{ fontWeight: "bold" }}>
          The below are the references refered for this website:
        </p>
        <ul>
          <li>
            <a href="https://github.com/chartjs/Chart.js">Charts</a>
          </li>
          <li>
            <a href="https://github.com/bvaughn/react-virtualized">
              React Virtualized List
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default References;
