import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Effect1() {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
  return <div className="border border-danger">
       <div data-aos="fade-up" className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div data-aos="fade-up"  className="m-5 p-5 border-dark border">helo i am ranjit</div>
       <div className="m-5 p-5 border-dark border">helo i am ranjit</div>

  </div>;
}
