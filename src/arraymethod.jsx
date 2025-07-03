import React from 'react'

const arraymethod = () => {
    var users=[{
        name:"priya",
        age:23
    },
    {
    name:"divya",
    age:21
    },
    {
    name:"lakshmi",
    age:20
    }]
  return (
    <div>
      {users[1].name}
      {user=>users.name}


    </div>
  )
}

export default arraymethod
