import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: ""
  };
  componentDidMount() {
    const uid = this.props.match.params.uid;
    for (let user of this.props.users) {
      if (user._id === uid) {
        this.showUser(user);
        return;
      }
    }
    alert("No user is found with given id");
  }

  showUser = user => {
    const { username, password, email, firstName, lastName } = user;
    this.setState({
      username,
      password,
      email,
      firstName,
      lastName
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password, email, firstName, lastName } = this.state;
    const newUser = {
      _id: this.props.match.params.uid,
      username,
      password,
      email,
      firstName,
      lastName
    };
    this.props.updateUser(newUser);
  };

  render() {
    const { username, email, firstName, lastName } = this.state;

    return (
        <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-brand mb-0 h1">Profile</span>
        <button className="btn" form="profileForm" href="profile.html">
        <i className="fas fa-check"/></button>
        </nav>

        <div className="container">
        <form id="profileForm" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              placeholder="Enter or edit your username here"
              className="form-control"
              type="text"
              id="username"
              value={username}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter or edit your email here"
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder="Enter or edit your first name"
              type="firstName"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder="Enter or edit your last name"
              type="lastName"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.onChange}
            />
          </div>
          
        </form>
        </div>
        

        <Link className="btn btn-primary btn-block"
        to={`/user/${this.props.match.params.uid}/website`}>
        Websites
        </Link>

        

        <Link className="btn btn-danger btn-block" 
        to="/login/">
        Logout 
        </Link>

          <nav className="navbar navbar-dark bg-primary fixed-bottom" to="./user/:uid">
          <i className="fas fa-user-primary" />
          </nav>
          </div>
    );
  }
}
