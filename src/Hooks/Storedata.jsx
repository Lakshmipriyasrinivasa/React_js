import React, { useState } from 'react'
// import Show from './showdata'
const Storedata = () => {
    const [users,setusers]=useState([])

    const [user,setUser]=useState({
        id:"",
        name: "",
    });
    const handleChange=(e)=>{
        const{name,value}=e.target;
        
    setUser({...user,[name]:value})
    };
    const submit=()=>{
        console.log(user);
        users.push(user);
        console.log(users);
       setUser({
        id:"",
        name:"",
       })
    //    console.log(users);
    }
  return (
    <div>
 <label>id</label>
        <input
        type='text'
        name="id"
        value={user.id}
        onChange={handleChange}/><br></br>

        <label>Name</label>
        <input
        type='text'
        name='name'
        value={user.name}
        onChange={handleChange}/><br></br>

        <button onClick={submit}>submit</button>


        {/* <Show user={users}/> */}

        {users.map((u)=>(
            <div key={u.id}>
            {u.id}{u.name}
            </div>
        ))}
      
    </div>
  )
}

export default Storedata
