import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WidgetHeading extends Component {
  render() {
    return (
      <div>
         <nav class="navbar navbar-light bg-light fixed-top">
                <Link to = "/WidgetList"><i class="fas fa-chevron-left"></i></Link>
                <span class="navbar-brand mb-01 h1>">Widget Edit</span>
                <Link class="float-right pt-2" to="/WidgetList"><i class="fas fa-check pt-1"></i></Link>
                </nav>
            
                <div class="container">
                        <form>
                                <div class="form-group">
                                <label for="Name">Name</label>
                                <input id="name" name="name" type="text" class="form-control">
                                </div>
                        
                                <div class="form-group">
                                <label for="Text">Text</label>
                                <input placeholder="US Senate Reaches Compromise on Emergency" id="text" name="Text" type="text" class="form-control">
                                </div>
            
                                <div class="form-group">
                                <label for="Size">Size</label>
                                <input id="size" name="size" type="number" class="form-control" placeholder="3">
                                </div> 

                                <Link class="btn btn-danger btn-block" to="/WidgetList">Delete</Link>

                                <nav class="navbar navbar-light bg-light fixed-bottom">
                                <div class="full-width">
                                <Link class= "float-right" to="../user/Profile"><i class="fas fa-user text-primary"></i></Link>
                                 </nav>




      </div>
    )
  }
}
