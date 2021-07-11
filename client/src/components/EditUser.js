import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";

const EditUser = (props) => {
  const { deleteUser, updateUser } = useContext(DataContext);

  const [showEdit, setShowEdit] = useState(false);

  const [updatedUser, setUpdatedUser] = useState({
    username: props.username,
    email: props.email,
    phone: props.phone,
    address: props.address,
  });

  const { username, email, phone, address } = updatedUser;

  const onChangeUpdatedUserForm = (event) =>
    setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });

  const HandeldeleteUser = async () => {
    await deleteUser(props.id_user);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await updateUser(props.id_user, updatedUser);
    setShowEdit(false);
  };

  return (
    <>
      <Button variant="warning" onClick={() => setShowEdit(true)}>
        Sửa
      </Button>
      <Button onClick={HandeldeleteUser}>Xóa</Button>
      <Modal show={showEdit} onHide={() => setShowEdit(false)}>
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
              onChange={onChangeUpdatedUserForm}
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
              onChange={onChangeUpdatedUserForm}
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
              onChange={onChangeUpdatedUserForm}
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
              onChange={onChangeUpdatedUserForm}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onSubmit}>
            Sửa user
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditUser;
