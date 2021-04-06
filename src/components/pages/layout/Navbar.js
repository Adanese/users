import React from "react";

//dependencies
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <br />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          React User
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                to="/about"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                className="nav-link"
                exact
                to="/contact"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit" to="/users/add"
            >
              Add User
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
