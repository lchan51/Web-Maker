import React, {Componenet} from "react";
import {Link} from "react-router-dom";

export default className Login extends Component {
render() {
    return(
        <div>
        <div className="container">
        <h1>Login</h1>
        </div>
        <form>
          <div className="form-group">
          <label for="username">Username</label>
          <input placeholder="Enter your username here" className="form-control" type="text" id="username" name="usename"/>
            </div> 
                  
            <div className="form-group">   
            <label for="password">Password</label>
           <input placeholder="Enter your password here" type="password" className="form-control" id="password" name="password"/>
          </div>
          </form>
       <Link href="btn btn-success btn-block" to="">Login</Link>
       <Link href="btn btn-primary btn-block" to="">Register</Link> 
    </div>
       )
}
}