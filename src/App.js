import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Register from "./components/user/Register";
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew.js";
import WebsiteEdit from "./components/website/WebsiteEdit.js";
import PageEdit from "./components/page/PageEdit";
import PageNew from "./components/page/PageNew";
import PageList from "./components/page/PageList";
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit"

class App extends Component {

  render() {
    
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/user/:uid" component={Profile} />
            <Route exact path="/user/:uid/website" component={WebsiteList}/>
            <Route exact path="/user/:uid/website/new" component={WebsiteNew}/>
            <Route exact path="/user/:uid/website/:wid" component={WebsiteEdit}/>
            <Route exact path="/user/:uid/website/:wid/page" component={PageList}/>
            <Route exact path="/user/:uid/website/:wid/page/new" component={PageNew}/>
            <Route exact path="/user/:uid/website/:wid/page/:pid" component={PageEdit}/>
            <Route exact path="/user/:uid/website/:wid/page/:pid/widget" component={WidgetList}/>
            <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" component = {WidgetChooser}/>
            <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" component = {WidgetEdit}/>    
        </Switch>
      </Router>
    );
    }
  }
export default App;