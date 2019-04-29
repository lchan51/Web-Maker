import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
          <span className="navbar-brand mb-0 h1">Profile</span>
          <Link href="profile.html">
            <i className="fas fa-check" />
          </Link>
        </nav>

        <div className="container">
          <form>
            <div className="form-group">
              <label for="username">Username</label>
              <input
                placeholder="Enter or edit your username here"
                className="form-control"
                type="text"
                id="username"
                name="usename"
              />
            </div>

            <div className="form-group">
              <label for="email">Email</label>
              <input
                placeholder="Enter or edit your email here"
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
            </div>

            <div className="form-group">
              <label for="firstName">First Name</label>
              <input
                placeholder="Enter or edit your first name"
                type="firstName"
                className="form-control"
                id="firstName"
                name="firstName"
              />
            </div>

            <div className="form-group">
              <label for="lastName">Last Name</label>
              <input
                placeholder="Enter or edit your last name"
                type="lastName"
                className="form-control"
                id="lastName"
                name="lastName"
              />
            </div>

            <a className="btn btn-primary btn-block" href="website.html">
              Website
            </a>
            <a className="btn btn-danger btn-block" href=".html">
              Logout
            </a>
          </form>
        </div>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
          <Link href="profile.html">
            <i className="fas fa-user-primary" />
          </Link>
        </nav>
      </div>
    );
  }
}
