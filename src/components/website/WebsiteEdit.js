import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WebsiteEdit extends Component {
  state = {
    uid: this.props.match.params.uid,
    wid: this.props.match.params.wid,
    websites: [],
    name: "",
    description: ""
  };

  render() {
    const { uid } = this.state;

    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top row">
          <div className="col-lg-4 d-none d-lg-block">
            <Link to="/WebsiteList">
              {" "}
              <i className="fas fa-chevron-left" />
            </Link>
            <span className="navbar-brand mb-0 h1">Websites</span>
            <Link className="float-right pt-1" to="/WebsiteNew">
              <i className="fas fa-plus pt-2" />
            </Link>
          </div>

          <div className="col-lg-8">
            <Link to="/WebsiteList" className="d-lg-none">
              <i className="fas fa-chevron-left" />
            </Link>
            <Link className="float-right pt-2" to="/WebsiteList">
              <i className="fas fa-check pt-1" />
            </Link>
            <span className="navbar-brand mb-0 h1">Edit Website</span>
          </div>
        </nav>

        <section className="row">
          <div className="col-lg-4 d-none d-lg-block alignment-left">
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="./page/PageList">Blogging App</Link>
                <Link className="float-right" to="/WebsiteEdit">
                  <i className="fas fa-cog" />
                </Link>
              </li>

              <li className="list-group-item">
                <Link to="./page/PageList">Address Book App</Link>
                <Link className="float-right" to="/WebsiteEdit">
                  <i className="fas fa-cog" />
                </Link>
              </li>

              <li className="list-group-item">
                <Link to="./page/PageList">
                  Script Testing App <i className="fas fa-cog" />
                </Link>
                <Link className="float-right" to="/WebsiteEdit">
                  <i className="fas fa-cog" />
                </Link>
              </li>

              <li className="list-group-item">
                <Link to="./page/PageList" className="float-right">
                  {" "}
                  Blogger <i className="fas fa-cog" />
                </Link>
                <Link className="float-right" to="/WebsiteEdit">
                  <i className="fas fa-cog" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-8">
            <form>
              <div className="form-group">
                <label for="name">Website Name</label>
                <input className="form-control" value="Blogger" />
              </div>

              <div className="form-group">
                <label for="description">Website Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  id="description"
                  name="description"
                  placeholder="Description"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis iste atque, corporis velit veritatis eius amet
                  distinctio aliquid beatae omnis dolor placeat ipsum aut vitae
                  ullam sint neque ipsam sequi?
                </textarea>
              </div>
            </form>
          </div>
        </section>

        <button className="btn btn-danger btn-block" to="./WebsiteList">
          Delete
        </button>

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
