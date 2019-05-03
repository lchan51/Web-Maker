import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageEdit extends Component {
  render() {
    return (
      <div>
        <div>
          <nav classNameName="navbar navbar-light bg-light fixed-top">
            <Link to="/PageList">
              {" "}
              <i className="fas fa-chevron-left" />
            </Link>
            <span className="navbar-brand mb-0 h1">Edit Page</span>
            <Link className="float-right pt-2" Link to="/PageList">
              <i className="fas fa-check pt-1" />
            </Link>
          </nav>
        </div>

        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input className="form-control" value="Blog Post" />
          </div>

          <div className="form-group">
            <label for="title">Title</label>
            <input className="form-control" value="Page Title" />
          </div>
        </form>

        <Link className="btn btn-danger btn-block" to="/PageList">
          Delete
        </Link>

        <nav className="navbar navbar-light bg-light fixed-bottom">
          <div className="full-width">
            <Link className="float-right" to="../user/Profile">
              <i className="fas fa-user" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
