import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./fivefloor.css"




export default function Fivefloor () {
return (
    <div className="fivefloor">
    
    <h1>Five Floor</h1>
<div className=" fivefloor-container" >
<h3>ATTENTION!</h3>


    <div className="back">
            <Link to="/">
              <img src={home} alt=""></img>
            </Link>
          </div>
          </div>
    </div>
)
}