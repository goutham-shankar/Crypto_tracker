
import React, { useState, useEffect } from 'react';
import './Navbar.css'
import image from '../avathar.png'
import qr from './shankarqr.png'

function Navbar() {
  



  return (
    

    <div>
      

      <nav class="navbar navbar-dark bg-transparent">
        <a class="navbar-brand" href="#">CRYPTO TRACKER</a>
        
        <ul>
          <a class='button' href="#popup" class='ml-auto'>
            <img src={image} class="rounded-circle img-fluid ms-auto " onClick={"#popup"} /></a></ul>

        <div class="container">

          <div class="popup" id="popup">
            <div class="popup-inner bg-transparent">


              <div class="popup__text">
                <img src={image} class="rounded-circle img-responsive" onClick={"#popup"} />
                <h1>shankar</h1>
                <p>Hi 👋, I'm Shankar
                  I'm a Web developer💻,Cyber Security Enthusiast from India 
                </p>
                
                <div class="footer-social-icons">
                  <h4 class="_14">Follow Me on</h4>
                  <ul class="social-icons">
                    <li><a href="https://twitter.com/__Shankar__g__?t=gSm1LnGZndYa4rA0zJorkg&s=09" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
   
                    <li><a href="https://www.instagram.com/_shankar_g_/?utm_medium=copy_link" class="social-icon"> <i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/gouthamsankar-v-316538229" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/shankarg1" class="social-icon"> <i class="fa fa-github"></i></a></li>
                  </ul>
                  
                </div>
                <p >Website is created with react js & CoinGecko Api<i class='fab fa-react'></i> </p>
                <p>Scan To Open This Website  On  Mobile </p>
                <img src={qr} class="qr"  />
               
             

              </div>
              <div>

              </div>
              <a class="popup__close" href="#">❌</a>
            </div>
          </div>
        </div>



      </nav>

    </div>
  )

}

export default Navbar;


