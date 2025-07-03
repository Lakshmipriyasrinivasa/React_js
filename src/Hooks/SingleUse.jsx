import React, { useState } from 'react'

const SingleUse = () => {
    const [user,setname]=useState([
        {                                                        
            name:'priya',
            age:21,
        },
        {
            name:'Divya',
            age:20,
        },
    ]);

    const demo=()=>{
        user.push({
            name:'kalai',
            age:35
        });
        setname([...user])
    }
    console.log(user);
    
  
   
    // const demo=()=>{
    //     setname('raghul')
    // }
    // console.log(user);
    
  return (
    <div>
    {/* {user}
{age} */}

{/* {user[0].name}
{user[0].age} */}


{user.map((a)=>(
    <div key={a.id}>
        {a.name}
        {a.age}
        </div>
))}



    <button onClick={demo}>change</button>
    </div>
  )
}

export default SingleUse
