import React from 'react';
import './Navbar.css';
import image from '../avathar.png';
import qr from './shankarqr.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-transparent">
        <a className="navbar-brand" href="#">CRYPTO TRACKER</a>
        
        <ul>
          <a className="button ml-auto" href="#popup">
            <img src={image} className="rounded-circle img-fluid ms-auto" alt="Profile" />
          </a>
        </ul>

        <div className="container">
          <div className="popup" id="popup">
            <div className="popup-inner bg-transparent">
              <div className="popup__text">
                <img src={image} className="rounded-circle img-responsive" alt="Profile" />
                <h1>shankar</h1>
                <p>
                  Hi 👋, I'm Shankar
                  I'm a Web developer💻, Cyber Security Enthusiast from India 
                </p>
                
                <div className="footer-social-icons">
                  <h4 className="_14">Follow Me on</h4>
                  <ul className="social-icons">
                    <li><a href="https://twitter.com/__Shankar__g__?t=gSm1LnGZndYa4rA0zJorkg&s=09" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/_shankar_g_/?utm_medium=copy_link" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/gouthamsankar-v-316538229" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/shankarg1" className="social-icon"> <i className="fa fa-github"></i></a></li>
                  </ul>
                </div>
                <p>Website is created with react js & CoinGecko Api<i className="fab fa-react"></i></p>
                <p>Scan To Open This Website On Mobile</p>
                <img src={qr} className="qr" alt="QR Code" />
              </div>
              
              <a className="popup__close" href="#">❌</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
