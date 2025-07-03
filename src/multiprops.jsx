import React from 'react'
import Priya from './aa.jsx'
const muliprops = () =>  {
    // var Students={
    //     name:"priya",
    //     age:25
    // }
  {
    var Students=[{
        name:"priya",
        age:25
    }]
  return (
    <div>
      {Students[0].name}   

        {/* {students.name} */}
      {/* <Priya b={students}/> */}
    </div>
  )
}
}

export default muliprops
