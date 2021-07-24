import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init({
        offset: 300,
        duration: 1000,
        once: true,
    });

    return (
        <section className="about" id="about">
            <h2 data-aos="fade-up" className="section-title">About</h2>
            <div data-aos="fade-up" className="about-me">
                <p>I'm a front-end web developer based in Algeria with a background in civil engineering. In April 2020 I started coding for fun, and what started as a hobby quickly turned into an obsession for me, So I've become committed to learning to code and evolve everyday.</p>
                <p>I love creating elegant, intuitive and dynamic user experiences.  I am passionate about coding and I love what I do.</p>
                <p>My current tech stack includes: HTML5, CSS3, Sass, Javascript, React, Nextjs, Git/Github.</p>
            </div>
        </section>
    )
}

export default About
