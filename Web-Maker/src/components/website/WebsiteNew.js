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

  componentDidMount() {
    this.filterWebsites(this.props.websites);
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (prevProps.websites !== this.props.websites){
      this.onSubmitfilterWebSites = (this.props.websites);    
      }
    }
    
  filterWebsites = (websites) => {
    const newWebsites = websites.filter(
      website => (website.developerId === this.state.uid)
      )
    this.setState({
      websites: newWebsites
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const {name, description, uid} = this.state;
    const newWeb = {
      _id: uuid(),
      name,
      developerId: uid,
      description
    };
    this.props.addWeb(newWeb);
    this.props.history.push (`/user/${this.state.uid}/website`);

  };

  render() {
    const {uid} = this.state;
    return (
      <div>

        <nav className="navbar navbar-dark bg-primary fixed-top row">
          <div className="col-lg-4 d-none d-lg-block">
            <Link className="float-left" to={`/user/${this.props.match.params.uid}/website`}>
              <i className="fas fa-chevron-left" />
            </Link>
            <span> <strong>Websites</strong></span>
            <Link className="float-right" to={`/user/${uid}/website`}>
              <i className="fas fa-plus pt-2" />
            </Link>
          </div>

          <div className="col-lg-8 d-lg-block float-right mt-4">
            <Link to="/user/:uid/website">
              <i className="fas fa-chevron-left" />
            </Link>
            <button form="newWebForm" className="btn float-right">
              <i className="fas fa-check pt-2"/>
            </button>
            <span><strong>New Website</strong></span>
          </div>
        </nav>
        
            <div className="row">
            <div className="col-lg-4 d-none d-lg-block">
            <ul className="list-group">
            {this.state.websites.map(
            (website) => (
            <li key={website._id} className="list-group-item">
            <Link to={`/user/${uid}/website/${website._id}/page`}>{website.name}</Link>
            <Link to={`/user/${uid}/website/${website._id}`} className="absolute-left">
            <i className="fas fa-cog"></i>
            </Link>
            </li>
                  )
                )
              }
            </ul>
            </div>
        
        <div className="col-lg-8">
        <form id="newWebForm" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="form-control" placeholder="Name"
              name="name"
              onChange={this.onChange}
              value={this.state.name}/>
              </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                rows="5"
                id="description"
                name="description"
                placeholder="Description"
                onChange={this.onChange}
                value={this.state.description}/>
              </div>
           
    
            <Link
                to={`/user/${this.props.match.params.uid}/website`}
                className="btn btn-lg btn-warning">
                Cancel
                </Link>

                <button
                className="btn btn-lg btn-success float-right"             >
                Submit
                </button>
                </form>
        </div>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
          <div className="full-width">
            <Link className="float-right" to={`/user/${uid}`}>
              <i className="fas fa-user" />
            </Link>
            </div>
            </nav>
            </div>
            </div>
                  
  )
    }
}
