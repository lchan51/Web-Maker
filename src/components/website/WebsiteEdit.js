import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WebsiteEdit extends Component {
  
  state = {
    uid: this.props.match.params.uid,
    wid: this.props.match.params.wid,
    websites: [],
    name: "",
    description: ""
  }

  componentDidMount() {
    this.filterWebsites(this.props.websites);
    this.getWebsite(this.state.wid);
  }
    componentDidUpdate(prevProps, prevState, snapshot){
      if(prevProps.match.params.wid !== this.props.match.params.wid){
        this.getWebsite(this.props.match.params.wid);
        }
    }
  
    getWebsite = wid => {
    let currentWeb;
    for (let website of this.props.websites){
    if(website._id===wid){
      currentWeb = website;
      break;
    }
  }
      this.setState({
        name: currentWeb.name,
        description: currentWeb.description
      });
    }

  filterWebsites = websites => {
    const newWebsites = websites.filter(
      website => (website.developerId === this.state.uid)
      )
    this.setState({
      websites: newWebsites});
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
        deleteWeb = () => {
          this.props.deleteWeb(this.props.match.params.wid);
          this.props.history.push(`/user/${this.state.uid}/website`)
        }

        onSubmit = e => {
          e.preventDefault();
          this.props.editWeb(this.props.match.params.wid, this.state.name, this.state.description);
          this.props.history.push(`/user/${this.state.uid}/website`);
        }

        
  render() {
    const { uid } = this.state;

    return (
      <div>

        <nav className="navbar navbar-dark bg-primary fixed-top row">
          <div className="col-lg-4 d-none d-lg-block">
            <Link to={`/user/${uid}/website`}>
              <i className="fas fa-chevron-left" />
            </Link>
            <Link className="float-right pt-1" to={`/user/${uid}/website/new`}>
            <span className="navbar-brand mb-0 h1">Websites</span>
              <i className="fas fa-plus pt-2"></i></Link>
          </div>
          </nav>

          <div className="col-lg-8">
            <Link to={`/user/${uid}/website`} className="d-lg-none">
            <i className="fas fa-chevron-left" />
            </Link>

            <span className="navbar-brand mb-0 h1">Edit Website</span>
            <button 
            className="btn float-right pt-2" form id ="editWebForm">
            <i className="fas fa-check pt-1"/>
            </button>
            </div>

          <div className= "row">
          <div className = "col-lg-4 d-none d-lg-block alignment-left">
          <ul className="list-group">
            
            {this.state.websites.map (
              (website) => (
              <li key={website._id} className = "list-group-item">
              <Link to={`/user/${uid}/website/${website._id}/page`}>{website.name}</Link>
              <Link to={`/user/${uid}/website/${website._id}`}className="float-right">
              <i className="fas fa-cog"></i></Link>
              </li>
              ))}
              </ul>
            </div>
            </div>       

          <div className="col-lg-8">
              <form id="editWebForm" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Website Name</label>
                <input id="name"
                name="name" 
                className="form-control"
                type="text"
                placeholder="Name of the Website"
                value={this.state.name}
                onChange={this.onChange}/>
              </div>
              

              <div className="form-group">
                <label htmlFor="description">Website Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChange}>
                </textarea>
                </div>

                <Link to={`/user/${uid}/website`}
                className="btn btn-lg btn-warning">
                Cancel
                </Link>
                                
                <button
                type="button"
                onClick={this.deleteWeb}
                className="btn btn-lg btn-danger float-right">
                Delete
                </button>
                </form>
                </div>

                <nav className="navbar navbar-dark bg-primary fixed-bottom"> 
                <div className="full-width">
                <Link className="color-white float-right" to={`/user/${uid}`}>
                <i className="fas fa-user"></i></Link>
                </div>
                </nav>
                </div>
          
                )}}