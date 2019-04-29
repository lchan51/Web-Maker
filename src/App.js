import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/user/Login";

function App() {
  return (
    <Router className="app">
      <Route exact path="/" component={Login} />
      <Route exact path="/" component={Profile} />
    </Router>
  );
}

export default App;
