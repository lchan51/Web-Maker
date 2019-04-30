import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Register from "./components/user/Register";
import WebsiteList from "./components/website/WebsiteList";
import PageEdit from "./components/page/PageEdit";


function App() {
  return (
    <Router>

      <Route exact path="/" component={Login} />
      <Route exact path="/login"component={Login} />
      <Route exact path="/register" component={Register}/>
      <Route exact path="/user/:uid" component={Profile}/>
      <Route exact path="/user/:uid/website" component={WebsiteList}/>
      <Route exact path="/user/:uid/website/:wid/page/:pid" component={PageEdit}/>
      
      </Router>
  
      );
}
export default App;
