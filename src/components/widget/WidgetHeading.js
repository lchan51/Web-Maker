import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WidgetHeading extends Component {
  render() {
    return (
      <div>
         <nav class="navbar navbar-light bg-light fixed-top">
                <a href="widget-list.html"><i class="fas fa-chevron-left"></i></a>
                <span class="navbar-brand mb-01 h1>">Widget Edit</span>
                <a class="float-right pt-2" href="widget-list.html"><i class="fas fa-check pt-1"></i></a>
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

                                <a class="btn btn-danger btn-block" href="widget-list.html">Delete</a>

                                <nav class="navbar navbar-light bg-light fixed-bottom">
                                <div class="full-width">
                                <a class= "float-right" href="../user/profile.html"><i class="fas fa-user text-primary"></i></a>
                                 </nav>S




      </div>
    )
  }
}
