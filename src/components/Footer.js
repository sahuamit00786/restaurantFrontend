import React from 'react'
import logo from '../resto/Logo.svg'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const Footer = () => {
  return (

    <div className='footer-wrapper'>
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={logo} alt="" />
            </div>
            <div className="footer-icons">
                <TwitterIcon/>
                <LinkedInIcon/>
                <FacebookIcon/>
                <YouTubeIcon/>
            </div>
        </div>
        <div className="footer-section-two">
        <div className="footer-section-columns">
        <span>Careers</span>
            <span>Testimonials</span>
            <span>Work</span>
          </div>
          <div className="footer-section-columns">
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
          </div>
          <div className="footer-section-columns">
            <span>244-5333-7783</span>
            <span>amit@0611</span>
            <span>order@1234</span>
          </div>
          <div className="footer-section-columns">
            <span>Terms & Conditions</span>
            <span> Privacy Policy</span>
          </div>
        </div>

        <a href="#home">
             <ArrowUpwardIcon style={{fontSize:'38px',color:'black',position:'sticky'}} />
        </a>

    </div>
    
  )
}

export default Footer