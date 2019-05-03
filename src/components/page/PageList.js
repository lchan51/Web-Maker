import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageList extends Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-light bg-light fixed-top">
          <Link to="/website/WebsiteList">
            <i class="fas fa-chevron-left" />
          </Link>
          <span class="navbar-brand mb-0 h1">Pages</span>
          <Link to="/PageNew">
            <i class="fas fa-plus" />
          </Link>
        </nav>

        <div class="container-left">
          <ul class="list">
            <ul Class="list-group">
              <li class="list-group-item">
                <Link to="/widget/WidgetList">Blog Post</Link>
                <Link class="float-right" to="page/PageEdit">
                  <i class="fas fa-cog" />
                </Link>
              </li>

              <li class="list-group-item">
                <Link to="./widget/WidgetList">Blogs</Link>
                <Link class="float-right" to="page/PageEdit">
                  <i class="fas fa-cog" />
                </Link>
              </li>

              <li class="list-group-item">
                <Link to="./widget/WidgetList">Home</Link>
                <Link class="float-right" to="page/PageEdit">
                  <i class="fas fa-cog" />
                </Link>
              </li>

              <li class="list-group-item">
                <Link to="./widget/WidgetList">About</Link>
                <Link class="float-right" to="page/PageEdit">
                  <i class="fas fa-cog" />
                </Link>
              </li>

              <li class="list-group-item">
                <Link to="./widget/WidgetList">Contact Us</Link>
                <Link class="float-right" to="page/PageEdit">
                  <i class="fas fa-cog" />
                </Link>
              </li>
            </ul>
          </ul>
        </div>

        <nav class="navbar navbar-light bg-light fixed-bottom" />
        <div class="full-width">
          <Link class="float-right" to="./user/Profile">
            <i class="fas fa-user" />
          </Link>
        </div>
      </div>
    );
  }
}
