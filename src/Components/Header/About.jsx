import React from 'react'
import { Link } from "react-router-dom";
import home from "../Home/home.png"
import "./about.css"



export default function About() {
  return (
    <div className="about">
    <h1>About</h1>
    <div className='first'>

      <div className='first1'>
         <h2>Technologies </h2>
        <p>This project was developed by <b>Gustavo Rios</b> as part of the curriculum for the <b>Full Stack Developer</b> course at <b>Henry</b>. It serves as a comprehensive demonstration of the skills and knowledge acquired throughout the program.</p>
        <p>The application is built using <b>JavaScript</b>, <b>React</b>, <b>Redux</b>, <b>Node.js</b>, <b>Express</b>, and <b>PostgreSQL</b>. It showcases a variety of functionalities, including user authentication, data management, and dynamic content rendering.</p>
        <p>Special thanks to the instructors and peers at Henry for their support and guidance during the development of this project.</p>
      </div>
      <div className='first2'>
        <h2>Technologies Used</h2>
        <p>This project was developed by <b>Gustavo Rios</b> as part of the curriculum for the <b>Full Stack Developer</b> course at <b>Henry</b>. It serves as a comprehensive demonstration of the skills and knowledge acquired throughout the program.</p>
        <p>The application is built using <b>JavaScript</b>, <b>React</b>, <b>Redux</b>, <b>Node.js</b>, <b>Express</b>, and <b>PostgreSQL</b>. It showcases a variety of functionalities, including user authentication, data management, and dynamic content rendering.</p>
        <p>Special thanks to the instructors and peers at Henry for their support and guidance during the development of this project.</p>
      </div>
        
      
    </div>

    
    <div className="back">
          <Link to="/"><img src= {home} alt=""></img></Link>
          
          </div>
    </div>
    
  )
}
