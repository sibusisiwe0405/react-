import React from 'react'
import "./blogstyles.css"
import { Link } from "react-router-dom";
import canvas from "../../Images/canvas.png"
import newmoodboard from "../../Images/newmoodboard.png"
import newconcept from "../../Images/newconcept.png"

export default function blog5() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  return (
<div className="writing">
<div>
      <button onClick={scrollToTop} id="myBtn" title="Go to top">Top</button>
      <span className="Prev"><Link to="/blog4">Prev</Link></span>
      <span className="next2"><Link to="/blog6">Next</Link></span>
      <p className="Heading3">
        Artwork</p>
        
    </div>
    <br/>
  <p>
  
  After all the issues I have faced with react I am realizing that my first internet artwork was actually really good.
  I mentioned previously that it was small scale however I was quite impressed with it though there were issues but it was functional. 
As it stands I have been trying to get implement the same internet art in this new site however it gave me errors so I had to change it up.</p>

  <p>
  The idea was to have my whole website function as internet art on its own. I wanted to create a website coloring book essentially. I wanted to have the user interact with the website and leave traces of color as they go along. 
  After I realized that I will be needing more time and assistance with this idea I thought I needed to come up with a different idea which still aligns with the whole coloring book idea. 
  I then thought of a theme switcher that allows the user to change to dark or light mode and have a color picker that the user interacts with and changes the background theme. 
  For the internet art sections I have a page that the user can just color in and I was hoping I could be able to have a function that allows them to save it like my previous canvas. 
  </p>

  <img src={newmoodboard} className="stylePic" alt="New Moodboard"  />
  
 
  <img src={newconcept} className="stylePic" alt="NewConcept idea" style={{ width: '50%' }} />
  <p>

  Most of my research and planning is based around my first idea of making the website my web art so I created a mood board and concept board that explains the idea I had. 
  For the  internet artwork that I have currently I initially wanted to have a set drawing in the background of the canvas that the user can color in with the color of their choosing etc. This did not fully come together. </p>
  

  <p>
    Here is an example of what the canvas could have looked like with a black and white set image that the user adds color to: 
  </p>

    <img src={canvas} className="stylePic" alt="example" style={{ width: '50%' }} />
  
  <p>
    The artwork page has some glitches that I have not been able to fix at the moment where the mouse does not draw directly where it is pointed, and this affects the drawing process. 
    This section of the website does not have a footer because I wanted to make it look and feel like a plain white canvas like the painting app, and having a footer would have been a distraction. 
    Overall, I like this idea considering it is still a small scale experimental piece which I can still develop with feedback received. It could be a cool idea to fully develop and execute.
  </p>
  <br/>
</div>

  );
};


