import React, {Component} from "react";
import "./Increment.css"

class Increment extends Component{
    constructor(props){
        super(props);
        this.state = {num: 0}

        this.addNum = this.addNum.bind(this);
    }

    addNum() {
        this.setState({num: this.state.num + 1})
        }

    render() {
        return (
            <div>
                <h1 className="number">{this.state.num}/9</h1>
                {this.state.num === 9 && <h2>Complete</h2>}
                {this.state.num !== 9 && <a href="#" className="btn" onClick={this.addNum}>Add</a>}
                </div>
        )
    }
}



export default Increment