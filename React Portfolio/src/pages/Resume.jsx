import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section className="resume">
            <h2>Resume</h2>
            <h3>Front-End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-End Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>SQL</li>
            </ul>
        </section>
    );
}

export default Resume;
