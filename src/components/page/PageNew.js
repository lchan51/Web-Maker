import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class PageNew extends Component {
  render() {
    return (
      <div>
         <div>
        <nav>
        <Link to="/PageList"><i class="fas fa-chevron-left"></i></Link>
        <Link class="float-right pt-2" to="/PageList"><i class="fas fa-check pt-1"></i></Link>
        <span class="navbar-brand mb-0 h1">New Page</span>   
        </nav>
        </div>
       
        <div>  
        <form>
        <div class="form-group">
        <label for="name">Name</label>
        <input class="form-control" value="Page Name"/>
        </div>

        <div class="form-group">
        <label for="title">Title</label>
        <input class="form-control" value="Page Title"/>
        </div>
        </form>
        </div>  

       <nav class="navbar navbar-light bg-light fixed-bottom">
        <div class="full-width">
        <Link class= "float-right" to="./user/Profile"><i class="fas fa-user"></i></Link>
        </div>
    </nav>

    </div>
    )
  }
}
