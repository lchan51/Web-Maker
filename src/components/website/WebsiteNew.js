import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WebsiteNew extends Component {
  render() {
    return (
      
      <div>
      
      <nav class="navbar navbar-dark bg-primary fixed-top row"> 
      <div class="col-lg-4 d-none d-lg-block">
      <Link to="website-list.html"> <i class="fas fa-chevron-left"></i></Link>
      <span class="navbar-brand mb-0 h1">Websites</span>
      <Link class="float-right pt-2" href="website-new.html"><i class="fas fa-plus pt-1"></i></Link>
        </div>      
        
        <div class="col-lg-8">
        <Link to="/WebsiteList" class="d-lg-none"><i class="fas fa-chevron-left"></i></Link>
        <Link class="float-right pt-2" to="/WebsiteList"><i class="fas fa-check pt-1"></i></Link>
        <span class="navbar-brand mb-0 h1">New Website</span>   
        </div>
        </nav>

    <section class="row">
        <div class="col-lg-4 d-none d-lg-block">
                <ul class="list-group">

                        <li class="list-group-item">
                        <Link to="./page/PageList">Blogging App</Link>
                        <Link class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></Link>
                        </li>

                        <li class="list-group-item">
                            <Link to="./page/PageList">Address Book App</Link>
                            <Link class="float-right" to="/WebsiteEdit"><i class="fas fa-cog"></i></Link>
                            </li>
                
                            <li class="list-group-item">
                                <Link to="./page/PageList">Script Testing App</Link>
                                <Link class="float-right" to="/WebsiteEdit"><i class="fas fa-cog"></i></Link>
                                </li>

                                <li class="list-group-item">
                                    <Link to="./page/PageList">Blogger</Link>
                                    <Link class="float-right" to="/WebsiteEdit"><i class="fas fa-cog"></i></Link>
                                    </li>
                                </ul>
                                </div>

        <div class="col-lg-8">
        
        <form>
            <div class="form-group">
            <label for="name">Name</label>
            <input class="form-control" placeholder="Name"/>
            </div>

            <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" rows="4" id="description" name="description" placeholder="Description"></textarea>
            </div>
       </form>

       </div>
       
    </section>
    <
    <nav class="navbar navbar-dark bg-primary fixed-bottom">
        <div class="full-width">
            <Link class= "float-right" href="./user/Profile"><i class="fas fa-user"></i></Link>
              </div>
        </nav>



      </div>
    )
  }
}
