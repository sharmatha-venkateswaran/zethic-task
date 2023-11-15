import React, { useState } from "react";
import "../App.css";
import { List } from "react-virtualized";
import "react-virtualized/styles.css";

function UserList(combinedArray) {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const UserRow = ({ index, style }) => {
    const user = combinedArray.combinedArray[index].person;
    const isSelected = selectedUser && selectedUser.id === user.id;
    const rowStyle = {
      ...style,
      backgroundColor: isSelected ? "#4CAF50" : "transparent",
      cursor: "pointer",
    };

    return (
      <div style={rowStyle} onClick={() => handleUserClick(user)}>
        {`Name: ${user.name} - Age: ${user.age}`}
      </div>
    );
  };

  const UserDetails = () => {
    if (!selectedUser) {
      return <p>No user selected</p>;
    }

    const user = selectedUser;
    return (
      <div>
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Id: {user.id}</li>
          <li>Address: {user.address}</li>
          <li>Country: {user.country}</li>
          <li>Job: {user.occupation}</li>
        </ul>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: "#fc035a" }}>
      <p style={{ fontWeight: "bold" }}>Users List with Details :</p>
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
            <div>
              <List
                width={800}
                height={400}
                rowCount={100000}
                rowHeight={50}
                rowRenderer={UserRow}
                style={{ padding: "10px" }}
              />
            </div>
          </div>
          <div style={{ paddingLeft: "5px" }}>
            {selectedUser != null && <UserDetails />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
