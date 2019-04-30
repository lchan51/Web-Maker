import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
      <div className="container">
        <h1>Register</h1>

        <form>
          <div className="form-group">
          <label htmlFor="username">Username</label>
            <input
              placeholder="username"
              className="form-control"
              type="username"
              id="username"
              name="usename"
            />
          </div>

          <div className="form-group">
            <input
              placeholder="password"
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>

          <div className="form-group">
            <input
              placeholder="verify password"
              type="password"
              className="form-control"
              id="verifypassword"
              name="verifypassword"
            />
          </div>
        </form>

        <Link className="btn btn-primary btn-block" to="/user/123">
          Register
        </Link>
        <Link className="btn btn-danger btn-block" to="/login">
          Cancel
        </Link>
      </div>
    );
  }
}
