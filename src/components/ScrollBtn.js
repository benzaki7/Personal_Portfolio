import React, { useState } from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";

const ScrollBtn = () => {
    const[visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        }
        else if (scrolled <= 200) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <FaAngleDoubleDown className="scroll-btn" onClick={scrollToTop}  style={{opacity: visible ? '1' : '0'}} />
        </div>
    )
}

export default ScrollBtn
