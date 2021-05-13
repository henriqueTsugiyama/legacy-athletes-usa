import React, {useState, useEffect} from 'react';
import './style.css';

export const ToggleButton = ({selected, toggleSelected}) => {
    
    return(
        <div  
        className="toggle-container"
        onClick={toggleSelected}
        >
            <div className={`dialog-button ${selected == 'en' ? "" : "disabled"}`}> 
                {selected == 'spa'? "English": "Spanish"}
            </div>
            
        </div>
    )
}