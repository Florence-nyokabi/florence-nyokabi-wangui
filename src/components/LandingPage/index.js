import React from "react";
import './style.css';

function LandingPage() {
    return(
    <div className="landing-page">
        <div className="home-divs">
            <div className="home-div-one">
                <span className="span-dot"></span>
                <h1 className="welcome">Hi, there! I am </h1>
                <h1 className="name"> Florence Nyokabi Wangui</h1>
                <h1 className="journey">
                    Full Stack Engineer & 
                    <br/>
                    Software Quality Assurance Expert
                </h1>
                <p className="our-app">
                    Our app simplifies assignment tracking and provides information  on nearby
                    <br/>
                    shops where you can find the necessary materials for your child's studies.
                </p>
                <div className="images-div-one">
                    <img src="./images/playstore.png" alt="playstore"/>
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
export default LandingPage;