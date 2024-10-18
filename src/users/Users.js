import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      {users.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <Link to={`/user/${user.id}`} key={user.id} data-testid="user-item">
              {user.name}
            </Link>
          </div>
        ))}
    </>
  );
};

export default Users;
