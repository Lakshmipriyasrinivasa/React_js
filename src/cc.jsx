import React from 'react'
import Priya from './aa.jsx'

const cc = (props) => {
  
  const b = props.c
  return (
    <div>
      {/* {props.a.name} */}
      {/* srinivasan */}
lakshmi

         {b.map((a)=>(
            <div key={a.id}>
            {a.name}
            {a.age}
            </div>
        ))} 


        <Priya a={b}/>

    </div>
  )
}

export default cc
