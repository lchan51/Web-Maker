import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WebsiteEdit extends Component {
  state = {
    uid: this.props.match.params.uid,
    wid: this.props.match.params.id,
    websites: [],
    name: "",
    description: ""
  };

  componentDidMount() {
  
    this.filterWebsites(this.props.websites);
    this.getWebsite(this.state.wid);
  }
    componentDidUpdate(prevProps, prevState, snapshot){
      if(prevProps.match.params.wid !== this.props.match.params.wid){
        this.getWebsite(this.props.match.params.wid)
        }
    }
  
    getWebsite(wid)=> {
    let currentWeb;
    for (let website of this.props.website){
    if(website._id===wid){
      currentWeb = website;
      break;
    }
  }
      this.setState({
        name: currentWeb.name
        description: currentWeb.description
      })

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
        delete ()=>{
        this.props.deleteWeb(this.props.match.params.wid)
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
            <span className="navbar-brand mb-0 h1">Websites</span>
            <Link className="float-right pt-1" to={`/user/${uid}/website/new`}>
              <i className="fas fa-plus pt-2" />
            </Link>
          </div>

          <div className="col-lg-8">
            <Link to={`/user/${uid}/website` className="d-lg-none">
              <i className="fas fa-chevron-left" />
            </Link>
            <form id="editWebForm">
            <button className="float-right pt-2"
            <i className="fas fa-check pt-1"/></i>
            </button>
            <span className="navbar-brand mb-0 h1">Edit Website</span>
            </form>
            </div>
        </nav>

        <section className="row">
          <div className="col-lg-4 d-none d-lg-block alignment-left">
            <ul className="list-group">

            {this.state.websites.map
              (website) => (
              <li key={website._id} className "list-group-item">
              <Link to={`/user/${uid}/website/${website._id}/page`}>{website.name}</Link>
              <Link to={`/user/${uid}/website/${website._id}`}className="float-right">
              <i className="fas fa-cog"></i></Link>
              </li>
                )
                )
                }
            </ul>
          </div>

          <div className="col-lg-8">
            <form>
              <div className="form-group">
              <form id="editWebForm" onSubmit={this.onSubmit}>
                <label htmlFor="name">Website Name</label>
                <input className="form-control" name="name" value={this.state.name}
                onChange={this.onChange}/>
                </form>
              </div>

              <div className="form-group">
                <label htmlFor="description">Website Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChange}
                >
                </textarea>
              </div>
        </section>

          <Link to = {`/user/${uid}/website} 
          <button className="btn btn-warning btn-block">
          Cancel
          </button>
          </Link>

        <button 
        type="button"
        onClick={this.delete}
        className="btn btn-danger float-right">
          Delete
        </button>
        </form>


        <nav className="navbar navbar-dark bg-primary fixed-bottom">
          <div className="full-width">

            <Link className="float-right" to={`/user/${uid}`}>
              <i className="fas fa-user" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
