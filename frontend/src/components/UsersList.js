import React from "react";
import { Card } from "react-bootstrap";

const usersList = ({ user }) => {
  return (
    <Card
      style={{
        borderRadius: "10px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Card.Header>
        <strong>UserID:</strong>
        {user._id}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <strong>First Name:</strong>
          {user.first_name}{" "}
        </Card.Title>
        <Card.Title>
          <strong>Last Name:</strong>
          {user.last_name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default usersList;
