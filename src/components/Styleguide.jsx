import React from 'react'
import './Styleguide.css';
const Styleguide = () => {
  return (
    <div>
      <h1>Design Process</h1>
      <p className='headings'>For this website my overall idea an inspirations have not changed much, however the concept and UI are slightly different from the previous site. I wanted to create a website coloring book where i can change the background color using a color picker as the user interacts and engages with it. 
            The site in and of itself was/is to be considered internet art.</p>
            
            <p class="headings">Below is my planning process for my previous website where i created a mood board and concept board to jot down my ideas and the vision i had in mind for the site. This new react website is an extention of my previous site which is why i have included the previous concept as a reference.
                Previously I wanted to have a site where it starts off plain in black and white and when the user interacts with the site and clicks on buttons it leaves color as they go. For my current site i have changed this and i want to make the user switch the background color by choosing a color from a color palette.
                 I feel that this gives the illusion that the user is able to intercat with site using their desired color and be able to have a coloful looking website.
                I also wanted elements such as hover effets that reveal color behind a B&W or blurry image. The hover effects would have added to the visual elements of the site as they would have had different shapes. 
                The concept board shows examples and explanation of the different elements of the site.
                A critical reflection can be found in the blog section.
            </p>
            <div className="column">
  <img src="./Images/moodboard.png" className="stylePic" alt="Initial Hpage" style={{ width: '50%' }} />
  <img src="./Images/concept.png" className="stylePic" alt="Concept idea" style={{ width: '50%' }} />
</div>
<p className='headings'>Below I have added my new mood board and concept idea which shows a visualization of my brainstorming, inspirations and new ideas. </p>
<div className='column'>
<img src="./Images/new moodboard.png" className="stylePic" alt="New Hpage" style={{ width: '50%' }} />
  <img src="./Images/newconcept.png" className="stylePic" alt="NewConcept idea" style={{ width: '50%' }} />
</div>
<div>
  <p className="Wheading">WireFrames</p>
  <p className="headings">First image - Home page.</p>
  <p className="headings">Second image (to the right) - Blogs.</p>
  <p className="headings">Third image (bottom left) - Each blog page.</p>

  <p className="headings">A critical reflection can be found under the blogs section where the design process of UI/UX is explained.</p>
  <img src="./Images/Wireframes.png" className="WPic" alt="WireFrames" style={{ width: '50%' }} />
</div>

            
      </div>
   
  );
}
  


export default Styleguide