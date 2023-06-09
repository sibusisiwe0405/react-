import './footer.css'; // Import the CSS file
import React, { Component } from 'react'

// YourComponent.js
class Footer extends Component {
  render(){
  return (
    <div className='container'>
<footer>
  
  <div className="footer-content">
    <h4>Company</h4>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="./Blogs/blogss.html">Blogs</a></li>
      <li><a href="netart.html">Net-Art</a></li>
      <li><a href="styleGuide.html">Design</a></li>
    </ul>
  </div>
  <div className="footer-content">
    <h4>Get help</h4>
    <ul>
      <li><a href="netart.html">Net-Art</a></li>
    </ul>
  </div>
  <div className="footer-content">
    <h4>Contact us</h4>
    <div className="social-links">
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-linkedin-in"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
    </div>
  </div>
  
</footer>
</div>

  )
  }
}
export default Footer;
