import React from 'react'
import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./six.css"


export default function Sixfloor() {
  return (
    <div className='sixfloor'>
    <h1>Six Floor</h1>
    
    
    <div className="back">
            <Link to="/">
              <img src={home} alt=""></img>
            </Link>
          </div>
    
    </div>
  )
}
