import React, { Component } from "react";
import { Link } from "react-router-dom";
import WidgetHeading from "./WidgetHeading";
import WidgetImage from "./WidgetImage";
import WidgetYouTube from "./WidgetYouTube" 


export default class WidgetEdit extends Component {
    state={
    name: "",
    text: "",
    size: "",
    widgetType: "",
    width: "",
    url: "",
    uid: "",
    wid: "",
    pid: "",
    widgets: []
  }

componentDidMount(){
  this.getWidget(this.props.match.params.wgid);
  this.setState({
    uid: this.props.match.params.uid,
    wid: this.props.match.params.wid,
    pid: this.props.match.params.pid
  })
}
  getWidget = (wgid) => {
    let currentWidget;
    for(let widget of this.props.widgets){
      if(widget._id === wgid){
        currentWidget=widget;
        break;
      }
    }
    this.setState({
    name: currentWidget.name? currentWidget.name :"",
    text: currentWidget.text,
    size: currentWidget.size,
    widgetType: currentWidget.widgetType,
    width: currentWidget.width,
    url: currentWidget.url
    });
  }

  onChange = e => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault();
    const {name, size, text, url, width, widgetType, uid, wid, pid} = this.state;
    const newWidget = {
      _id: this.props.match.params.wgid,
      name,
      size: parseInt(size),
      text, 
      url, 
      width, 
      widgetType
    }
    this.props.editWidget(newWidget);
    this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget`)
  }

  onDelete = () => {
    const {uid, wid, pid} = this.state;
    this.props.deleteWidget(this.props.match.params.wgid);
    this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget`)
  }

render() {
  
      const {name, text, size, width, widgetType, url, uid, wid, pid} = this.state;

        if(widgetType==="HEADING"){
        return(
        <WidgetHeading 
          name={name}
          text={text}
          size={size}
          width={width}
          widgetType={widgetType}
          url={url}
          uid={uid} 
          pid={pid} 
          wid={wid}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onDelete={this.onDelete}/>);

      } else if(widgetType==="IMAGE"){
        return (
        <WidgetImage
          name={name}
          text={text}
          size={size}
          width={width}
          WidgetType={widgetType}
          url={url}
          uid={uid} 
          pid={pid} 
          wid={wid} 
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onDelete={this.onDelete}/>);

      } else {
      return (
      <widgetYouTube
        name={name}
        text={text}
        size={size}
        width={width}
        widgetType={widgetType}
        url={url}
        uid={uid} 
        pid={pid} 
        wid={wid}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onDelete={this.onDelete}/>
      )
      }
    }
  }
