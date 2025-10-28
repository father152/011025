import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./sumu.css"


export default function Sumu() {
  return (
    <div className='sumu'>
    
    <h1>Sumu</h1>
    <div className='sumu-container'>
      <h2>Welcome to Sumu!</h2>

      
    </div>




    <div className="back">
            <Link to="/">
              <img src={home} alt=""></img>
            </Link>
          </div>
    
    </div>
  )
}
