import React from 'react';
import './MyCSS.css';
import LinkedIn from '../Img/LinkedIn.png';
import skills from '../Img/skills.png';
import project from '../Img/project.png';
import contact from '../Img/contact.png';
function Body() {
    return (
        <div className=''>
            <div className='flexbox'>
                <div clsaaName='cardItem'><img src={LinkedIn} alt='LinkedIn' /><h3>LinkedIn</h3>
                    <ul>
                        <a href='https://www.linkedin.com/in/shuo-han-ba723822b/' target='_blank'><li>My Profile</li></a>
                        <a href='https://www.linkedin.com/in/shuo-han-ba723822b/recent-activity/' target='_blank'><li>My Certificates</li></a>
                    </ul>
                </div>
                <div clsaaName='cardItem'><img src={project} alt='project' /><h3>Projects links</h3>
                    <ul>
                        <a href='https://github.com/SelenaHan/midterm' target='_blank'><li>Student Card Project</li></a>
                        <a href='https://github.com/SelenaHan/lab5' target='_blank'><li>List of Album Project</li></a>
                    </ul>
                </div>
                <div clsaaName='cardItem'><img src={skills} alt='skills' /><h3>Skills</h3>
                    <ul>
                        <li>React</li>
                        <li>Java</li>
                        <li>Database</li>
                        <li>HTML/CSS/JS</li>
                    </ul>
                </div>
                <div clsaaName='cardItem'><img src={contact} alt='contact' /><h3>Contact me </h3>
                    <ul><li>Email: shuo.han@edu.sait.ca</li><li>Phone number: 403-400-0928</li><li>Address: 120 Varsity</li></ul></div>
            </div>
        </div>
    )
}

export default Body