import React from 'react';
import './Portfolio.css';
import Project from '../components/Project';
import proj01 from '/src/assets/images/proj01.jpg';
import proj03 from '/src/assets/images/proj03.jpg';
import proj05 from '/src/assets/images/proj05.jpg';
import proj06 from '/src/assets/images/proj06.jpg';

const Portfolio = () => {
    const projects = [
        {
            title: 'Personal Recipe Catalog',
            image: proj05,
            deployedLink: 'https://kboothe617.github.io/Project-1/',
            githubLink: 'https://github.com/KBoothe617/Project-1',
        },
        {
            title: 'My Portfolio',
            image: proj03,
            deployedLink: 'https://example.com',
            githubLink: 'https://github.com/ASgithub11/My-Portfolio-React',
        },
        {
            title: 'Project 3',
            image: proj06,
            deployedLink: 'https://example.com',
            githubLink: 'https://github.com/ASgithub11',
        },
        {
            title: 'Project 4',
            image: proj01,
            deployedLink: 'https://example.com',
            githubLink: 'https://github.com/ASgithub11',
        },
        {
            title: 'Project 5',
            image: proj05,
            deployedLink: 'https://example.com',
            githubLink: 'https://github.com/ASgithub11',
        },
        {
            title: 'Project 6',
            image: proj03,
            deployedLink: 'https://example.com',
            githubLink: 'https://github.com/ASgithub11',
        },
    ];

    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="projects">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
