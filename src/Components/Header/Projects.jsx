import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./projects.css";
import girl from "../Home/b82e171512b51e24a23bb9d0cebfe8ca.jpg"




export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
<div className="girl">
  <img src={girl} alt=""></img>
</div>

       
      </div>

      <div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
    </div>
  );
}
