import { Component } from "react";
import "./NavbarStyles.css";
import "./HomeStyles.css";
import React from "react";
import { Link } from "react-router-dom";


const Navbar =()=> {
  
      return (
        
        <nav>
          <div className="nav">
            <div>
              <ul id= "navbar">
          <Link to="./"><li>Home</li></Link>
          <Link to="./blogs"><li>Blog</li></Link>
          <Link to="./netart"><li>NetArt</li></Link>
          <Link to="./styleguide"><li>Design</li></Link>
              </ul>
            </div>
            </div>
  
        </nav>
      );
    }
    
  
  export default Navbar;
  

            