import "./header.css"
import { Link } from "react-router-dom";
import logo from "./pexels-steve-1981468.jpg"
import Clock from "../Clock";

export default function Header() {
  
  return (
   <div className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="pic"></img>
          </Link>
        </div>
        <ul className="header-title">
          <li>
            <Link to="/about">About As</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/photo">Photo </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
<div className='date'>
          
      <Clock />
      
    </div>
      </div>
    </div>
  )
}
