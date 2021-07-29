import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './CustomHooks';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [active, setActive] = useState(false);  // this state checks if menu is open or colsed

    const menuNode = useRef();

    useOnClickOutside(menuNode, () => setActive(false));

    const handleMenuClick = () => {
        setActive(!active)
    }

    const handlePageScroll = (e, id) => {
        e && e.preventDefault();
        document.getElementById(id).scrollIntoView();
    }

    return (
        <nav className="navBar" ref={menuNode}>
            <h1><a href="#home" onClick={(e) => handlePageScroll(e, 'home')}>Benzaki</a></h1>
            <FaBars className='menu-btn' onClick={handleMenuClick} />
            <div className={active ? 'links links-active' : 'links'}>
                <a href="#home" onClick={(e) => (handleMenuClick(), handlePageScroll(e, 'home'))}>Home</a>
                <a href="#portfolio" onClick={(e) => (handleMenuClick(), handlePageScroll(e, 'portfolio'))}>Portfolio</a>
                <a href="#about" onClick={(e) => (handleMenuClick(), handlePageScroll(e, 'about'))}>About</a>
                <a href="#contact" onClick={(e) => (handleMenuClick(), handlePageScroll(e, 'contact'))}>Contact</a>
            </div>
        </nav>
    )
}
export default Navbar
