import React from "react";
import avatar from "/src/assets/images/avatar.jpg";
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <div className="container">
            <h1>About Me</h1>
            <img src={avatar} alt="girl working on a computer" />
            <p>
            Hello! My name is <strong>Aisha Siddiqa,</strong> and I am a passionate web developer currently immersed in a bootcamp program at Arizona State University (ASU). With a strong foundation in HTML, CSS, JavaScript, Node.js, Express, APIs, TypeScript, and SQL, I thrive on creating responsive, dynamic, and user-centric web applications. 
            </p>
            <p>
            As I advance my technical skills, I am currently focused on mastering React, which allows me to build more interactive and modern web solutions. My journey in web development has ignited a deep passion for designing digital experiences that are not only functional but also visually compelling. 
            </p>
            <p>
            With graduation on the horizon, I am eager to apply my knowledge and creativity to real-world projects. My goal is to help businesses and individuals craft stunning websites that enhance user engagement and drive success. I'm excited about the opportunities ahead and look forward to making a positive impact in the tech industry.
            </p>
        </div>
    );
}
