import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import UserManage from "./components/user/UserManage";
import Register from "./components/user/Register";
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew.js";
import WebsiteEdit from "./components/website/WebsiteEdit.js";
import PageEdit from "./components/page/PageEdit";
import PageNew from "./components/page/PageNew";
import PageList from "./components/page/PageList";
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";
import axios from "axios"

class App extends Component {
  
  loggedIn = async() => {
    const res = await axios.get("/api/loggedIn");
    return res.data}


  render() {
   
    
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/user/:uid" render={props => <Profile{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/manage" render={props => <UserManage{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/user/:uid/website" render={props => <WebsiteList{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/user/:uid/website/new" render={props => <WebsiteNew{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/user/:uid/website/:wid" render={props => <WebsiteEdit{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/user/:uid/website/:wid/page" render={props => <PageList{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/user/:uid/website/:wid/page/new" render={props => <PageNew{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/user/:uid/website/:wid/page/:pid" render={props => <PageEdit{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/user/:uid/website/:wid/page/:pid/widget" render={props => <WidgetList{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" render={props => <WidgetChooser{...props} loggedIn={this.loggedIn}/>}/>
            <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" render={props => <WidgetEdit{...props} loggedIn={this.loggedIn}/>}/>   
        </Switch>
      </Router>
    );
    }
  }
export default App;