import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Blogs from "./components/Pages/Blogs/Blogs.jsx";


import Netart from "./components/Netart.jsx";
import Footer from "./components/Footer.jsx";
import Styleguide from "./components/Styleguide.jsx";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import React,{ Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";


class App extends Component {
  render(){
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
        
      <Routes>
      
        <Route  path='/' element={<Home/>}/>
        <Route  path='/Blogs' element={<Blogs/>} />
        <Route  path="/Netart" element = {<Netart/>}/>
        <Route  path="/Styleguide" element = {<Styleguide/>}/>
        </Routes>
      
        
        
        
        <Footer/>
        
    </div>
    
  );
}
}

export default App;