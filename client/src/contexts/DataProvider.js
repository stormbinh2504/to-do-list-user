import React, { createContext, useState, useEffect } from "react";
import userAPI from "../api/userAPI";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await userAPI.getAll();
        setUser(res.data.user);
      } catch (err) {
        console.log("Failed to fetch user: ", err);
      }
    };
    fetchData();
  }, []);

  const addUser = async (newUser) => {
    try {
      const res = await userAPI.post(newUser);
      if (res.data.success) {
        return res.data;
      }
    } catch (error) {
      return error.response.data;
    }
  };

  const deleteUser = async (userId) => {
    try {
      const res = await userAPI.delete(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (userId, updatedUser) => {
    try {
      const res = await userAPI.put(userId, updatedUser);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    user: [user, setUser],
    addUser,
    deleteUser,
    updateUser,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
