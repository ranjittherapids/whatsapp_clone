import React, {useEffect,useRef } from "react";
import { useDispatch } from 'react-redux';
import Login from './components/Login'
import Home from './page/Home';
import Effect from "./effect/responsiveNavar";
import Effect1 from "./effect/fadeup";
import BlurEffect from "./effect/blurEffect";
import Componenta from "./react_magic/componenta";
import Wowman from "./react_magic/wowman";
import Blog_create from "./react_magic/blog_create";
import Showblog from "./react_magic/showblog";
import { io } from "socket.io-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  // const dispatch = useDispatch()
  // const socket = useRef(io('http://localhost:8000',{ transports: ["websocket",'polling']}))
  // useEffect(() => {
  //   dispatch({type:"CONNECT_SOCKET",
  // payload:socket})
  // }, [dispatch])
  return     <Router>
  <Routes>
    <Route path="/login" caseSensitive={false} element={<Login />} />
    <Route path="/home" caseSensitive={false} element={<Home />} />
    {/* <Route path="/" caseSensitive={false} element={<Login />} /> */}
    {/* <Route path="/" caseSensitive={false} element={<Effect/>} /> */}
    <Route path="/" caseSensitive={false} element={<Blog_create/>} />
    <Route path="/show" caseSensitive={false} element={<Showblog/>} />
  </Routes>
</Router>
 
}
