// UseState

import React,{useState} from 'react'
const Forms = () => {
   
     const[user,setUser]=useState({
        id:"",
        name:"",
     });
     const handleChange=(e)=>{
        const{name,value}=e.target;
        //name:" " =divya
        //id:" " =2
     
     setUser({...user,[name]:value});

     };
     const submit=()=>{
        console.log(user);
        
        setUser({
           id:"",
           name:"",
        });
     }

  return (
    <div className='text-center'>
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
    </div>
  )
}

export default Forms
