import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Alan Fryer",
      image:
        "https://images.unsplash.com/photo-1623713353509-dcb1957d3715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
