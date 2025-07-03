import React, {useContext} from 'react'
import { ProContext } from './usecontext1'

const usecontext3 = () => {
    const products=useContext(ProContext);
  return (
    <div>
      <h3>context 3</h3>
      {products.map(product=>(
        <div key={product.id}>
            <h4>{product.name}</h4>
         <p>Price:${product.price}</p>
         </div>
      ))}
    </div>
  )
}

export default usecontext3
