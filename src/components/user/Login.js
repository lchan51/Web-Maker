import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    this.login(user);
  };

  login = user => {
    for (let item of this.props.users) {
      if (item.username === user.username && item.password === user.password) {
        this.props.history.push("/user/" + item._id);
        return;
      }
    }
    alert("Your username or password doesn't match or records");
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>Login</h1>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              placeholder="Enter your username here"
              className="form-control"
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter your password here"
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
        </form>
        <button className="btn btn-success btn-block">Login</button>
        <button className="btn btn-primary btn-block" to="/Register">
          Register
        </button>
      </div>
    );
  }
}
