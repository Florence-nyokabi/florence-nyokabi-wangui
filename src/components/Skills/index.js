import React from "react";
import { RiUserSearchLine } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import './style.css'

let info = [
    {   icons:<RiUserSearchLine/>,
        title:"Quality Assurance",
        content:"Empower schools with streamlined assignment management and parent communication. Our app facilitates efficient sharing of assignments, schedules, and announcements, strengthening the school community."
    },
    {   icons:<MdDevices/>,
        title:"Web Development",
        content:"Support teachers in providing a holistic learning experience. MzaziConnect enables teachers to easily share assignments, resources, and progress updates with parents, fostering collaboration and engagement."
    },
    {   icons:< MdDeveloperMode/>,
        title:"Mobile Development",
        content:"Engage parents as active partners in their child's education journey. With our app, parents can access assignments, track progress, and discover nearby shops for required materials, nurturing a supportive learning environment."
    }
    
]
function Skills(){
    return(
        <section id="my-skills">
            <div id="ambitions">
                <h1>Passionate about Data Science, ML, AI & DevOps</h1>
                <p>With a strong dedication to honing my skills, I'm on a mission to transform ideas into efficient code and be a part of innovative solutions.</p> 
            </div>
            <div id="content">
                {
                    info.map((item,index)=>(
                        <div key={index} id="blueContainer">
                            <i id="icon">{item.icons}</i>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
export default Skills;