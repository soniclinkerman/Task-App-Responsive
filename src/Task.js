import React, {Component} from "react"
import Increment from "./Increment"
import "./Task.css"

class Task extends Component{
    render(){

        return(
            <div>
                <div className="container">

                    <div className="col">
                <img className="icon" src={this.props.icon}/>
                <h4>{this.props.task}</h4>
                <Increment/>
                </div>
                


                </div>

            </div>
            
        )
    }
}

export default Task