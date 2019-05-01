import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WebsiteEdit extends Component {
  render() {
    return (
      
      <div>
      
      <nav class="navbar navbar-dark bg-primary fixed-top row"> 
      <div class="col-lg-4 d-none d-lg-block">
      <Link to="/WebsiteList"> <i class="fas fa-chevron-left"></i></Link>
      <span class="navbar-brand mb-0 h1">Websites</span>
      <Link class="float-right pt-1" to="/WebsiteNew"><i class="fas fa-plus pt-2"></i></Link>
        </div> 
            
        <div class="col-lg-8">
        <Link to="/WebsiteList.html" class="d-lg-none"><i class="fas fa-chevron-left"></i></Link>
        <Link class="float-right pt-2" to="/WebsiteList"><i class="fas fa-check pt-1"></i></Link>
        <span class="navbar-brand mb-0 h1">Edit Website</span>   
        </div>
        </nav>
        

    <section class="row">
        <div class="col-lg-4 d-none d-lg-block alignment-left">
                <ul class="list-group">

                        <li class="list-group-item">
                        <Link to="./page/PageList">Blogging App</Link>
                        <Link class="float-right" to="/WebsiteEdit"><i class="fas fa-cog"></i></Link>
                        </li>
                        
                        <li class="list-group-item">
                        <Link to="./page/PageList">Address Book App</Link>
                        <Link class="float-right" to="/WebsiteEdit"><i class="fas fa-cog"></i></Link>
                        </li>
                
                        <li class="list-group-item">
                       <Link to="./page/PageList">Script Testing App <i class="fas fa-cog"></i></Link>
                       <Link class="float-right" to="/WebsiteEdit"><i class="fas fa-cog"></i></Link>
                        </li>
                                
                        <li class="list-group-item">
                        <Link to="./page/PageList" class="float-right"> Blogger <i class="fas fa-cog"></i></Link>
                        <Link class="float-right" to="/WebsiteEdit"><i class="fas fa-cog"></i></Link>
                        </li>
                </ul>
                    </div>

        <div class="col-lg-8">
                <form>
                    <div class="form-group">
                        <label for="name">Website Name</label>
                        <input class="form-control" value="Blogger"/>
                        </div>

                        <div class="form-group">
                        <label for="description">Website Description</label>
                        <textarea class="form-control" rows="4" id="description" name="description" placeholder="Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iste atque, corporis velit veritatis eius amet distinctio aliquid beatae omnis dolor placeat ipsum aut vitae ullam sint neque ipsam sequi?</textarea>
                        </div>
      </div>
            </form>
            </section>

                <Link class="btn btn-danger btn-block" to="website-list.html">Delete</Link>

                    <nav class="navbar navbar-dark bg-primary fixed-bottom">
                        <div class="full-width">
                            <Link class= "float-right" to="./user/Profile"><i class="fas fa-user"></i></Link>
                                </div>
                                    </nav>











      </div>
    )
  }
}
