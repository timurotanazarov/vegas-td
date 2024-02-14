import React from 'react';
import YouTube from '../../assets/icons/YouTubeIcon';
import Instagram from '../../assets/icons/InstagramIcon';
import Facebook from '../../assets/icons/FacebookIcon';
import Twitter from '../../assets/icons/TwitterIcon';

function footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top__icons">
          <a href="" className="footer-top__link">
            <YouTube />
          </a>
          <a href="https://www.instagram.com/t1mur__dev/" className="footer-top__link">
            <Instagram />
          </a>
          <a href="" className="footer-top__link">
            <Facebook />
          </a>
          <a href="" className="footer-top__link">
            <Twitter />
          </a>
        </div>
      </div>
      <marquee direction="left">T&D ® 2024 / Developed by VEGASmq</marquee>
    </div>
  )
}

export default footer