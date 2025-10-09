import { Link } from "react-router-dom"
import home from "../Home/home.png"
import "./contact.css"  

export default function Contact() {
  return (
    <div className="contact">
    
    
    <h1>Contact</h1>
    <div className="back">
          <Link to="/"><img src= {home} alt=""></img></Link>
          
          </div>
    </div>
  )
}
