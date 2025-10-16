import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import foto1 from "../../Components/Image/06-21-04-25-risunkov-s-nestandartnymi-o_szmrl.jpg"
import foto2 from "../../Components/Image/06-21-57-25-risunkov-s-nestandartnymi-o_wojqn.jpg"
import foto3 from "../../Components/Image/06-22-15-25-risunkov-s-nestandartnymi-o_teype.jpg"


export default function Home() {
  return (
    <div className="home">
            <h1>Home</h1>
      <div className="home-container">
     
      <div className="left-side">
      <h4>CONTENT</h4>     
      <div className="left-container">
              
              <ul className="left-title">
                <li className="dropdown">
                
                <a href="#">Region building</a>
                <div className="submenu">
                <ul>
               <li><Link to="/1">Poltava</Link></li>
               <li><Link to="/2">Kharkiv</Link></li>
               <li><Link to="/3">Sumu</Link></li>
               <li><Link to="/4">Kyiv</Link></li>
                 </ul>
                </div>
                 
                </li>
                <li className="dropdown2">
                
                <a href="#">House</a>
                <div className="submenu2">
                <ul>
               <li><Link to="/five">Five floor</Link></li>
               <li><Link to="/six">Six floor</Link></li>
               <li><Link to="/nine">Nine floor</Link></li>
               <li><Link to="/ten">Ten floor</Link></li>
                 </ul>
                </div>
                 
                </li>
                
                <li>
                  <Link to="/floor">Floor </Link>
                </li>
                <li>
                  <Link to="/flat">Flat</Link>
                </li>
              </ul>
      
            </div>
            <hr></hr>
<div className="left-1">
<h5>TITLE</h5>
<img src={foto1} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
</div>   <hr></hr>
<div className="left-1">
<h5>TITLE</h5>
<img src={foto2} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
</div>     <hr></hr>
<div className="left-1">
<h5>TITLE</h5>
<img src={foto3} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
</div>  <hr></hr>
      </div>
      <div className="centre-side">
      <h4>Main part</h4>
      </div>
      
 
      
    </div>
    </div>
  );
}
