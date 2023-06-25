import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Blogs from "./components/Pages/Blogs/Blogs.jsx";

import Netart from "./components/Netart.jsx";
import Footer from "./components/Footer.jsx";
import Styleguide from "./components/Styleguide.jsx";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import React,{ Component, useEffect } from "react";
import { Link } from "react-router-dom";
import ColorItem from './color-item';
import { useState } from "react";

import "./styles.css";


const App =() => {


  const colors = ['#2d3436' , '#4834d4' , '#be2edd' , '#f9ca24' , '#6ab04c' , '#30336b'];

  const[state,setState] = useState(false)

  useEffect(() => {
const currentColor = localStorage.getItem('color')
console.log(currentColor)

  }, [])
    const setTheme = (color) =>{
      document.documentElement.style.setProperty('--bg-color' , color)
    }

    const setColor = (event) => {
      const currentColor = window.getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
      setTheme(currentColor);
      localStorage.setItem('color', currentColor);
    }

  
    
  return (

    
    <div className="App">
      <nav>
          <div className="nav">
            <div>
              <ul id= "navbar">
          <Link to="/"><li>Home</li></Link>
          <Link to="/Blogs"><li>Blog</li></Link>
          <Link to="/Netart"><li>NetArt</li></Link>
          <Link to="/Styleguide"><li>Design</li></Link>
              </ul>
            </div>
            </div>
  
        </nav>
        <div className={"color-switcher ${state && 'color-switcher--open'}"}>

          <button onClick={() => setState(prevState => !prevState)}><i 
          className="ri-settings-2-fill"></i></button>
          <h2 className="headingg">Select Color</h2>
        <div className="color-list"></div>
        {colors.map((color , idx) => <ColorItem key={idx} setColor={setColor}color = {color}/> )}
        </div>
      <Routes>
      
        <Route  path='/' element={<Home/>}/>
        <Route  path='/Blogs' element={<Blogs/>} />
        <Route path="/Blogs/blog1" element={<blog1/>}/>
        <Route  path="/Netart" element = {<Netart/>}/>
        <Route  path="/Styleguide" element = {<Styleguide/>}/>
        
        </Routes>
     
        <Footer/>
        
        
    </div>
    
  );
}



export default App;