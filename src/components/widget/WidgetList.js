import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios"

export default class WidgetList extends Component {
    state= {
        uid: "",
        wid: "",
        pid: "",
        widgets: [],
    }
    

    async componentDidMount() {
        await this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            pid: this.props.match.params.pid
        })
        this.filterWidgets(this.state.pid);
    }

    filterWidgets = async (pid) => {
        const res= await axios.get(`/api/page/${pid}/widget`)
        this.setState({
            widgets: res.data
        })
    }


render() {
  const {uid, wid, pid, widgets} = this.state
  return (

      <div>
            <nav className="navbar navbar-light fixed-top bg-light full width">
            <Link className="color-black" to={`/user/${uid}/website/${wid}/page`}>
            <i className="fas fa-chevron-left" /></Link>
            <span className="navbar-brand">Widgets</span>
            <Link className="color-black" to={`/user/${uid}/website/${wid}/page/${pid}/widget/new`}>
            <i className="fas fa-plus" /></Link>
          </nav>

          <div className="container-fluid">
              {
                widgets.map(
                (widget) => {
                switch(widget.widgetType){

                case "HEADING":
                return (
                    <div key={widget._id}>
                    <div className="float-right">
                    <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}>
                    <i className="fas fa-cog" /></Link>
                    <span> <i className="fas fa-bars" /></span>
                    </div>
    
                    <div>                           
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                    </div>
                   </div>
            
                    )
                                  
                    case "IMAGE":
                    return (
                    <div key={widget._id}>
                    <div className= "float-right">
                    <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}>
                    <i className="fas fa-cog"/></Link>
                    <span><i className="fas fa-bars" /></span>
                    </div>
                    <div>
                    <img className="img-fluid" src={widget.url} alt="" width={widget.width}/>
                    </div>
                    </div>
                   
                    )
                    
                        case "YOUTUBE":
                        return (
                        <div key={widget._id}>
                        <div className="float-right">
                        <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/${widget._id}`}>
                        <i className="fas fa-cog" /></Link>
                        <span><i className="fas fa-bars" /></span>
                        </div>
                                                      
                        <div className="embed-responsive embed-responsive-16by9" style={{width: widget.width}}>
                        <iframe
                            src={widget.url}
                            title={widget._id}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen/>
                            </div>
                            </div>
                                )  
                            
                default:
                    return null;
                }
                      }
                  )
              }
          
        </div>
        <nav className="navbar navbar-primary bg-primary fixed-bottom float-right">
        <div className="full-width">
        <Link to={`/user/${uid}`}><i className=" float-right fas fa-user"/>
        </Link>
            </div>
            </nav>
            </div>
  );
}
}