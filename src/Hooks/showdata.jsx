import React from 'react'

const showdata = (props) => {
    const{user}=props
  return (
    <div>
      {user.map((v)=>(
        <div key={v.id}>
            {v.id}
            {v.name}
            </div>
      ))}
    </div>
  )
}

export default showdata
