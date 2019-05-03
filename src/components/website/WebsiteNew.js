import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";

export default class WebsiteNew extends Component {
  state = {
    uid: this.props.match.params.uid,
    websites: [],
    name: "",
    description: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, description, uid } = this.state;
    const newWeb = {
      _id: uuid(),
      name,
      developerId: uid,
      description
    };

    this.props.addWeb(newWeb);
    this.props.history.push(`/user/${this.state.uid}/website`);
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary fixed-top row">
          <div class="col-lg-4 d-none d-lg-block">
            <Link to="/WebsiteList">
              {" "}
              <i class="fas fa-chevron-left" />
            </Link>
            <span class="navbar-brand mb-0 h1">Websites</span>
            <Link class="float-right pt-2" to="/WebsiteNew">
              <i class="fas fa-plus pt-1" />
            </Link>
          </div>

          <div class="col-lg-8">
            <Link to="/WebsiteList" class="d-lg-none">
              <i class="fas fa-chevron-left" />
            </Link>
            <Link class="float-right pt-2" to="/WebsiteList">
              <i class="fas fa-check pt-1" />
            </Link>
            <span class="navbar-brand mb-0 h1">New Website</span>
          </div>
        </nav>

        <section class="row">
          <div class="col-lg-4 d-none d-lg-block">
            <ul class="list-group">
              <li class="list-group-item">
                <Link to="./page/PageList">Blogging App</Link>
                <Link class="float-right" to="/WebsiteEdit">
                  <i class="fas fa-cog" />
                </Link>
              </li>

              <li class="list-group-item">
                <Link to="./page/PageList">Address Book App</Link>
                <Link class="float-right" to="/WebsiteEdit">
                  <i class="fas fa-cog" />
                </Link>
              </li>

              <li class="list-group-item">
                <Link to="./page/PageList">Script Testing App</Link>
                <Link class="float-right" to="/WebsiteEdit">
                  <i class="fas fa-cog" />
                </Link>
              </li>

              <li class="list-group-item">
                <Link to="./page/PageList">Blogger</Link>
                <Link class="float-right" to="/WebsiteEdit">
                  <i class="fas fa-cog" />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <div class="col-lg-8">
          <form>
            <div class="form-group">
              <label htmlFor="name">Name</label>
              <input class="form-control" placeholder="Name" />
            </div>

            <div class="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                class="form-control"
                rows="4"
                id="description"
                name="description"
                placeholder="Description"
              />
            </div>
          </form>
        </div>

        <nav class="navbar navbar-dark bg-primary fixed-bottom">
          <div class="full-width">
            <Link class="float-right" href="./user/Profile">
              <i class="fas fa-user" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
