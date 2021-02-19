import React, { useState } from 'react';
import './index.scss'

const Collapase = ({title,content}) => {
   const [state,setState] =  useState(false);
    const handleClick =()=>{
        setState((prevState)=> !prevState);
    }
    return (
        <div className={`collapse ${state ?'collapse_active' :''}`}>
            <div className="collapse_title" onClick={handleClick}>
                <p>{title}</p>
                <div className="triangle"></div>
            </div>
            <div className="collapse_content">
             {content}
            </div>
        </div>
    );
};

export default Collapase;