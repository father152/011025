import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./projects.css";

export default function Projects() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const arrays = array.map(n => (n % 2 === 0 ? n : "--"));
  const arrayss = array.reduce((sum, elem) => {
	return sum + elem;
}, 0);

  
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <p>{arrays}</p>
        <br></br>
        <p>{arrayss}</p>
      </div>

      <div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
    </div>
  );
}
