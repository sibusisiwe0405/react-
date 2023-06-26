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
    <br/>
      <p>
      In this reflection I will be looking at each section of my new react website and analyzing my design choices and elements. 
For my UI/UX I wanted to create an instinctive, coherent and user-friendly website where the user was provided with accurate information to perform actions and navigating the website. 

      </p>
      <p>
      The idea I had for this website just like my previous one was making an ‘online coloring book’. The website is supposed to function as internet art on its own. 
      To do this wanted to have it look as colorful and artistic as possible, from the fonts to the colors and interactions used. I wanted to have a fun and funky website with where the user is able to switch to their desired theme and font so it is more satisfying to them as they have the agency to pick how they want to view the website.
       The website was to start off very minimal with a blue aesthetic and at the bottom of the page, a color picker and light and dark mode toggle that allows you to change your theme and at the end of it all the website would be a colorful website of the users choosing. 
      I felt that these functions would give the user a feel of getting a plain coloring book and adding color on each page as you go to make it look pretty. 
      </p>
      <br/>
      <p>
      The overall website is user-friendly and has familiar website features that are easy to use and understand such as the standard navigation bar and the footer. This is done to create a feeling of familiarity in the user. 
      The home page is very minimal with the starting color theme background and fun font. 
      Currently the page is minimal with a fun font and color gradient with a toggle function which the user interacts with to change the color/theme of the website. 
      </p>
      <p>For the blog page the aesthetic remains minimal and simple with styled cards with a color glow effect when you hover over them. 
        Each blog post has a previous and next button for easy access to other posts instead of the user going back and clicking the blogs section on the navigation. 
        The buttons correspond with the chosen color theme because I wanted to have the website have colors that complement each other instead of having colors that don’t look good together/match. 
        I wanted to have a gradient color effect for the text when the user schemes over the writing and hovers over it would have changed to different colors. 

      </p>
      <br/>
      <p>
      For my internet artwork I have black and white page which the user can color with the colors and brushes in the nav bar. The style guide had my planning process with brainstorming and concept ideas.
       The planning process for my internet art can be found in blog 4 where I reflect on the process leading to my current outcome. In my design section I have added images of my mood board and concept idea that details what I wanted to achieve and what I have achieved. 
       The API for the internet art has given me a number of issues where I could not scroll on the website and some of my information now showing. 
      </p>
      <p>
      For the most part the website in responsive however my navbar is not and I am not sure why that is the case because my code did not give me an error so I am assuming that there is something I did not add or it is in the wrong file. Overall I am not too happy with my design as my vision did not come to pass, react was a challenge for me however I like that it has so many functions it can perform and the way it behaves. 
      It really did let me down because I believe I had such a cool concept for my website with it being a coloring book and feel that if I had done it in normal Javascript it would have been really nice. Better luck for future projects though.
      </p>
      <br/>
    </div>
    )

        
    }

