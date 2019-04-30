import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (


      <div className="container">

          <nav className="navbar navbar-dark bg-primary fixed-top">
          <span className="navbar-brand mb-0 h1">Profile</span>
          <Link to="/profile"><i className="fas fa-check" /></Link>
          </nav>

          <form>
            
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input placeholder="Enter or edit your username here" className="form-control" type="text" id="username"/>
            </div>
              <div className="form-group">
              <label htmlFor="email">Email</label>
              <input placeholder="Enter or edit your email here" type="email" className="form-control" id="email" name="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="Enter or edit your first name"
                type="firstName"
                className="form-control"
                id="firstName"
                name="firstName"
              /> </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Enter or edit your last name"
                type="lastName"
                className="form-control"
                id="lastName"
                name="lastName"/> </div> 
                </form>
            
</div>

           
<Link className="btn btn-primary btn-block" to="./user/123/website"> Website </Link>
<Link className="btn btn-danger btn-block" to="./login"> Logout </Link>
             
        
<nav className="navbar navbar-dark bg-primary fixed-bottom">
</nav>
<Link to="./user/Profile"> <i className="fas fa-user-primary"></i></Link>

)
}
}<Fragment>
<div>a</div>
<div>b</div>
</Fragment>