import React from 'react'
import { Link } from "react-router-dom";
import home from "../Home/home.png"
import "./about.css"
import Aboutcard from './Aboutcard';


export default function About() {
  return (
    <div className="about">
    <h1>About</h1>
    <Aboutcard
    name="Tom"
    age="28"
    city="Kharkiv"
    profession="Student" 
        /><hr></hr>
       <Aboutcard
    name="Vladyslav"
    age="18"
    city="Poltava"
    profession="Student" 
        />  

    
    <div className="back">
          <Link to="/"><img src= {home} alt=""></img></Link>
          
          </div>
    
    </div>
  )
}
