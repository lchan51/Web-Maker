import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Profile extends Component {
state = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    oldUsername:""
  };
async componentDidMount() {
    const uid = this.props.match.params.uid;
    const res = await axios.get (`/api/user/${uid}`);
    if(res.data) {
      this.showUser(res.data);
    } else {
      alert("No user is found with given id");
    }
  }

showUser = user => {
    const { username, password, email, firstName, lastName} = user;
    this.setState({
      username,
      password,
      email,
      firstName,
      lastName,
      oldUsername: username
    });
  };

onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

onSubmit = async e => {
    e.preventDefault();
    const { username, password, email, firstName, lastName, oldUsername } = this.state;
    if (username !==oldUsername){ 
    const res = await axios.get(`/api/user?username=${username}`);
    if (res.data) {alert("Username is taken, please try another one ");
    return
    }
  }
    const newUser = {
      _id: this.props.match.params.uid,
      username,
      password,
      email,
      firstName,
      lastName
    };
    await axios.put("/api/user", newUser);
    alert ("Your update has been completed")
}

  render() {
    const { username, email, firstName, lastName } = this.state;

    return (
        <div>
          
        <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-brand mb-0 h1">Profile</span>
        <button className="btn" form="profileForm" href="profile.html">
        <i className="color-white fas fa-check"/></button>
        </nav>

        <div className="container">
        <form id="profileForm" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
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
              type="lastName"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.onChange}
            />
          </div>
        </form>
    
        <Link className="btn btn-primary btn-block"
        to={`/user/${this.props.match.params.uid}/website`}>
        Websites
        </Link>

        <Link className="btn btn-danger btn-block" 
        to="/login/">
        Logout 
        </Link>
        </div>

        
          </div>
    )
  }
}
