import React from "react";
import './style.css';
import { MdOutlineFileDownload } from "react-icons/md";

function About() {
    return(
    <div className="about" id="about-section">
        <div className="home-divs">
            <div className="home-div-one">
                <span className="span-dot"></span>
                {/* <h1 className="welcome">Hi, there! I am </h1> */}
                <h1 className="name"> Florence Nyokabi Wangui</h1>
                <h1 className="journey">
                    Software Engineer & 
                    <br/>
                    Quality Assurance Expert
                </h1>
                <p className="our-app">
                While I may be at the beginning of my journey, my enthusiasm for backend and 
                Android development knows no bounds. I thrive on the excitement of learning 
                and implementing the latest trends and technologies to craft seamless user experiences.
                </p>
                <div className="resume-button">
                    <a href="/public/Florence Wangui - Curriculum Vitae.pdf" download>
                    <button>Resume  < MdOutlineFileDownload /></button>
                    </a>
                </div>
            </div>
            <div className="home-div-two">
                <div className="child-background" data-testid="child-background">
                </div>
            </div>
            <div className="dot-division">
                <span className="span-dot-two"></span>
            </div>
        </div>
        
    </div>
);
    
}
export default About;