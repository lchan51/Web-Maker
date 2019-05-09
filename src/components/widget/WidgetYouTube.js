import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WidgetYouTube extends Component {
  
  render() {
    const {uid, wid, pid, widgets} = this.props
    
    return (
      <div>
        <nav class="navbar navbar-light bg-light fixed top">
        <Link to="/WidgetList"><i class="fas fa-chevron-left"></i></Link>
        <span class="navbar-brand mb-01 h1>">Edit Widgets</span>
        <Link class="float-right pt-2" to={`/user/${uid}/website/${wid}/page/${pid}/widget`}><i class="fas fa-check pt-1"></i></Link>
        </nav>
                <div class="container">
                <form>
                        <div class="form-group">
                        <label for="Name">Name</label>
                        <input id="name" name="name" type="text" class="form-control"/>
                        </div>
                    
                        <div class="form-group">
                        <label for="Text">Text</label>
                        <input id="text" name="Text" type="text" class="form-control"/>
                        </div>
        
                        <div class="form-group">
                        <label for="URL">URL</label>
                        <input id="url" name="url" type="text" Value="https://youtu.be/uLWLashCXHE" class="form-control"/>
                        </div>        
                                            
                        <div class="form-group">
                        <label for="Width">Width</label>
                        <input id="width" name="width" type="number" class="form-control"/>
                        </div> 
                                                    
    
                        <Link class="btn btn-danger btn-block" to="/WidgetList">Delete </Link>
                                                           
                        
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
