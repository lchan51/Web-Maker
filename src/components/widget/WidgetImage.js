import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WidgetImage extends Component {
  render() {
    return (
      <div>
         <nav class="navbar navbar-light bg-light fixed top">
        <Link ="/WidgetList"><i class="fas fa-chevron-left"></i></a>
        <span class="navbar-brand mb-01 h1>">Widget Edit</span>
        <Link class="float-right pt-2" to="/WidgetList"><i class="fas fa-check pt-1"></i></Link>
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
                <input id="url" name="url" type="text" Value="https://i.kinja-img.com/gawker-media/image" class="form-control"/>
                </div>        
                                    
                <div class="form-group">
                <label for="Width">Width</label>
                <input id="width" name="width" type="number" class="form-control" placeholder="100%"/>
                </div> 
                                            
                <div class="form-group">
                <label for="Upload">Upload</label>
                <input placeholder="Choose File" value="No file chosen" id="text" name="Text" type="file" class="form-control"/>
                </div>

                        <Link class="btn btn-primary btn-block" to=#Upload Image </Link>
                        <Link class="btn btn-danger btn-block" to="/WidgetList">Delete</Link>
                                                   
                        <nav class="navbar navbar-light bg-light fixed-bottom">
                        <div class="full-width">
                        <Link class= "float-right" to="./user/Profile"><i class="fas fa-user text-primary"></i></Link>
                        </nav>
                        </div>      
                        
                </form>
                </div>






      </div>
    )
  }
}
