import React, { useState } from "react";
import "../App.css";
import { List } from "react-virtualized";
import "react-virtualized/styles.css";

function UserList({ combinedArray }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const UserRow = ({ index, style }) => {
    const user = combinedArray[index].person;
    const isSelected = selectedUser && selectedUser.id === user.id;
    const rowStyle = {
      ...style,
      backgroundColor: isSelected ? "#ffff" : "transparent",
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
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "300px",
          backgroundColor: "#fc035a",
          padding: "20px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Users List with Details :</p>
        <List
          width={300}
          height={400}
          rowCount={combinedArray.length}
          rowHeight={50}
          rowRenderer={UserRow}
          style={{ padding: "10px" }}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        {selectedUser != null && <UserDetails />}
      </div>
    </div>
  );
}

export default UserList;
