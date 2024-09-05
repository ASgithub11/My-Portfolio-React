import React from "react";
import avatar from "/src/assets/images/avatar.jpg";
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <div className="container">
            <h1>About Me</h1>
            <img src={avatar} alt="placeholder" />
            <p>
                Hello, my name is <strong>Aisha Siddiqa</strong>. I am on my way to become a web developer with a passion for creating responsive web applications. I have knowledge of HTML, CSS, JavaScript, Node.js and Express. I am currently learning React. I am excited to use my skills to help companies and individuals create beautiful and functional websites.
            </p>
        </div>
    );
}
