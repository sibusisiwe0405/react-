import React, { Component } from 'react'
import "./blogstyles.css";
import { Link } from 'react-router-dom';





class Blogs extends Component {
  render(){
  return (
    <div>
      <h1>Theory blogs</h1>


      <div className="card left">
  <div className="img-cont">
    <span className="window"><h2>Week 3</h2></span>
    <img className="img" src="./public/Images/Blog1.jpg" alt="" />
  </div>
  <div className="content-cont">
    <span className="card-header"><Link to="/blog1">Thoughts on Net-Art</Link></span>
    <span className="card-body">We live in a time where things are forever changing.</span>
  </div>
</div>

<div className="feature-card card">
  <div className="img-cont">
    <span className="window"><h2>Week 4</h2></span>
    <img className="img" src="./Images/Blog2.jpg" alt="" />
  </div>
  <div className="content-cont">
  <span className="card-header"><Link to="/blog2">Thoughts on Net-Art</Link></span>
    <span className="card-body">I liked this UI designer's minimal and liquid animated website.</span>
  </div>
</div>

<div className="card left">
  <div className="img-cont">
    <span className="window"><h2>AI as Art</h2></span>
    <img className="img" src="./Images/Blog1.jpg" alt="" />
  </div>
  <div className="content-cont">
    <span className="card-header"><Link to="/blog3">Can AI make better artists?</Link></span>
    <span className="card-body">An analysis and thoughts on the new world of AI</span>
  </div>
</div>

<div className="feature-card card">
  <div className="img-cont">
    <span className="window"><h2>Reflection</h2></span>
    <img className="img" src="../Images/Blog3.0.jpg" alt="" />
  </div>
  <div className="content-cont">
    <span className="card-header"><Link to="/blog4">UI + UX Reflection</Link></span>
    <span className="card-body">The UI and UX are important parts of designing a website.</span>
  </div>
</div>

<div className="card left">
  <div className="img-cont">
    <span className="window"><h2>Artwork reflection</h2></span>
    <img className="img" src="../Images/Blog3.0.jpg" alt="" />
  </div>
  <div className="content-cont">
    <span className="card-header"><Link to="/blog5">UI + UX Reflection</Link></span>
    <span className="card-body">My website functions as internet art on its own.</span>
  </div>
</div>
<div className="feature-card card">
  <div className="img-cont">
    <span className="window"><h2>Essay</h2></span>
    <img className="img" src="./Images/Blog2.jpg" alt="" />
  </div>
  <div className="content-cont">
  <span className="card-header"><Link to="/blog6">Essay</Link></span>
    <span className="card-body">This is the essay written during the semester</span>
  </div>
</div>


    </div>
    
  );
}
}

export default Blogs
  