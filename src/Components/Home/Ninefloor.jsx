import { Link } from "react-router-dom";
import home from "../Home/home.png";
import "./ninefloor.css"
import { useState } from "react";

export default function Ninefloor() {
 
  const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
    
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('blue');
  return (
    <div className='ninefloor'>
    <h1>Nine Floor</h1>
    <p>{doubled.join(" - ")}</p>
    <div>
      <p style={{ color }}>This text is {color}.</p>
      <button onClick={() => setColor(color === 'blue' ? 'red' : 'blue')}>
        Change Color
      </button>
    </div>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} >
        Click me
      </button>
    </div>
 

    <div className="back">
            <Link to="/">
              <img src={home} alt=""></img>
            </Link>
          </div>
    
    </div>
  )
}