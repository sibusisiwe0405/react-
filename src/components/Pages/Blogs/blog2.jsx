import React from 'react'
import "./blogstyles.css"
import { Link } from "react-router-dom";

export default function blog2() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    
      return(

<div className="writing">
<div>
      <button onClick={scrollToTop} id="myBtn" title="Go to top">Top</button>
      <span className="Prev"><Link to="/blog1">Prev</Link></span>
      <span className="next2"><Link to="/blog3">Next</Link></span>
      <p className="Heading2">
        Brainstorming</p>
       
    </div>
    <br/>
  <p>
    Web APIs?.. This was my biggest nightmare last year. It made me rethink whether I really wanted to be a developer however I really did like the idea of them. How they functioned and allow a developer to sort of use other people’s code to pull information. 
    I believe they allow for advanced fun and interactive websites which is something I want to be able to make with ease at that. I have dedicated this year to fully learning JavaScript and APIs so that I am no longer afraid to attempt to make the websites I envision. 
    This fear they did limit me last year and I would like to believe that it was because I was still new to developing and now that I know and have seen the works of APIs I am determined to thoroughly learn and understand them and their conventions.
  </p>
  <p>
    Speaking about conventions, this week's reading was about conventions and context, and how these concepts have been interpreted and understood by different people. When doing a reading, I like to interpret it in a way I understood it or take a definition that made sense to me. Understanding other scholars' definitions is also important, but understanding it in my own way helps me. So when it comes to conventions, I understand them as set practices that have been established over time. Conventions make up the fundamentals of a certain practice, and in order to understand something, you need to understand the conventions of that given thing.
    For example, to be an artist, you need to fully understand the conventions of art that have come before your time. The reading and the video for this week made me really think about where I stand with knowing code, especially JavaScript. 
    I came to realize that for me to be a master of my craft, I need to understand the fundamentals, the conventions of this practice.
  </p>
  <p>
    When it comes to contextualizing my idea for the type of internet/web art I want to create, I have been a bit all over the place. 
    What I do know is that for my web art, I want to do something animation-based that involves color changes and interactivity.  
    I want to create a coloring-in website, in a sense. I am not sure if this actually makes sense, but with the research I have been doing, I have been getting some ideas.
    I would want the website to start off very plain or rather minimal, and as the user interacts with the website, they add color to it. This can be done either by hovering over the objects or using their mouse to color back and forth over the object to add color to it.
  </p>
  <p>
    I liked this UI designer's minimal and liquid animated website, <a href="https://eumray.com/Links" className="blinks">eumray.com</a>. 
    I found it quite creative how they made their animated images, and I would like to follow a simple design like that. For the color aspect of my website, I liked what <a href="//www.lironmoran-interiors.com/Links" className="blinks">lironmoran-interiors</a> did on their website. 
    How when you hover over the image, it changes color. I am still doing a lot of research so that I can fully understand the depth of my idea and how to implement it. 
    I really do hope that I don't get to change my mind because of being overwhelmed and scared of the code, as I usually am.
  </p>
</div>

      ) 
    }

