import React from "react";
import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./kharkiv.css";

export default function Kharkiv() {
  return (
    <div className="kharkiv">
      <h1>Kharkiv</h1>
      <div className="kharkiv-container">
        <h2>Welcome to Kharkiv!</h2>
        <div className="first">
          <img src="https://picsum.photos/id/165/600/400" alt="Kharkiv" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
            sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
            vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
            convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa
            nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel
            class aptent taciti sociosqu. Ad litora torquent per conubia nostra
            inceptos himenaeos.
          </p>
        </div>
        <div className="second">
         
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
            sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
            vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
            convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa
            nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel
            class aptent taciti sociosqu. Ad litora torquent per conubia nostra
            inceptos himenaeos.
          </p>
           <img src="https://picsum.photos/id/167/600/400" alt="Kharkiv" />
        </div>
        <div className="third">
          <img src="https://picsum.photos/id/166/600/400" alt="Kharkiv" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor
            sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
            vitae pellentesque sem placerat. In id cursus mi pretium tellus duis
            convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa
            nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel
            class aptent taciti sociosqu. Ad litora torquent per conubia nostra
            inceptos himenaeos.
          </p>
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
