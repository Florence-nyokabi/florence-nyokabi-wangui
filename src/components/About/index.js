import React from "react";
import './style.css';
import { MdOutlineFileDownload } from "react-icons/md";

function About() {
    return (
        <div className="about" id="about-section">
            <br />
            <br />
            <div className="home-divs">
                <div className="home-div-one">
                    <span className="span-dot"></span>
                    <h1 className="name"> Florence Wangui</h1>
                    <br />
                    <h1 className="title">
                        Software Engineer & 
                        <br />
                        QA Expert
                    </h1>
                    <p className="about-me">
                        While I may be at the beginning of my journey, my enthusiasm for backend and 
                        Android development knows no bounds. I thrive on the excitement of learning 
                        and implementing the latest trends and technologies to craft seamless user experiences.
                    </p>
                    <div className="resume-button">
                        <a href="/public/documents/resume.pdf" download>
                            <button>
                                Resume <MdOutlineFileDownload />
                            </button>
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
            <br />
            <br />
        </div>
    );
}

export default About;
