import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import UsersList from "./UsersList";
import UserDetailsForm from "./UserDetailsForm";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");

  const saveUserDetails = (e) => {
    e.preventDefault();

    const user = {
      first_name: firstname,
      last_name: secondname,
    };
    axios.post("http://localhost:4001/api/newUser", user).then((res) => {});
  };

  useEffect(() => {
    const usersList = async (req, res) => {
      const response = await axios.get("http://localhost:4001/api/users");
      setUsers(response.data.data);
    };

    usersList();
  }, []);
  const handleClose = () => setButtonClick(false);

  return (
    <div>
      <Row>
        {users.map((user, index) => (
          <Col key={user._id} sm={12} md={6} lg={3}>
            <UsersList user={user} />
          </Col>
        ))}
      </Row>
      <Button
        variant='dark'
        className='my-5'
        onClick={() => setButtonClick(true)}
      >
        Add new user
      </Button>

      <Modal show={buttonClick} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={saveUserDetails}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Enter first name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter first name'
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Enter second name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter second name'
                value={secondname}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              block
              onClick={() => setButtonClick(false)}
            >
              Create User
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UsersScreen;
