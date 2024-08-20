import React from 'react';
import playlist from "../assets/video-playlist.png";

const Landing = () => {
  return (
    <div className='landing'>
      <div className="landing-container">
        <div className="landing-logo">
          <img className='landing-title-icon' src={playlist}></img>
          <h3 className='landing-title'>Channel</h3>
        </div>
        <button className='landing-btn'>LOGIN</button>
        <button className='landing-btn'>Create Channel</button>
        <div className="text-right">
          <p className='forget-password'>Forget Password!</p>
        </div>
      </div>
      <hr className='landing-hr'/>
    </div>
  )
}

export default Landing