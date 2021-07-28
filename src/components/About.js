import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init({
        offset: 300,
        duration: 1000,
        once: true,
    });

    const handlePageScroll = (e, id) => {
        e && e.preventDefault();
        document.getElementById(id).scrollIntoView();
    }
    
    return (
        <section className="about" id="about">
            <h2 data-aos="fade-up" className="section-title">About</h2>
            <div data-aos="fade-up" className="about-me">
                <p>Hello! My name is Zakaria, I'm a self taught frontend web developer based in Algeria with a background in civil engineering.</p>

                <p>In April 2020 I started coding for fun, and what started as a hobby quickly turned into an obsession for me, So I've become committed to learning to code and evolve everyday. I am passionate about coding and I love what I do.</p>
        
                <p>I love creating elegant, intuitive and dynamic user experiences. I'm open to work with a team as well as freelance opportunities. Feel free to <a href="#contact" onClick={(e) => handlePageScroll(e, 'contact')}>contact me.</a></p>

                <p>My current tech stack includes: HTML5, CSS3, Sass, Javascript, React, Nextjs, Git/Github.</p>
            </div>
        </section>
    )
}

export default About
