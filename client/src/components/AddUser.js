import React, { useContext, useState } from "react";
// import {Button} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import { DataContext } from "../contexts/DataProvider";

const AddUser = () => {
  const { addUser } = useContext(DataContext);
  const [show, setShow] = useState(false);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  const { username, email, phone, address } = newUser;

  const onChangeNewUserForm = (event) =>
    setNewUser({ ...newUser, [event.target.name]: event.target.value });

  console.log(newUser);

  const onSubmit = async (event) => {
    event.preventDefault();
    await addUser(newUser);
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Thêm User
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              required
              aria-describedby="title-help"
              value={username}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              required
              aria-describedby="title-help"
              value={email}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Phone"
              name="phone"
              required
              aria-describedby="title-help"
              value={phone}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Address"
              name="address"
              required
              aria-describedby="title-help"
              value={address}
              onChange={onChangeNewUserForm}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onSubmit}>
            Thêm user
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddUser;
