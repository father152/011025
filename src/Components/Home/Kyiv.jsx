import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./kyiv.css"


export default function Kyiv() {
  return (
    <div className='kyiv'>
    
    <h1>Kyiv</h1>
    <div className='kyiv-container'>
      <h2>Welcome to Kyiv!</h2>

      
    </div>




    <div className="back">
            <Link to="/">
              <img src={home} alt=""></img>
            </Link>
          </div>
    
    </div>
  )
}
