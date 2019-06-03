import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class WidgetImage extends Component {

  onChange = e => {
    this.props.onChange(e)
    }

    onSubmit =e => {
      this.props.onSubmit (e)
    }

    onDelete = () => {
      this.props.onDelete()
    }

  render() {
    const {uid, wid, pid, name, width, url} = this.props
    
    return (
      <div>

        <nav className="navbar navbar-light fixed-top bg-light full width">
        <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i className="fas fa-chevron-left"/></Link>
        <span className="navbar-brand mb-01 h1">Edit Widgets</span>
        <button className ="btn" form="imgForm" to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i className= "float-right pt-2 fas fa-check pt-1"></i></button>
        </nav>

        <div className="container">
        <form id="imgForm" onSubmit={this.onSubmit}>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" className="form-control"
                onChange={this.onChange}
                value={name}/>
                </div>
              
                <div className="form-group">
                <label htmlFor="url">URL</label>
                <input id="url" name="url" type="text" className="form-control"
                onChange={this.onChange}
                value={url}/>
                </div>        
                                    
                <div className="form-group">
                <label htmlFor="width">Width</label>
                <input id="width" name="width" type="text" className="form-control" placeholder="100%"
                onChange={this.onChange}
                value={width}/>
                </div> 
                                            
                <div className="form-group">
                <label htmlFor="upload">Upload</label>
                <input placeholder="Choose File" value="" id="text" name="Text" type="file" className="form-control"
                onChange={this.onChange}/>
                </div>
                </form>
                
                <div>
                <button className="btn btn-danger btn-block" type="button"
                onClick={this.onDelete}> Delete </button>
                </div>
                </div>                                  
              <footer className="navbar navbar-light fixed-bottom bg-light">
        <div className="full-width">
        <Link className="color-black float-right" to={`/user/${uid}`}><i className="fas fa-user" />
        </Link>
            </div>
            </footer>
            </div>
    )
  }
}
