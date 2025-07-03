import {useCallback,useState} from 'react';
import Buttonback from './buttonback'

const callback = () => {
    const [count,setCount]=useState(0);

    const Increment=useCallback(()=>{
        setCount((count)=>count+1)
    },[]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={Increment}>Increment</button><br></br>
      <Buttonback Increment ={Increment}/>
    </div>
  )
}

export default callback
