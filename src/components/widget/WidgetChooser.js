import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid"

export default class WidgetChooser extends Component {


  createWidget = (type) => { 
  const {uid, wid, pid } = this.props.match.params
  const newWidget = {
    _id: uuid (),
    name: "",
    widgetType: type,
    pageId: pid,
    text: "",
    size: 1,
    width: "",
    url: ""
  }
    this.props.addWidget(newWidget);
    this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget/${newWidget._id}`)
}


  render() {
    const {uid, wid, pid } = this.props.match.params

    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed top">
          <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget`}>
            <i className="float-left fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand mb-01 h1>">Choose Widget</span>
        </nav>

        <div className="container">
          <ul className="list-group">
            <li className="list-group-item">
            <button onClick={this.createWidget.bind(this, "HEADING")} to={`/user/${uid}/website/${wid}/page/${pid}/widget/`}> Header</button>
            </li>

            <li className="list-group-item">
              <Link to="#">Label</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">HTML</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Text Input</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Link</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Button</Link>
            </li>

            <li className="list-group-item">
              <Link onClick={this.createWidget.bind(this, "IMAGE")}>Image</Link>
            </li>

            <li className="list-group-item">
              <Link onClick={this.createWidget.bind(this, "YOUTUBE")}>YouTube</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Data Table</Link>
            </li>

            <li className="list-group-item">
              <Link to="#">Repeater</Link>
            </li>
          </ul>
        </div>

        <nav className="navbar navbar-light bg-light fixed-bottom">
          <div className="full-width">
            <Link className="float-right" to={`/user/${uid}`}>
              <i className="fas fa-user text-primary" />
            </Link>
          </div>
        </nav>
        </div>
    );
  }
}
