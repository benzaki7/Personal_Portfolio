import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init({
        offset: 50,
        duration: 2000,
        once: true,
    });

    const handlePageScroll = (e) => {
        e && e.preventDefault();
        const element = document.getElementById('portfolio').scrollIntoView();
    }

    return (
        <section className="home" id="home">
            <h2 data-aos="fade-right">Hello, I'm <span>Zakaria Benkali</span></h2>
            <h2 data-aos="fade-left">I'm a Front-End Developer.</h2>
            <div data-aos="fade-up">
                <a  href="#portfolio" onClick={(e) => handlePageScroll(e)}>See My Work</a>
            </div>    
        </section>
    )
}

export default Home
