import React from "react";
import "./Footer.css";
import githubLogo from "../assets/images/github-logo.jpg";
import linkedinLogo from "../assets/images/linkedin-logo.jpg";
import stackoverflowLogo from "../assets/images/stackoverflow-logo.jpg";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 My Portfolio</p>
            <div>
                <a href="https://github.com/ASgithub11" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub Logo" className="footer-icon" />
                </a>
                <a href="https://linkedin.com/in/aisha-siddiqa" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn Logo" className="footer-icon" />
                </a>
                <a href="https://stackoverflow.com/users/27184586/aisha-siddiqa" target="_blank" rel="noopener noreferrer">
                    <img src={stackoverflowLogo} alt="Stack Overflow Logo" className="footer-icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
