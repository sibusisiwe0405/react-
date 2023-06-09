import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Blogs from "./components/Blogs.jsx";
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
          <Link to="./"><li>Home</li></Link>
          <Link to="./blogs"><li>Blog</li></Link>
          <Link to="./netart"><li>NetArt</li></Link>
          <Link to="./styleguide"><li>Design</li></Link>
              </ul>
            </div>
            </div>
  
        </nav>
      
      <Routes>
        <Route exact path="/" component = {Home}/>
        <Route  path="/Blogs" component = {Blogs}/>
        <Route exact path="/Netart" component = {Netart}/>
        <Route exact path="/Styleguide" component = {Styleguide}/>
        </Routes>
      
        <Home/>
        <Blogs/>
        <Netart/>
        <Footer/>
        
    </div>
    
  );
}
}

export default App;