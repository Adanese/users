import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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

// Delete User
//User delete
const deleteUser = async id => {
await axios.delete("http://localhost:3001/users/" +id);
loadUsers();
}

 
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
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
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
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                <Link to={"/users/" + user.id}>
                  <button type="button" class="btn btn-success mr-2">
                    View
                  </button>
                </Link>
                <Link to={"/users/edit/" + user.id}>
                  <button type="button" class="btn btn-secondary mr-2">
                    Edit
                  </button>
                </Link>
                <Link>
                  <button
                    type="button"
                    class="btn btn-danger mr-2"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
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
