import React from 'react';
import '../App.css';
import './HeroSection.css';
import video from '../assets/video/ocean.mov';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>BLAB</h1>
      <p>The Blue Amazonia Brain</p>
    </div>
  );
}

export default HeroSection;
