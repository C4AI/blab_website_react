import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import HeroSection from './components/HeroSection.js';
import Home from './components/Home.js';
import Blab from './components/Blab.js';
import Carousel from './components/Carousel.js';
import BlueAmazonia from './components/BlueAmazonia.js';
import Team from './components/Team.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Carousel/> */}
      {/*<Banner/> */}
      <HeroSection/>
      <Home/>
      <Blab />
      <BlueAmazonia/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
