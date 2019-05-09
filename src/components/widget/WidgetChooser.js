import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WidgetChooser extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed top">
          <Link to="/WidgetList">
            <i className="float-left fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand mb-01 h1>">Choose Widget</span>
          <span />
        </nav>

        <div className="container">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/WidgetHeading">Header</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Label</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">HTML</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Text Input</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Link</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Button</Link>
            </li>

            <li className="list-group-item">
              <Link to="/WidgetImage">Image</Link>
            </li>

            <li className="list-group-item">
              <Link to="/WidgetYouTube">YouTube</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Data Table</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Repeater</Link>
            </li>
          </ul>
        </div>

        <nav className="navbar navbar-light bg-light fixed-bottom">
          <div className="full-width">
            <Link className="float-right" to="./user/Profile">
              <i className="fas fa-user text-primary" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
