import React, {useState,createContext} from 'react';
import Context3 from './usecontext3';

//create the context
export const ProContext=createContext();

const usecontext1 = () => {
    const [products,setproducts]=useState([
        {id:1,name:'Dosa',image:'',price:120},
        {id:1,name:'idly',image:'',price:60},
        {id:1,name:'pongal',image:'',price:80},
        {id:1,name:'poori',image:'',price:50},
    ])
  return (
    <div>
      <ProContext.Provider value={products}>
         <Context3/>
         </ProContext.Provider>     
    </div>
  )
}

export default usecontext1
