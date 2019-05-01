import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Login extends Component {



render() {
    return(
        <div>
        <div className="container">
        <h1>Login</h1>
        </div>
        <form>
          <div className="form-group">
          <label htmlFor="username">Username</label>
          <input placeholder="Enter your username here" className="form-control" type="text" id="username" name="usename"/>
            </div> 
                  
            <div className="form-group">   
            <label htmlFor="password">Password</label>
           <input placeholder="Enter your password here" type="password" className="form-control" id="password" name="password"/>
          </div>
          </form>
       <Link className="btn btn-success btn-block" to="/user/123">Login</Link>
       <Link className="btn btn-primary btn-block" to="user/123">Register</Link> 
    </div>
       )
}
}
