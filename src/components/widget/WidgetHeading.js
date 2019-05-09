import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WidgetHeading extends Component {

  onChange = e => {
  this.props.onChange(e)
  }
  
  onSubmit =e => (
    this.props.onSubmit (e)
  )

  onDelete = e => (
    this.props.onDelete();
  )


  render() {
    const {uid, wid, pid, name, text, size} = this.props

    return (
      <div>
         <nav className="navbar navbar-light bg-light fixed-top">
                <Link to = "/WidgetList"><i className="fas fa-chevron-left"></i></Link>
                <span className="navbar-brand mb-01 h1>">Edit Widgets</span>
                <button className=" btn float-right pt-2" 
                to={`/user/${uid}/website/${wid}/page/${pid}/widget`}
                form="headingForm">
                <i className="fas fa-check pt-1"></i></button>
                </nav>
            
                <div className="container">
                        <form id="headingForm" onSubmit={this.onSubmit}></form>
                          <div className="form-group">
                          <label htmlFor="Name">Name</label>
                          <input id="name" name="name" type="text" className="form-control" 
                          onChange = {this.onChange}>
                          value={name}</input>
                          </div>
                        
                          <div className="form-group">
                          <label htmlFor="Text">Text</label>
                          <input id="text" name="text" type="text" className="form-control"
                          onChange = {this.onChange}
                          value={text}></input>
                          </div>
            
                          <div className="form-group">
                          <label htmlFor="Size">Size</label>
                          <input id="size" name="size" type="number" className="form-control" placeholder="3"
                          onChange = {this.onChange}
                          value={size}></input>
                          </div> 

                          <button className="btn btn-danger btn-block" onClick={this.onDelete}>Delete</button>
                          
                          <footer className="navbar navbar-light fixed-bottom bg-light">
                          <div className="full-width">
                          <Link className="color-black float-right" to={`/user/${uid}`}><i className="fas fa-user" />
                          </Link>
                          </div>
                          </footer>
                          </div>
                          </div>
    )
  }
}
