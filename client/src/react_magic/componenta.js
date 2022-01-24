import React, { useEffect, useState,useCallback } from 'react';
import Componentb from './componentb';

export default function Componenta() {
   const [state,setstate]= useState(1);
   const [multi,setmulti]= useState()
    const ok=()=>{
        console.log("ok")
    }
   
  return <div className='border border-dark '>
      wow i am component A  
      
     
      
  </div>;
}
