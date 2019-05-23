import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

export default class PageList extends Component {

    state={
    uid: "",
    wid: "",
    pages: []
  }

    async componentDidMount() {
      await this.setState({
        uid: this.props.match.params.uid,
        wid: this.props.match.params.wid
      })

      this.filterPage(this.state.wid);
    }

    filterPage = async (wid) => {
      const res = await axios.get(`/api/website/${this.state.wid}/page`)
      this.setState({
          pages: res.data
      })
  }
  
  render() {
    const {uid, wid} = this.state;
 
    return (
      
      <div>
          <nav className="navbar navbar-light bg-light fixed-top">
          <Link to={`/user/${this.state.uid}/website`}>
          <i className="color-black fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand mb-0 h1">Pages </span>
          <Link className="float-right" to={`/user/${uid}/website/${wid}/page/${page._id}`}>
          <i className="fas fa-plus"/></Link>
        </nav>

        <div className="container-left">
        <ul className="list-group">
        
            {
              this.state.pages.map(
              (page)=> (
                <li key={page._id} className="list-group-item">

              <Link to={`/user/${uid}/website/${wid}/page/${page._id}/widget`}>{page.name}</Link>
                <Link className="btn float-right" to={`/user/${uid}/website/${wid}/page/${page._id}`}>
                  <i className="fas fa-cog" /></Link>
                 </li>
                )                                  
                )
                }
                  </ul>
                </div>
                
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
