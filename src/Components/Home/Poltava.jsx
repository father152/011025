import React from 'react'
import { Link } from "react-router-dom";
import home from "../Home/home.png";
import './poltava.css'

export default function Poltava() {
  return (
    <div className='poltava'>
    
    <h1>Poltava</h1>
    
    
    
    <div className="back">
            <Link to="/">
              <img src={home} alt=""></img>
            </Link>
          </div>
    
    </div>
  )
}
