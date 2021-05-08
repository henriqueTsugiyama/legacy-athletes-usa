import React, {useState, useEffect} from 'react';
import './style.css';

export const ToggleButton = ({selected, toggleSelected}) => {
    
    return(
        <div  
        className="toggle-container"
        onClick={toggleSelected}
        >
            <div className={`dialog-button ${selected ? "" : "disabled"}`}> 
                {selected ? "Spanish": "English"}
            </div>
            
        </div>
    )
}