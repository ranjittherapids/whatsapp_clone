import React, { useEffect, useState } from 'react';
import Componentc from './componentc';
export default function Componentb({state,setmulti,ok}) {
   const [render,setrender] =  useState("component b rerender")
   const [rendercount,setrendercount] =  useState(1)
    useEffect(()=>{
         
        setmulti(state*2)
    },[state])
  return <div className=' '>
      wow i am component B  <span>rendercoutn {rendercount} props{state}</span>
      <div className="m-5 p-5 border border-dark border-3">
       <Componentc ok={ok} /> 
      </div>
  </div>;
}
