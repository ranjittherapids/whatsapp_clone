import React, { useState,useEffect,useRef } from "react";
import { useDispatch } from 'react-redux';
import Login from './components/Login'
import Home from './page/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return     <Router>
  <Routes>
    <Route path="/login" caseSensitive={false} element={<Login />} />
    <Route path="/home" caseSensitive={false} element={<Home />} />
    <Route path="/" caseSensitive={false} element={<Login />} />
  </Routes>
</Router>
 
}
