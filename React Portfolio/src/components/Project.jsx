import React from "react";
import "./Project.css";

const Project = ({title, image, deployedLink, githubLink}) => {
    return (
        <div className="project-card">
            <a href = {deployedLink} target="_blank" rel="noreferrer">
                <img src={image} alt={`${title} screenshot`} />  {/* Display the image */}
                <h3>{title}</h3>
            </a>
            <div className="project-links">
                <a href={githubLink} target="_blank" rel="noreferrer">
                <img src={githubLogo} alt="GitHub Logo" />
                </a>
            </div>
        </div>
    );
}

export default Project;
