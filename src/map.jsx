import React from 'react'
import Srini from './cc.jsx'
const map = () => {
    const student=[{
        id:1,
         name:'priya',
         age:20
    },
{
    id:2,
    name:'raghul',
    age:21
},
{
    id:3,
    name:'Elago',
    age:22
},{
    id:4,
    name:'kaviya',
    age:25
}]
  return (
    <div>
        {student.map((a)=>(
            <div key={a.id}>
            {a.name}
            {a.age}
            </div>
        ))}

        <Srini c={student}></Srini>
      
    </div>
  )
}

export default map
