import React from 'react';
import './ScrollUp.css';

const ScrollUp = () => {
    window.addEventListener('scroll', function() {
        const scrollUp = document.querySelector('.scrollup');
        if(this.scrollY >= 560) scrollUp.classList.add("show_scroll");
        else  scrollUp.classList.remove("show_scroll");
    })
  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default ScrollUp
