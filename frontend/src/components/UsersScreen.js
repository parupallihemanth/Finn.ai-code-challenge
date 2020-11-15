import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import UsersList from "./UsersList";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    const usersList = async (req, res) => {
      const response = await axios.get("http://localhost:4001/api/users");
      setUsers(response.data.data);
    };

    usersList();
  }, []);
  return (
    <div>
      <Row>
        {users.map((user, index) => (
          <Col key={user._id} sm={12} md={6} lg={3}>
            <UsersList user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UsersScreen;
