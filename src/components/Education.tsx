import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faUniversity, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../assets/styles/Education.scss';

function Education() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const cardWidth = current.children[0]?.clientWidth || 350;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const education = [
        {
            icon: faUniversity,
            degree: "Diploma in Programming and Data Science",
            field: "Data Science & Programming",
            institution: "Indian Institute of Technology, Madras",
            location: "Chennai, Tamil Nadu",
            duration: "May 2021 - May 2025",
            grade: "CGPA: 9.3 (Projects), 7.7 (Theory)",
            description: "Specialized in data analytics, machine learning, and modern web development. Completed hands-on projects including full-stack web apps and data science tasks.",
            highlights: [
                "Data analytics and machine learning focus",
                "Full-stack web development projects",
                "Strong project-based learning approach",
                "Modern web development techniques"
            ]
        },
        {
            icon: faUniversity,
            degree: "Bachelor of Engineering",
            field: "Information Technology",
            institution: "Pune Vidyarthi Griha's College of Engineering",
            location: "Pune, Maharashtra",
            duration: "May 2021 - May 2025",
            grade: "CGPA: 8.78",
            description: "Gained in-depth knowledge of software engineering, algorithms, databases, and Android development. Actively worked on projects and internships while maintaining a strong academic record.",
            highlights: [
                "Software engineering and algorithms",
                "Database management and design",
                "Android development expertise",
                "Strong academic performance with practical experience"
            ]
        },
        {
            icon: faSchool,
            degree: "Higher Secondary Education (HSC)",
            field: "Science Stream",
            institution: "St. Paul's Junior College of Science",
            location: "Maharashtra",
            duration: "May 2018 - May 2020",
            grade: "Percentage: 74%",
            description: "Completed higher secondary education with Science stream, building strong foundation in Physics, Chemistry, and Mathematics.",
            highlights: [
                "Science stream specialization",
                "Strong mathematical foundation",
                "Preparation for engineering entrance",
                "Academic excellence in core subjects"
            ]
        },
        {
            icon: faGraduationCap,
            degree: "Secondary School Certificate (SSC)",
            field: "General Education",
            institution: "Holy Family Convent High School",
            location: "Maharashtra",
            duration: "May 2008 - May 2018",
            grade: "Percentage: 96%",
            description: "Completed secondary education with excellent academic performance and strong foundation in core subjects.",
            highlights: [
                "Outstanding academic performance (96%)",
                "Strong foundation in all subjects",
                "Leadership and communication skills",
                "Foundation for higher studies"
            ]
        }
    ];

    return (
        <div className="container" id="education">
            <div className="education-container">
                <h1>Education</h1>
                <div className="education-scroll-container">
                    <button className="scroll-button left" onClick={() => scroll('left')}>
                        <ArrowBackIosIcon />
                    </button>
                    <div className="education-grid" ref={scrollRef}>
                        {education.map((edu, index) => (
                            <div key={index} className="education-card">
                                <div className="education-duration">
                                    <FontAwesomeIcon icon={faCalendar} className="duration-icon" />
                                    {edu.duration}
                                </div>
                                <div className="education-header">
                                    <FontAwesomeIcon icon={edu.icon} size="2x" className="education-icon" />
                                    <div className="education-title">
                                        <h3>{edu.degree}</h3>
                                        <h4>{edu.field}</h4>
                                    </div>
                                </div>
                                <div className="education-institution">
                                    <h4>{edu.institution}</h4>
                                    <div className="education-location">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                        {edu.location}
                                    </div>
                                </div>
                                <div className="education-grade">
                                    {edu.grade}
                                </div>
                                <p className="education-description">{edu.description}</p>
                                <ul className="education-highlights">
                                    {edu.highlights.map((highlight, highlightIndex) => (
                                        <li key={highlightIndex}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-button right" onClick={() => scroll('right')}>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Education;
