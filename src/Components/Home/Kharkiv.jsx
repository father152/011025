import React from 'react'
import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./kharkiv.css"


export default function Kharkiv() {
  return (
    <div className='kharkiv'>
    
    <h1>Kharkiv</h1>
    <div className='kharkiv-container'>
      <h2>Welcome to Kharkiv!</h2>

      
    </div>




    <div className="back">
            <Link to="/">
              <img src={home} alt=""></img>
            </Link>
          </div>
    
    </div>
  )
}
