import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./contact.css";
import foto1 from "../Image/06-22-46-25-risunkov-s-nestandartnymi-o_pbvjl.jpg";
import foto2 from "../Image/06-21-04-25-risunkov-s-nestandartnymi-o_szmrl.jpg";
import foto3 from "../Image/06-21-57-25-risunkov-s-nestandartnymi-o_wojqn.jpg";
import foto4 from "../Image/06-22-43-25-risunkov-s-nestandartnymi-o_zxyjv.jpg";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <img src={foto1} alt=""></img>
        <p className="name">John Doe </p>
        <p className="info">Email: johndoe@example.com</p>
        <p className="info">Phone: (123) 456-7890</p>
        <p className="info">Address: 123 Main St, Anytown, USA</p>
      </div>
      <div className="contact-container">
        <img src={foto2} alt=""></img>
        <p className="name">John Doe </p>
        <p className="info">Email: johndoe@example.com</p>
        <p className="info">Phone: (123) 456-7890</p>
        <p className="info">Address: 123 Main St, Anytown, USA</p>
      </div>
      <div className="contact-container">
        <img src={foto3} alt=""></img>
        <p className="name">John Doe </p>
        <p className="info">Email: johndoe@example.com</p>
        <p className="info">Phone: (123) 456-7890</p>
        <p className="info">Address: 123 Main St, Anytown, USA</p>
      </div>
      <div className="contact-container">
        <img src={foto4} alt=""></img>
        <p className="name">John Doe </p>
        <p className="info">Email: johndoe@example.com</p>
        <p className="info">Phone: (123) 456-7890</p>
        <p className="info">Address: 123 Main St, Anytown, USA</p>
      </div>
      <div className="back">
        <Link to="/">
          <img src={home} alt=""></img>
        </Link>
      </div>
    </div>
  );
}
