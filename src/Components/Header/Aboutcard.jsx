import React from 'react'

export default function Aboutcard(props) {
  return (


        <div className='about-card'>
          name: {props.name} <br/>
          age: {props.age} <br/>
          city: {props.city} <br/>
          profession: {props.profession} <br/>
          </div>
  )
}
