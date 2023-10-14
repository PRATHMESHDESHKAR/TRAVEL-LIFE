import { Component } from "react";
import "./location.css";


class Locationdata extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="loc-text"><h2>
            {this.props.heading}
            </h2>
            <p>
            {this.props.text}
            </p>
            </div>
            <div className="image">
            <img alt="Locimg" src={this.props.img1} />
            <img alt="Locimg" src={this.props.img2} />
            </div>
            </div>
        )
    }
}
export default Locationdata;