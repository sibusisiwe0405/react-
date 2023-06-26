import React from 'react'
import "./blogstyles.css"
import { Link } from "react-router-dom";


export default function blog3()  {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return(

<div className="writing">
<div>
      <button onClick={scrollToTop} id="myBtn" title="Go to top">Top</button>
      <span className="Prev"><Link to="/blog2">Prev</Link></span>
      <span className="next2"><Link to="/blog4">Next</Link></span>
      <p className="Heading2">AI? Artists?</p>
      
       
    </div>
    <br/>
    <br/>
      <p>
      Despite the legal requirement to attribute individual writers, Foucault cautions us that these reconstructions are false and highly dependent on the text itself and our own views. 
      According to Foucault and other post-structuralist thinkers who followed him, an artist is not simply a person who existed in a specific time and place, but rather a concept that viewers an artwork to help them understand it (Buchanan, 2001, p. 17).
      </p>
      <p>
      In contrast, artist Leonel Moura represents a newer entrant in the realm of machine-human boundaries.
       Moura's career benefits from the expanding acceptance over the past three decades of a contextual definition of art, initially proposed by Marcel Duchamp, which focuses on the history, evolution, and innovative contributions of art itself.</p>
      <p>
      Moreover, there have been interesting developments in the realm of AI-generated personalized soundtracks. Pierre Barreau, for example, discusses the potential for AI to compose personalized music tailored to individual listeners. 
      This opens up new possibilities for AI in creative endeavors where human creativity may not be able. 
      However, as AI software and hardware become more advanced, the works created by AI may take away from the original author's software, raising questions about authorship and the role of AI in the creative process (Barreau, 2018).</p>
      
      <p>
      The question of authorship in computational art extends beyond legal considerations. It goes into the subjective interpretation of artworks and the construction of artistic personas. 
      Viewers often attribute traces of "personality" in the artwork to the meta-artist rather than the machine itself. 
      This suggests that the viewer's perception and preconceived notions play a significant role in shaping the understanding and appreciation of computational art.</p>
    <br/>
    </div>
    

)
        
    }

