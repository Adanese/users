import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    website: "",
  });

  const onInputChange = (e) => {
    console.log(e.target.id);
    //Understand this
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:3001/users/" +id, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users/" + id);
    // same as 
    // const result = await axios.get("http://localhost:3001/users/${id}");
    console.log(result);
    setUser(result.data);
  };

  return (
    <div class="mx-auto">
      <h1>Edit User</h1>
      <div className="w-50 p-3">
        <form onSubmit={onSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Enter name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.name}
              name="name"
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Enter User Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.userName}
              name="userName"
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Enter email-address</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.email}
              name="email"
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Enter Phone Number</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.phone}
              name="phone"
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Enter Website Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.website}
              name="website"
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>

          <button type="submit" class="btn btn-primary">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
