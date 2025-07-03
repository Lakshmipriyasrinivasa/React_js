import React from 'react'
// import Piri from './bb.jsx'
const aa = (props) => {
  const d=props.a
  return (
    <div>
      {/* lakshmipriya */}
      {/* <Piri/> */}

      {/* {props.b.name} 
      {props.b.age} */}

      {/* {props.b[0].name}   object into array
      {props.b[1].age} */}
  
        {d.map((a)=>(
            <div key={a.id}>
            {a.name}                      
            {a.age}
            </div>
        ))}



    </div>
  )
}

export default aa
