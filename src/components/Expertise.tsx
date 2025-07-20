import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobile, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import './../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Java",
    "JavaScript",
    "React.js",
    "Vue.js",
    "HTML5",
    "CSS3",
    "Bootstrap"
];

const labelsSecond = [
    "Android Studio",
    "Android Development",
    "UI/UX Design",
    "App Debugging",
    "Feature Integration",
    "Performance Optimization",
    "Chatbot Development"
];

const labelsThird = [
    "Flask",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "RESTful APIs",
    "Git",
    "Postman",
    "VS Code"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill card glass">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3>Frontend & Web Development</h3>
                        <p>Experienced in building responsive web applications using modern frameworks like React.js and Vue.js. Proficient in creating dynamic user interfaces with clean, maintainable code and following best practices.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill card glass">
                        <FontAwesomeIcon icon={faMobile} size="3x" />
                        <h3>Android Development</h3>
                        <p>Currently working at Ness Digital Engineering on LinkedIn's Android platform. Skilled in feature development, performance optimization, UI/UX enhancement, and debugging. Experience with chatbot development and app prototyping.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill card glass">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Backend & Database</h3>
                        <p>Proficient in server-side development using Flask and Spring Boot. Experience with both SQL and NoSQL databases, RESTful API development, and version control. Familiar with modern development tools and workflows.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;