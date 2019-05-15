import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid"

export default class PageNew extends Component {

  state = {
  uid: "",
  wid: "",
  name: "",
  title: "" 
}

  componentDidMount() {
    this.setState({
      uid: this.props.match.params.uid,
      wid: this.props.match.params.wid
    })

  }

    onChange= e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onSubmit = e => {
      e.preventDefault();
      const newPage = {
        _id: uuid(),
        name: this.state.name,
        websiteId: this.state.wid,
        title: this.state.title
      }
        this.props.addPage (newPage);
        this.props.history.push (`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }


  render() {
  const {uid, wid, name, title}= this.state;
    
  return (
      <div>
        
        <div>
          <nav>
            <Link to={`/user/${uid}/website/${wid}/page/list`}>
              <i className="fas fa-chevron-left" /></Link>
           
            <Link className="float-right pt-2" to={`/user/${uid}/website/${wid}/page/list`}></Link>
            <button form ="newPageForm" className="btn"> <i className="fas fa-check pt-1"/>
            </button>
            <span className="navbar-brand mb-0 h1">New Page</span>
          </nav>
        </div>

        <div>
          <form id="newPageForm" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="form-control" name="name" value="Page Name" />
              onChange={this.onChange} 
              value={name}/>
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input className="form-control" name="title" 
              onChange={this.onChange} 
              value={title}/>
            </div>

          <Link to={`/user/${uid}/website/${wid}/page/list`} className="btn btn-lg btn-warning"> Cancel </Link>
          <Link to={`/user/${uid}/website/${wid}/page/list`} className="btn btn-lg btn-success float-right"> Submit </Link>
          </form>
        

        <footer className="navbar navbar-light bg-light fixed-bottom">
          <div className="full-width">
          <Link className="float-right" to={`user/{uid}`}> <i className="fas fa-user"></i>
            </Link>
          </div>
        </footer>
        </div>
        </div>
  )
  }
}
