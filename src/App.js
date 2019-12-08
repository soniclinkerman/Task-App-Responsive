import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';
import Code from "./icons/Code.png";
import react from "./icons/React.png";
import Course from "./icons/Course.png";
import WordPress from "./icons/Wordpress.png";
import Design from "./icons/Design.png";
import Fingerstyle from"./icons/Fingerstyle.png"
import Jazz from "./icons/Jazz.png"
import Study from"./icons/Study.png"
import WeekDay from './WeekDay';
function App() {

  return (
    <div className="App">
      <div className="section-one">
        <h1>Task App</h1>
        <WeekDay/>
        </div>

        <div className="container" >       
      <div className="columns" id="main">    
        <Task task={"React"} icon={react} />
        <Task task={"Study"} icon={Study}/>
        <Task task={"Fingerstyle"} icon={Fingerstyle}/>
        <Task task={"Jazz"} icon={Jazz}/>
        </div>
        
        <div className="columns" id="main">      
        <Task task={"Web Dev"} icon={Code}/>
        <Task task={"Design"} icon={Design}/>
        <Task task={"Website"} icon={WordPress}/>
        <Task task={"Course"} icon={Course}/>
        </div>

        <div className="columns" id="main">      
        <Task task={"Web Dev"} icon={Code}/>
        <Task task={"Design"} icon={Design}/>
        </div>

        </div>
 


      
    </div>
  );
}

export default App;
