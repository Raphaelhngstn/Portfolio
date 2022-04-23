import React from 'react';
import './Footer.scss';
import linked from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';
import github from '../../images/github.png';
const Footer = () => {
  return (
    <div className='footer'>
        {/* <div className='footer-border'></div> */}
        <p>
        </p> © Raphael Honigstein 2022
        <div>
          <a href='https://www.linkedin.com/in/raphael-honigstein-b90730194/' target="_blank" rel="noreferrer noopener">
            <img className='footer-img' src={linked} alt="linkedin"/> 
          </a> 
          <a href='https://github.com/Raphaelhngstn' target="_blank" rel="noreferrer noopener">
            <img className='footer-img-git' src={github} alt="gmail"/> 
          </a>         
            <a href='https://twitter.com/raphaelhngstn' target="_blank" rel="noreferrer noopener">
              <img className='footer-img' src={twitter} alt="twitter"/> 
            </a>
            
            
        </div>
        
    </div>
  )
}


export default Footer;