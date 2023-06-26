import "./HomeStyles.css";

import React, { useState } from 'react';
import ReactPlayer from 'react-player';


const Home = () =>{

  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleColorPickerClick = () => {
    const color = prompt('Choose a color:');
    if (color) {
      handleColorChange(color);
    }
  };
  
  return (

      <div className="home">
        
        <h1>Adding Color</h1>
            
     <h3>to the dull moments.</h3> 

    
      
      </div>
      
  );
}


export default Home;