import React, {Component} from "react"
import "./Time.css";
let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
class WeekDay extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let msg;
        let msg2;
        var d = new Date()
        var m = d.getMonth();
        var number = d.getDate();

        // WeekDay
        switch(d.getDay()) {
            case d = 0:
                msg = (
                    days[0]
                )
                break;
            case d = 1:
                msg = (
                    days[1]
                )
                break;
            case d = 2:
                msg = (
                    days[2]
                )
                break;

             case d = 3:
                msg = (
                    days[3]
                )
                break;
            case d = 4:
                msg = (
                    days[4]
                )
                break;
            case d = 5:
                msg = (
                    days[5]
                )
                break;

            case d = 6:
                msg = (
                    days[6]
                )
                break;       
        }

        // Month
        switch(m) {
            case m = 0:
                msg2 = (
                    month[0]
                )
                break;
            case m = 1:
                msg2 = (
                    month[1]
                )
                break;
            case m = 2:
                msg2 = (
                    month[2]
                )
                break;

             case m = 3:
                msg2 = (
                    month[3]
                )
                break;
            case m = 4:
                msg2 = (
                    month[4]
                )
                break;
            case m = 5:
                msg2 = (
                    month[5]
                )
                break;

            case m = 6:
                msg2 = (
                    month[6]
                )
                break; 
             case m = 7:
                msg2 = (
                    month[7]
                )
                break;
            case m = 8:
                msg2 = (
                    month[8]
                )
                break;
            case m = 9:
                msg2 = (
                    month[9]
                )
                break;

             case m = 10:
                msg2 = (
                    month[10]
                )
                break;
            case m = 11:
                msg2 = (
                    month[11]
                )
                break;     
        }


            
        return(
            <div>
    <h4>{msg},{msg2} {number}</h4>


            </div>
        )
    }
}

export default WeekDay