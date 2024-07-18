import React from 'react';
import './style.css';

import { IoLogoInstagram, IoLogoLinkedin} from "react-icons/io";
import { FaGithub  } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";


function Footer() {
    return (
    <div className="footer-container" id="footer-container">
        <br/>
        <div className="footer-icons" id="footer-icons">
            <div className="footer-contact" id="footer-contact">
                <span>CONTACT ME</span>
                <ul>
                    <li className='c-li'>florencenyokabiwangui@gmail.com</li>
                    <div className='icons'>
                        <a href='https://www.instagram.com/flozzy_wangu.i'>
                            <IoLogoInstagram className='icon' data-testid="instagram-icon" />
                        </a>
                        <a href='https://www.linkedin.com/in/florence-nyokabi'>
                            <IoLogoLinkedin className='icon' data-testid="linkedin-icon" />
                        </a>
                        <a href='https://github.com/Florence-nyokabi'>
                            <FaGithub className='icon' data-testid="Github-icon"/>
                        </a>
                        <a href='https://x.com/Flozzy_wangui'>
                            <BsTwitterX className='icon' data-testid="TwitterX-icon"/>
                        </a>
                    </div>
                </ul>
            </div>

        </div>

        <br />

        <hr className="footer-hr" />

        <div className="footer-p">
            <p>&copy; 2024 Florence Nyokabi Wangui</p>
        </div>

    </div>
    
);
}
export default Footer;