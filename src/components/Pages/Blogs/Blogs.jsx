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
    <span className="card-header"><Link to="/Blogs/blog1">Thoughts on Net-Art</Link></span>
    <span className="card-body">We live in a time where things are forever changing.</span>
  </div>
</div>

<div className="feature-card card">
  <div className="img-cont">
    <span className="window"><h2>Week 4</h2></span>
    <img className="img" src="./Images/Blog2.jpg" alt="" />
  </div>
  <div className="content-cont">
    <span className="card-header"><a href="blog2.jsx">Brainstorming</a></span>
    <span className="card-body">I liked this UI designer's minimal and liquid animated website.</span>
  </div>
</div>

<div className="card left">
  <div className="img-cont">
    <span className="window"><h2>AI as Art</h2></span>
    <img className="img" src="./Images/Blog1.jpg" alt="" />
  </div>
  <div className="content-cont">
    <span className="card-header"><a href="/blog5.jsx">Can AI make art without artists?</a></span>
    <span className="card-body">An analysis and thoughts on the new world of AI</span>
  </div>
</div>

<div className="feature-card card">
  <div className="img-cont">
    <span className="window"><h2>Reflection</h2></span>
    <img className="img" src="../Images/Blog3.0.jpg" alt="" />
  </div>
  <div className="content-cont">
    <span className="card-header"><a href="blog3.jsx">UI/UX Critical Reflection</a></span>
    <span className="card-body">The UI and UX are important parts of designing a website.</span>
  </div>
</div>

<div className="card right">
  <div className="img-cont">
    <span className="window"><h2>1st Artwork reflection</h2></span>
    <img className="img" src="../Images/Blog3.0.jpg" alt="" />
  </div>
  <div className="content-cont">
    <span className="card-header"><a href="blog4.jsx">Artwork Reflection</a></span>
    <span className="card-body">The initial idea was to have my whole website function as internet art on its own.</span>
  </div>
</div>


    </div>
    
  );
}
}

export default Blogs
  