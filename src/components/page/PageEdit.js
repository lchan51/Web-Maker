import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageEdit extends Component {
  state = {
    uid: "",
    wid: "",
    pid: "",
    name: "",
    title: ""
  }
  
  async componentDidMount() {
      await this.setState({
      uid: this.props.match.params.uid,
      wid: this.props.match.params.wid,
      pid: this.props.match.params.pid
    })
  const page = this.getPage();
  this.setState({
    name: page.name,
    title: page.title
  })
  }
  
  getPage = ()=> {
    for (let page of this.props.pages) {
      if(page._id === this.state.pid){
        return page;
      }
    }
      return null
  }
  
    onChange= e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    onSubmit = e => {
      e.preventDefault();
      const newPage = {
        _id: this.state.pid,
        name: this.state.name,
        websiteId: this.state.wid,
        title: this.state.title
      }
        this.props.editPage (newPage);
        this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }
  
    onDelete =()=> {
      this.props.deletePage(this.state.pid);
      this.props.history.push (`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }
  
  render() {
    const {uid,wid,name,title}=this.state

    return (
      <div>
 
      <nav className="navbar navbar-light bg-light fixed-top"></nav>
      <Link to={`/user/ ${uid}/website/${wid}/page`}><i className="fas fa-chevron-left" /></Link>
      <span className="navbar-brand mb-0 h1">Edit Page</span>
      <button className="btn float-right pt-2" form="editPageForm"> 
      <i className="fas fa-check pt-1"/>
       </button>

      <div className="form-group">
      <form id="editPageForm"> onSubmit={this.onSubmit}>
      <label htmlFor="name">Name</label>
      <input className="form-control" 
      type="text"
      id= "name"
      name="name" 
      onChange={this.onChange} 
      value={name}/>
        

      <div className="form-group">
      <label htmlFor="title">Title</label>
      <input className="form-control" type="text" id="title" name="title"
      onChange={this.onChange} value={title}/>
      </div>
    
      <Link to={`/user/${uid}/website/${wid}/page/list`} className="btn btn-warning btn-block">
      Cancel
      </Link>
      <button
          type="button"
          onClick={this.onDelete}
          className="btn btn-danger btn-block">
          Delete
        </button>
        </form>
        </div>


        <footer className="navbar navbar-light bg-light fixed-bottom">
          <div className="full-width">
            <Link className="float-right" to={`user/${uid}`}>
              <i className="fas fa-user" />
            </Link>
          </div>
        </footer>
      </div>
    );
  }
}
