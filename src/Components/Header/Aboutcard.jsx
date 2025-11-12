import "./aboutcard.css"

export default function Aboutcard(props) {
  return (


        <div className='about-card'>
          <div className="name">name:<p id="name">{props.name}</p></div> <br/>
          <div className="age">age: <p id="age">{props.age}</p></div> <br/>
          <div className="city">city: <p id="city">{props.city}</p></div> <br/>
          <div className="profession">profession: <p id="profession">{props.profession}</p></div> <br/>
          </div>
  )
}
