import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id} data-testid="user-item">
              {user.name}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Users;
