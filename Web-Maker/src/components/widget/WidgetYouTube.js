import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WidgetYouTube extends Component {

  onChange = e => (
    this.props.onChange(e)
    )
    
    onSubmit =e => (
      this.props.onSubmit(e)
    )
  
    onDelete = e => (
      this.props.onDelete(e)
    )
  
  
  render() {
    const {name, text, url, width, uid, wid, pid, } = this.props
    
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed top">
        <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i className="fas fa-chevron-left"></i></Link>
        <span className="navbar-brand mb-01 h1>">Edit Widgets</span>
        <button className="float-right pt-2" form="youtubeForm" to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i className="fas fa-check pt-1"></i></button>
        </nav>
                <div className="container">
                <form id="youtubeForm" onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input id="name" name="name" type="text" onChange={this.onChange} value = {name} className="form-control"/>
                        </div>
                    
                        <div className="form-group">
                        <label htmlFor="Text">Text</label>
                        <input id="text" name="Text" type="text" onChange={this.onChange} value = {text}className="form-control"/>
                        </div>
        
                        <div className="form-group">
                        <label htmlFor="URL">URL</label>
                        <input id="url" name="url" type="text" onChange={this.onChange} value={url} className="form-control"/>
                        </div>        
                                            
                        <div className="form-group">
                        <label htmlFor="Width">Width</label>
                        <input id="width" name="width" type="number" onChange={this.onChange} value={width} className="form-control"/>
                        </div> 
                                                    
    
                    <button className="btn btn-danger btn-block" type="button" OnClick={this.onDelete}> Delete </button>
                                                           
                        
        <footer className="navbar navbar-light fixed-bottom bg-light">
        <div className="full-width">
        <Link className="color-black float-right" to={`/user/${uid}`}><i className="fas fa-user" />
        </Link>
            </div>
            </footer>
                        </form>
                        </div>                     
                        </div>      
       





    )
  }
}
