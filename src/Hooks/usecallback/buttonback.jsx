import React,{useState} from 'react'

const buttonback = ({Increment}) => {
    console.log("Butttonback component rendered");
    
    const[cart,setcart]=useState(0)
    const Incrent=()=>{
        setcart(cart+1)
    }  
    return (
    <div>
      <button onClick={Increment}>Increment from Buttonback</button>
      <p>{cart}</p>
        <button onClick={Incrent}>+</button>
    </div>
  )
}

export default React.memo(buttonback)
