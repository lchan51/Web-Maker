import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Profile extends Component {
state = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
    oldUsername:"",
    updateComplete: false,
    usernameTaken: false,
    role: ""
  };
  async componentDidMount() {
    const isLoggedIn = await this.props.loggedIn();
    if (isLoggedIn ===0) {
      this.props.history.push('/login');
      return;
    }

    const uid = this.props.match.params.uid;
    const res = await axios.get (`/api/user/${uid}`);
    if(res.data) {
      this.showUser(res.data);
    } else {
      alert("No user is found with given id");
    }
  }

showUser = user => {
    const { username, password, email, firstName, lastName, role} = user;
    this.setState({
      username,
      password,
      email,
      firstName,
      lastName,
      oldUsername: username,
      role
    });
  };

onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      updateComplete: false,
      usernameTaken: false
    });
  };

onSubmit = async e => {
    e.preventDefault();
    const { username, password, email, firstName, lastName, oldUsername } = this.state;
    if (username !==oldUsername){ 
    const res = await axios.get(`/api/user?username=${username}`);
    if (res.data) {this.setState({usernameTaken:true});
    return
    }
  }
    const newUser = {
      _id: this.props.match.params.uid,
      username,
      password,
      email,
      firstName,
      lastName
    };
    await axios.put("/api/user", newUser);
    this.setState({
      updateComplete: true
    })
}

      logout = async ()=> {
        await axios.post("/api/logout");
        this.props.history.push("/login");
      }

  render() {
    const { username, email, firstName, lastName, role } = this.state;

    return (
        <div>
          
        <nav className="navbar navbar-dark bg-primary fixed-top">
        <span className="navbar-brand mb-0 h1">Profile</span>
        <button className="btn" form="profileForm" href="profile.html">
        <i className="color-white fas fa-check"/></button>
        </nav>

        <div className="container">
        {this.state.updateComplete && (<div className="alert alert-success">Your update was completed successfully</div>)}
        {this.state.usernameTaken && (<div className="alert alert-danger">Username is taken, please try another</div>)}
        <form id="profileForm" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
            name="username"
              className="form-control"
              type="text"
              id="username"
              value={username}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="firstName"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="lastName"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.onChange}
            />
          </div>
        </form>
    
        <Link className="btn btn-primary btn-block"
        to={`/user/${this.props.match.params.uid}/website`}>
        Websites
        </Link>
        {
          role === "admin"?(<Link to="/manage" className="btn btn-warning btn-block">Manage Users</Link>): null
        }
       
        <button type="button" onClick={this.logout} className="btn btn-danger btn-block">
        Logout 
        </button>
        
        </div>
    
          </div>
    )
  }
}