import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./photo.css";


export default function Photo() {
  return (
    <div className="photo">
      
<div className="photo-container">
<h1>Photo</h1>
<p>hjklhjlk,hjlk,hjlk,hjkl,hjlk,hjlk,hjlk,</p>
</div>







      <div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
    </div>
  );
}
