import React from 'react'
import "./blogstyles.css"
import { Link } from "react-router-dom";


export default function blog4()  {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return(

<div className="writing">
<div>
      <button onClick={scrollToTop} id="myBtn" title="Go to top">Top</button>
      <span className="Prev"><Link to="/blog3">Prev</Link></span>
      <span className="next2"><Link to="/blog5">Next</Link></span>
      <p className="Heading3">
        UI + UX </p>
        
    </div>
    </div>
    )

        
    }

