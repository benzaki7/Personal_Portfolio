import React from 'react';
import Projects from './Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Work = () => {
    AOS.init({
        offset: 300,
        duration: 1000,
        once: true,
    });

    return (
        <section className="portfolio" id="portfolio">
            <h2 data-aos="fade-up" className="section-title">Portfolio</h2>
            <p data-aos="fade-up">Here are some of the work that i've done. See more on my <a href="https://github.com/benzaki7?tab=repositories" target="_blank">Github</a>.</p>
            <Projects />
        </section>
    )
}

export default Work
