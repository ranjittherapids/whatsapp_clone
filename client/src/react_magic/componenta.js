import React, { useEffect, useLayoutEffect, useState,  } from 'react';
import Componentb from './componentb';

export default function Componenta() {
 const [count,setcount] =  useState(1)
  // useEffect(()=>{
  //   console.log("'useeffect")
  // },[])
  useLayoutEffect(() => {
    console.log("'useLayoutEffect")
     return ()=>{
      console.log("' useLayoutEffect return ")
    }
  }, [count]);
  
   
  return <div className='border border-dark '>
      wow i am component A  
      <button onClick={()=>setcount(pre=>pre+1)}>add</button>
     
      
  </div>;
}
