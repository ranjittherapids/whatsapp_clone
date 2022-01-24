import React ,{useState,useEffect}from 'react';

export default function Componentc({ok}) {
    const [render,setrender] =  useState("component c rerender")
    const [rendercount,setrendercount] =  useState(1)
    useEffect(()=>{
         
            setrender("component c rerender again")
            setrendercount(rendercount+1)
        
    },[])
  return <div className='  '>
      wow i am component C<span> {rendercount} {render}</span>
     
  </div>;
}
