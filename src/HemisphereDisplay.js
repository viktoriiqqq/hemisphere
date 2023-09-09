import React from 'react';
import './Hemisphere.css';
import northernPic from './image/nh.png'
import southernPic from './image/sh.png'


const hemishereConfig = {
    Northern : {
        text: 'it is northern hemisphere',
        picture:northernPic

    },
    Southern: {
        text: 'it is southern hemisphere',
        picture:southernPic
    }
}

const HemisphereDisplay = ( {latitude})  => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text,picture} = hemishereConfig[hemisphere]    

return (
    <div className={hemisphere}>
        <div className='ui raised text container segment'>
            <div className='image'>
                <img src={picture} alt='hemisohere pic'/>
            </div>
            <div className='ui teal bottom attached label'>
                <h1>{ text }</h1>
            </div>
        </div>
    </div>
        )
}


export default HemisphereDisplay;

