import React,{useState,useMemo} from 'react'
function UseMemo() {
    const[number,setNumber]=useState(0)
    // const MultipliedValue=number*number
    const MultipliedValue=useMemo(()=>{
        return number*number
    },[number])
      
  return (
    <div>
      <h1>Square of {number}:{MultipliedValue}</h1>
      <button onClick={()=>setNumber(number+1)}>Increment Number</button>
    </div>
  )
}

export default UseMemo
