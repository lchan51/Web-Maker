import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";
import axios from "axios"

export default class Register extends Component {
  state = {
    username: "",
    password: "",
    password2: ""

  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password, password2 } = this.state;
    this.register(username, password, password2);
  };

  register (username, password, password2) {
    if (password !== password2) {
      alert("The passwords do not match");
      return;
    }

    for (let user of this.props.users) {
      if (user.username === username) {
        alert("Username is taken, please try another one ");
        return;
      }
    }
    const newUser = {
      _id: uuid(),
      username,
      password,
      email: "",
      firstName: "",
      lastName: ""
    };
    this.props.addUser(newUser);
    this.props.history.push(`/user/${newUser._id}`);
  }

  render() {
    const { username, password, password2 } = this.state;

    return (
      <div className="container">
        <h1>Register</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              placeholder="username"
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              placeholder="password"
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password2">Verify Password</label>
            <input
              placeholder="verify password"
              type="text"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              onChange={this.onChange}
            />
          </div>
        </form>

        <button className="btn btn-primary btn-block">Register </button>
        <Link className="btn btn-danger btn-block" to="/login/"> Cancel </Link>
      </div>
    );
  }
}
