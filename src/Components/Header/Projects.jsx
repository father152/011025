import { Link } from "react-router-dom"
import home from "../Home/home.png"
import "./projects.css"


export default function Projects() {
  return (
    <div className="projects">
    
    Projects
    
    
    <div className="back">
              <Link to="/"><img src= {home} alt=""></img></Link>
              
              </div>
    
    </div>
  )
}
