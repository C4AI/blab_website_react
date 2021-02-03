import React from 'react';
import logo_usp from '../assets/img/logo_usp.png';
import logo_ibm from '../assets/img/logo_ibm.png';
import logo_fapesp from '../assets/img/logo_fapesp.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <span className="copyright">&copy; C4AI - Center for Artificial Intelligence 2021</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/groups/C4AI.USP">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/groups/8980226/">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.youtube.com/channel/UCBg_eunUlxU5b95vyg_mxww">
                                    <i className="fa fa-youtube"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com/C4AI1">
                                <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                                <a href="#privacy_policy">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#terms_of_use">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <a className="col-md-4" href="https://www5.usp.br/"><img src={logo_usp} height="65" alt="USP"/></a>
                <a className="col-md-4" href="https://www.ibm.com/br-pt"><img src={logo_ibm} height="65" alt="IBM"/></a>
                <a className="col-md-4" href="https://fapesp.br/"><img src={logo_fapesp} height="65" alt="FAPESP"/></a>
            </div>
        </footer>
    );
}
export default Footer;