import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./photo.css";
import Fotocard from "./Fotocard";
import Datafoto from "./Datafoto";

export default function Photo() {

const Fotocards = () => {

    return Datafoto.map(({ id, name, year, image }) => (
      <Fotocard
        key={id}
        id={id}
        name={name}
        year={year}
        image={image}
      />
    ));
  }

  return (
    <div className="photo">
     <h1>Photo</h1>
     
     <div className="photo-container">
       <Fotocards />
      </div>







      <div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
    </div>
  );
}
