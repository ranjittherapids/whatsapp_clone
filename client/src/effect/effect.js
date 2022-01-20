import React from 'react';
import {BrowserRouter,Switch,Route,NavLink} from "react-router-dom"
import './effect.css'
export default function Effect() {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
  return <div>
  <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
   <nav className="navbar" onClick={e => e.stopPropagation()}>
     <div className="nav-container">
       <NavLink exact to="/" className="nav-logo">
         CodeBucks
         <i className="fa fa-code"></i>
       </NavLink>
       <ul className={click ? "nav-menu active" : "nav-menu"}>
         <li className="nav-item">
           <NavLink
             exact
             to="/"
             activeClassName="active"
             className="nav-links"
             onClick={click ? handleClick : null}
           >
             Home
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink
             exact
             to="/about"
             activeClassName="active"
             className="nav-links"
             onClick={click ? handleClick : null}
           >
             About
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink
             exact
             to="/blog"
             activeClassName="active"
             className="nav-links"
             onClick={click ? handleClick : null}
           >
             Blog
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink
             exact
             to="/contact"
             activeClassName="active"
             className="nav-links"
            onClick={click ? handleClick : null}
           >
             Contact Us
           </NavLink>
         </li>
       </ul>
       <div className="nav-icon" onClick={handleClick}>
         <i className={click ? "fa fa-times" : "fa fa-bars"}>click here</i>
       </div>
     </div>
   </nav>
 </ div>
}
 