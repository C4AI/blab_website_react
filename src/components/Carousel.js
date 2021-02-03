import React from 'react'
import './Carousel.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';

const slideImages = [
    img1,
    img2,
    img3,
    img4,
    img5
  ];

function Carousel() {
    return (
        <div>
            <Slide easing="ease" arrows="false">
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[3]})`}}></div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[4]})`}}></div>
                </div>
            </Slide>
        </div>
    );
}
export default Carousel;