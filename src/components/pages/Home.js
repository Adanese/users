import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    console.log(result);
    setUser(result.data);
  };

  return (
    <div>
      <h1>inside Home</h1>
      {/* Printing the user data in table */}
      <table className="table">
        <thead className="thread-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link>
                  <button type="button" class="btn btn-success mr-2">
                    View
                  </button>
                </Link>
                <Link>
                  <button type="button" class="btn btn-secondary mr-2">
                    Edit
                  </button>
                </Link>
                <Link>
                  <button type="button" class="btn btn-danger mr-2">
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
