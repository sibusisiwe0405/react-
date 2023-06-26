import { Component } from "react";
import "./NavbarStyles.css";
import "./HomeStyles.css";
import React from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {

  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
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
            <div id="mobile" onClick= {this.handleClick}>
      <i id ="bar" className= {this.state.clicked? 'fas fa-times' : 'fas fa-bars'}></i>
      
     </div>
            </div>
  
        </nav>
      );
    }
  }
  
  export default Navbar;
  

            