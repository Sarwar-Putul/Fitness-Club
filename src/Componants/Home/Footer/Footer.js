import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Weight Lifting</a></li>
                            <li><a href="#">Skil Development</a></li>
                            <li><a href="#">Fat Lose</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Gym</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Fitness Club</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                    <div className="col item social"><a href="#"><FontAwesomeIcon icon={faFacebook} /></a><a href="#"><FontAwesomeIcon icon={faTwitter} /></a><a href="#"><FontAwesomeIcon icon={faInstagram} /></a><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></div>
                </div>
                <p className="copyright">Fitness Club © 2021</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;