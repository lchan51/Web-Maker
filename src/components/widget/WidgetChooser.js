import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WidgetChooser extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light fixed top">
          <Link to="/WidgetList">
            <i class="float-left fas fa-chevron-left" />
          </Link>
          <span class="navbar-brand mb-01 h1>">Choose Widget</span>
          <span />
        </nav>

        <div class="container">
          <ul class="list-group">
            <li class="list-group-item">
              <Link to="/WidgetHeading">Header</Link>
            </li>

            <li class="list-group-item">
              <Link to="#">Label</Link>
            </li>

            <li class="list-group-item">
              <Link to="#">HTML</Link>
            </li>

            <li class="list-group-item">
              <Link to="#">Text Input</Link>
            </li>

            <li class="list-group-item">
              <Link to="#">Link</Link>
            </li>

            <li class="list-group-item">
              <Link to="#">Button</Link>
            </li>

            <li class="list-group-item">
              <Link to="/WidgetImage">Image</Link>
            </li>

            <li class="list-group-item">
              <Link to="/WidgetYouTube">YouTube</Link>
            </li>

            <li class="list-group-item">
              <Link to="#">Data Table</Link>
            </li>

            <li class="list-group-item">
              <Link to="#">Repeater</Link>
            </li>
          </ul>
        </div>

        <nav class="navbar navbar-light bg-light fixed-bottom">
          <div class="full-width">
            <Link class="float-right" to="./user/Profile">
              <i class="fas fa-user text-primary" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
