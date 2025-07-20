import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work card glass"
            contentStyle={{ background: 'transparent', color: '#ffffff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.2)' }}
            date="May 2025 - Present"
            iconStyle={{ background: '#3182ce', color: '#ffffff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ness Digital Engineering India (Raja Software Labs)</h4>
            <p>
              Working on the LinkedIn Android project. Handling end-to-end feature development, performance tuning, and seamless integration with UI components. Collaborating closely with cross-functional teams including QA, backend, and product design.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work card glass"
            contentStyle={{ background: 'transparent', color: '#ffffff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.2)' }}
            date="Jan 2025 - Apr 2025"
            iconStyle={{ background: '#3182ce', color: '#ffffff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Ness Digital Engineering India (Raja Software Labs)</h4>
            <p>
              Contributed to the LinkedIn Android project during internship. Focused on UI/UX enhancement, feature testing, and debugging issues to ensure a seamless user experience.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work card glass"
            contentStyle={{ background: 'transparent', color: '#ffffff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.2)' }}
            date="Aug 2023 - Oct 2023"
            iconStyle={{ background: '#3182ce', color: '#ffffff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Android Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Guruji AIR</h4>
            <p>
              Developed app prototypes for social media sharing and chatbot features. Built a chatbot prototype integrated within the app to improve user interaction. Implemented image sharing functionality for social platforms from within the mobile app.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

