import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <Link to={`/albums/${user.id}`}>
              <button>Album</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
