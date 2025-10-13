import React from "react";
import "./home.css";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div className="home">
            <h1>Home</h1>
      <div className="home-container">
     
      <div className="left-side">
      <h4>CONTENT</h4>     
      <div className="left-container">
              
              <ul className="left-title">
                <li>
                  <Link to="/region">Region building</Link>
                </li>
                <li>
                  <Link to="/house">House</Link>
                </li>
                <li>
                  <Link to="/floor">Floor </Link>
                </li>
                <li>
                  <Link to="/flat">Flat</Link>
                </li>
              </ul>
      
            </div>
      </div>
      <div className="centre-side"></div>
      
 
      
    </div>
    </div>
  );
}
