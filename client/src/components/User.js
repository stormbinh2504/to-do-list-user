import React, { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import Table from "react-bootstrap/Table";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

const User = () => {
  const value = useContext(DataContext);

  const [user] = value.user;

  console.log("usernay", user);

  return (
    <>
      <Table style={{ width: "100%" }} striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        {user.map((item, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>
                <EditUser
                  id_user={item._id}
                  username={item.username}
                  email={item.email}
                  phone={item.phone}
                  address={item.address}
                ></EditUser>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <AddUser></AddUser>
    </>
  );
};

export default User;
