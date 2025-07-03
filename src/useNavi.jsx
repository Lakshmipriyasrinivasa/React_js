import React from 'react'
import { useNavigate } from 'react-router-dom'
const useNavi = () => {
    const navigate=useNavigate()
    const redirec=()=>{
        navigate('/3')
    }
  return (
    <div>
      <div className='text-center'>
        <h1>Hey,I'm going to Redirect</h1>
        <button onClick={redirec}>Redirect</button>
      </div>
    </div>
  )
}

export default useNavi
