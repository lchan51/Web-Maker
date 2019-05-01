import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class PageNew extends Component {
  render() {
    return (
      <div>
         <div>
        <nav>
        <a href="page-list.html"><i class="fas fa-chevron-left"></i>
        <a class="float-right pt-2" href="page-list.html"><i class="fas fa-check pt-1"></i></a>
        <span class="navbar-brand mb-0 h1">New Page</span>   
        </nav>
        </div>
       
        <div>  
        <form>
        <div class="form-group">
        <label for="name">Name</label>
        <input class="form-control" value="Page Name">
        </div>

        <div class="form-group">
        <label for="title">Title</label>
        <input class="form-control" value="Page Title">
        </div>
        </form>
        </div>  

       <nav class="navbar navbar-light bg-light fixed-bottom">
        <div class="full-width">
        <a class= "float-right" href="../user/profile.html"><i class="fas fa-user"></i></a>
        </div>
    </nav>

    </div>
      </div>
    )
  }
}
