import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

export default class WebsiteNew extends Component {
  
  state = {
    uid: this.props.match.params.uid,
    websites: [],
    name: "",
    description: ""
  };

  async componentDidMount() {
    const res = await axios.get (`/api/user/${this.state.uid}/website`)
    this.filterWebsites(res.data);
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

  onSubmit = async e => {
    e.preventDefault();
    const {name, description, uid} = this.state;
    const newWeb = {
      name,
      developerId: uid,
      description
    };
    await axios.post("/api/website", newWeb);
    this.props.history.push (`/user/${this.state.uid}/website`);
  };

  render() {
    const {uid} = this.state;
    return (
      <div>

        <nav className="navbar navbar-dark bg-primary fixed-top row">
          <div className="col-lg-4 d-none d-lg-block">
            <Link to={`/user/${this.props.match.params.uid}/website`}>
              <i className="fas fa-chevron-left" />
            </Link>
            <span> Websites</span>
            <Link className="float-right" to={`/user/${uid}/website`}>
              <i className="fas fa-plus pt-2" />
            </Link>
          </div>

          <div className="col-lg-8 d-lg-block float-right mt-3">
            <Link to={`/user/${uid}/website`}>
              <i className="fas fa-chevron-left" />
            </Link>
            <button form="newWebForm" className="btn float-right">
              <i className="fas fa-check pt-1"/>
            </button>
            <span>New Website</span>
          </div>
        </nav>
        
            <div className="row">
            <div className="col-lg-4 d-none d-lg-block mt-3">
            <ul className="list-group">
            {this.state.websites.map(
            (website) => (
            <li key={website._id} className="list-group-item">
            <Link to={`/user/${uid}/website/${website._id}/page`}>{website.name}</Link>
            <Link to={`/user/${uid}/website/${website._id}`} className="absolute-left">
            <i className="fas fa-cog float-right"></i>
            </Link>
            </li>
                  )
                )
              }
            </ul>
            </div>
        
        <div className="col-lg-8">
        <form id="newWebForm" className="absolute-right" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="form-control" placeholder="Name"
              name="name"
              onChange={this.onChange}
              value={this.state.name}/>
              

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                rows="4"
                id="description"
                name="description"
                placeholder="Description"
                onChange={this.onChange}
                value={this.state.description}/>
              </div>
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
