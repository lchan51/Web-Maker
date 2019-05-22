import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid"
import Axios from "axios";

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

    onSubmit = async e => {
      e.preventDefault();
      const newPage = {
        _id: uuid(),
        name: this.state.name,
        websiteId: this.state.wid,
        title: this.state.title
      }
        await Axios.post("/api/page", newPage)
        this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }


  render() {
  const {uid, wid, name, title}= this.state;
    
  return (
      <div>
        
        <div>
        <nav className="navbar navbar-light fixed-top bg-light">
        <Link className="color-black" to={`/user/${uid}/website/${wid}/page`}>
        <i className="fas fa-chevron-left" />
        </Link>
        <span className="navbar-brand mb-0 h1">New Page </span>
         <button className="color-black btn float-right pt-2" form="newPageForm">
          <i className="fas fa-check-right pt-1"/>
           </button>
            </nav>  
            </div>

        <div>
          <form id="newPageForm" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="form-control" name="name"
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
          <button className="btn btn-lg btn-success float-right"> Submit </button>
          </form>
        

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
