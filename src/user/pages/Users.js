import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Alan Fryer",
      image:
        "https://cdn.billomat.com/wp-content/uploads/2019/09/freelance-web-developer-danial1-ricaros-FCHlYvR5gJI-unsplash.jpg",
      places: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
