import React from 'react';
import {projects} from '../data/data'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    AOS.init({
        offset: 500,
        duration: 1000,
        once: true,
    });

    return (
        <div className="projects">
            {projects.map((project) => (
                <div data-aos="fade-up" className="project" key={project.title}>
                    <img src={project.image} alt="project thumbnail"/>
                    <div className="info">
                        <h3>{project.title}</h3>
                        <h4>{project.stack}</h4>
                        <p>{project.description}</p>
                        <div>
                            <a target="_blank" href={project.link1}>Visit website</a>
                            <a target="_blank" href={project.link2}>Source Code</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
