import React, { useState } from "react";
import "../App.css";
import { List } from "react-virtualized";
import "react-virtualized/styles.css";

function CarList({ combinedArray, carsArray }) {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const CarRow = ({ index, style }) => {
    const car = carsArray[index];
    const isSelected = selectedCar && car.name === selectedCar.name;

    const rowStyle = {
      ...style,
      backgroundColor: isSelected ? "#fffff" : "#fc035a",
      color: isSelected ? "#ffffff" : "#000000",
      cursor: "pointer",
    };

    return (
      <div style={rowStyle} onClick={() => handleCarClick(car)}>
        {`Car: ${car.name} - Model: ${car.model} - Manufacturer: ${car.maker}`}
      </div>
    );
  };

  const UsersByCar = () => {
    if (!selectedCar) {
      return <p>No car selected</p>;
    }

    const users = combinedArray.filter(({ vehicle }) => {
      return vehicle.maker === selectedCar.maker;
    });

    return (
      <div>
        <p>Users with {selectedCar.maker}:</p>
        <ul>
          {users.map(({ person }) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "300px",
          backgroundColor: "#fc035a",
          padding: "20px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Users List with Details :</p>
        <div
          style={{
            overflow: "auto",
            height: "400px",
            borderRadius: "15px",
            border: "1px solid #ccc",
          }}
        >
          <List
            width={300}
            height={400}
            rowCount={100000}
            rowHeight={50}
            rowRenderer={CarRow}
            style={{ padding: "10px" }}
          />
        </div>
      </div>
      <div style={{ flex: 1, paddingLeft: "5px" }}>
        {selectedCar != null && (
          <List
            width={400}
            height={400}
            rowCount={100000}
            rowHeight={50}
            rowRenderer={UsersByCar}
            style={{ padding: "10px" }}
          />
        )}
      </div>
    </div>
  );
}

export default CarList;
