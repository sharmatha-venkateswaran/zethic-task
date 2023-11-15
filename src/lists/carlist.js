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
      backgroundColor: isSelected ? "#4CAF50" : "#ffffff",
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
    <>
      <div style={{ backgroundColor: "#fc035a" }}>
        <p style={{ fontWeight: "bold" }}>
          Users List Based on the Car Model :
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",

            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
                backgroundColor: "#ffff",
                overflow: "auto",
                height: "400px",
                borderRadius: "15px",
                border: "1px solid #ccc",
              }}
            >
              <List
                width={800}
                height={400}
                rowCount={carsArray.length}
                rowHeight={50}
                rowRenderer={CarRow}
                style={{ padding: "10px" }}
              />
            </div>
            <div style={{ paddingLeft: "15px" }}>
              <UsersByCar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarList;
