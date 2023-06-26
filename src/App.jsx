import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Blogs from "./components/Pages/Blogs/Blogs.jsx";
import Blog1 from "./components/Pages/Blogs/blog1"
import Blog2 from "./components/Pages/Blogs/blog2"
import Blog3 from "./components/Pages/Blogs/blog3"
import Blog4 from "./components/Pages/Blogs/blog4"
import Blog5 from "./components/Pages/Blogs/blog5"
import Blog6 from "./components/Pages/Blogs/blog6"
import Netart from "./components/Netart.jsx";
import Footer from "./components/Footer.jsx";
import Styleguide from "./components/Styleguide.jsx";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import React,{ Component, useEffect } from "react";
import { Link } from "react-router-dom";
import ColorItem from './color-item';
import { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

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
      <ThemeSwitcher/>
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
        <Route  path="/Blog1" element = {<Blog1/>}/>
        <Route  path="/Blog2" element = {<Blog2/>}/>
        <Route  path="/Blog3" element = {<Blog3/>}/>
        <Route  path="/Blog4" element = {<Blog4/>}/>
        <Route  path="/Blog5" element = {<Blog5/>}/>
        <Route  path="/Blog6" element = {<Blog6/>}/>
        
        </Routes>
     
        <Footer/>
        
        
    </div>
    
  );
}



export default App;