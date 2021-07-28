import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticlesBackground from './ParticlesBackground';

const Home = () => {
    AOS.init({
        offset: 50,
        duration: 2000,
        once: true,
    });

    const handlePageScroll = (e, id) => {
        e && e.preventDefault();
        document.getElementById(id).scrollIntoView();
    }

    return (
        <section className="home" id="home">
            <h2 data-aos="fade-right">Hello, I'm <span>Zakaria Benkali</span>.</h2>
            <h2 data-aos="fade-left">I'm a Frontend Developer.</h2>
            <div className="btn-group" >
                <a data-aos="fade-right" className="btn" href="#portfolio" onClick={(e) => handlePageScroll(e, 'portfolio')} >
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    See My Work
                </a>
                <a data-aos="fade-left" className="btn" href="#contact" onClick={(e) => handlePageScroll(e, 'contact')}>
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Contact Me
                </a>
            </div>   
            <ParticlesBackground />
        </section>
    )
}

export default Home
