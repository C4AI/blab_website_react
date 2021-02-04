import React, {useState} from 'react';
import logo from '../assets/img/logo192.png';

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
      if(window.scrollY >= 660){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={navbar ? 'navbar active' : 'navbar navbar-expand-lg navbar-dark fixed-top'} id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="http://c4ai.inova.usp.br/pt/home-2/">
              <img src={logo} style={{width:80, marginTop: 0}} />
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#blab">What is BLAB?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#blue_amazonia">What is Blue Amazonia?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}
export default Navbar;