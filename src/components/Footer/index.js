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
            <br />
            <br />

            <div className="footer-contact" id="footer-contact">
                <span>CONTACT ME</span>
                <ul>
                    <li className='c-li'>florencenyokabiwangui@gmail.com</li>
                    <div className='icons'>
                        <IoLogoInstagram className='icon' data-testid="instagram-icon" />
                        <IoLogoLinkedin className='icon' data-testid="linkedin-icon" />
                        <FaGithub className='icon' data-testid="Github-icon"/>
                        <BsTwitterX className='icon' data-testid="TwitterX-icon"/>
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