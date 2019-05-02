import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WidgetList extends Component {
  render() {
    return (
      
      <div>

<nav class="navbar fixed-top navbar-light bg-light">
<Link to="../page/PageList"> <i class="fa fa-chevron-left"></i></Link>
<span class="navbar-brand mb-0 h1">Widgets</span>  
<Link to="/WidgetChooser"><i class="fa fa-plus"></i></Link>
</nav>
    
<div>
        <div class="container-right">
        <div class="float-right">
        <Link to="/widgetHeading"><i class="fas fa-cog"></i></Link>
        <Link to="#"><i class="fas fa-bars"></i></Link></div>
        <h1>PANDAS</h1>
        </div>
        

        <div class="float-right">
        <Link to="/widgetHeading"><i class="fas fa-cog"></i></Link>
        <Link to="#"><i class="fas fa-bars"></i></Link></div>
        <h4>Amazing giant pandas wave hello to visitors at the National Zoo in Washington, DC</h4>

        <div class="float-right">
        <Link to="/WidgetImage"><i class="fas fa-cog"></i></Link>
        <Link to="#"><i class="fas fa-bars"></i></Link></div>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEw06nFnrBXIByKqMgxzIP11olZ7BI9JFvdAQW583RhjwD0DMNag" class="img-fluid" alt="Pandas"></img></div>

        <div class="float-right">
        <Link to="/widgetHeading"><i class="fas fa-cog"></i></Link>
        <Link to="#"><i class="fas fa-bars"></i></Link></div>
        <div>
        <p>Lorem, ipsum dolor sit amet consectetur <Link to="http://nationalzoo.si.edu/Linknimals/giant-panda"> adipisicing elit. Non, </Link>ratione quia exercitationem vero rem quod deserunt expedita, harum provident necessitatibus placeat odit dolorum error ipsum veritatis? Distinctio omnis accusamus et cumque temporibus sequi sapiente veniam commodi, ad, dolorum eius itaque numquam voluptas quas? Et aliquid facere labore, eveniet aperiam cumque.</p>
        </div>

        <div class="float-right">
        <Link to="/widgetHeading"><i class="fas fa-cog"></i></Link>
        <Link to="#"><i class="fas fa-bars"></i></Link></div>
        <h4>Unbelievable once-in-a-lifetime experience playing with the giant pandas, only in China</h4>

        <div class="float-right">
        <Link to="/widgetYouTube"><i class="fas fa-cog"></i></Link>
        <Link to="#"><i class="fas fa-bars"></i></Link></div>
        <div><iframe name="video" src="https://www.youtube.com/embed/jyG9ZhkAQyc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      

        <div class="float-right">
        <Link to="/widgetHeading"><i class="fas fa-cog"></i></Link>
        <Link to="#"><i class="fas fa-bars"></i></Link></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis repellendus minus cupiditate, iure necessitatibus, aliquam fugiat assumenda quae reprehenderit quos quaerat ipsam iusto expedita? Quaerat animi doloremque reprehenderit eius unde officia illum aperiam. Quidem amet, vero tenetur eos, itaque praesentium illo consectetur animi provident sunt dignissimos vel voluptates consequuntur?</p>
        
        <nav class="navbar navbar-light bg-light">
        <div class="full-width">
        <i class="fas fa-play text-primary"></i>
        <i class="fas fa-eye text-primary"></i>
        <Link class= "float-right" to="./user/Profile"><i class="fas fa-user text-primary"></i></Link>
        </div>
        </nav>


        
        
<footer>
<p>Note: The image, paragraphs, and YouTube video shown above are only for illustration purposes. You can use your image, paragraphs, and YouTube video
</p>
</footer>     
</div>
</div>
    )
  }
}
