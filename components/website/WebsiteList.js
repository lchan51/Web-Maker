import React, { Component } from 'react'

export default class WebsiteList extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-dark bg-primary fixed-top">
      <Link href="../user/profile.html"><i class="fas fa-chevron-left"></i></Link>
    <span class="navbar-brand mb-0 h1"> Websites </span>
    <Link class="float-right" href="website-new.html"><i class="fas fa-plus"></i></Link>   
    </nav>

  <section>
    <section class="container-left">
      <ul class="list-group">

        <li class="list-group-item">
        <Link href="../page/page-list.html">Address Book App</Link>
        <Link class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></Link>
        </li>
        <li class="list-group-item">
            <Link href="../page/page-list.html">Blogger</Link>
            <Link class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></Link>
            </li>

            <li class="list-group-item">
                <Link href="../page/page-list.html">Blogging App</Link>
                <Link class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></Link>
                </li>
                <li class="list-group-item">
                    <Link href="../page/page-list.html">Script Testing App</Link>
                    <Link class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></Link>
                    </li>
                  </ul>
</section>

<nav class="navbar navbar-dark bg-primary fixed-bottom">
<div class="full-width">
<Link class= "float-right" href="../user/profile.html"><i class="fas fa-user"></i></Link>
</div>
  </nav>
        
</div>
    )
  }
}