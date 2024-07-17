import React from "react";
import './style.css'

let projects = [
        {   image: <img src="./images/mzaziconnect.jpg" alt="" />,
            title:"MzaziConnect",
            description:"Our app simplifies assignment tracking and provides information on nearby shops where you can find the necessary materials for your child's studies. "
        },
        {   image: <img src="./images/Greenkiosk.jpg" alt="" />,
            title:"GreenKiosk",
            description:"Our app simplifies assignment tracking and provides information on nearby shops where you can find the necessary materials for your child's studies. "
        },
        {   image: <img src="./images/billiz.jpg" alt="" />,
            title:"Billiz",
            description:"Our app simplifies assignment tracking and provides information on nearby shops where you can find the necessary materials for your child's studies. "
        },
        {   image: <img src="./images/billiz.jpg" alt="" />,
            title:"Billiz",
            description:"Our app simplifies assignment tracking and provides information on nearby shops where you can find the necessary materials for your child's studies. "
        }
]
function Projects (){
    return(
        <div className="projects" id="my-projects">
            <div className="projects-header">
                <h1 className="main-heading">Recent Projects</h1>
                <hr/>
            </div>
            <div id="projects-content">
                {
                    projects.map((item,index)=>(
                        <div key={index} id="projectsContainer">
                            <i id="image">{item.image}</i>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Projects;