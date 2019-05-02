import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class WebsiteList extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
          <Link to="./user/123"><i className="fas fa-chevron-left"/></Link>
          <span className="navbar-brand mb-0 h1"> Websites </span>
          <Link className="float-right" to="/user/123/WebsiteNew"><i className="fas fa-plus" /></Link>
        </nav>

        <section className="container-left">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="./user/:uid/website/:wid/page">Address Book App</Link>
              <Link className="float-right" to="./user/:uid/website/:wid">
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="./user/:uid/website/:wid/page	">Blogger</Link>
              <Link className="float-right" to="./user/:uid/website/:wid	">
                <i className="fas fa-cog" />
              </Link>
            </li>

            <li className="list-group-item">
              <Link to="./user/:uid/website/:wid/page">Blogging App</Link>
              <Link className="float-right" to="./user/:uid/website/:wid	">
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="./user/:uid/website/:wid/page">Script Testing App</Link>
              <Link className="float-right" to="./user/:uid/website/:wid	">
                <i className="fas fa-cog" />
              </Link>
            </li>
          </ul>
        </section>

        <nav className="navbar navbar-dark bg-primary fixed-bottom">
          <div className="full-width">
            <Link className="float-right" to="./user/Profile">
              <i className="fas fa-user" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
