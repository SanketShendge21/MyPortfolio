import React, { useState, useEffect } from 'react'

// import { Icon } from '@iconify/react';

function Navbar() {

  // const [theme, setTheme] = useState(localStorage.getItem('selected-theme') || 'dark');

  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   localStorage.setItem('selected-theme', newTheme);
  // };


  function linkAction(event) {
    event.preventDefault();
  
    const targetId = event.target.getAttribute('href');
  
    if (targetId) {
      const section = document.querySelector(targetId);
  
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  
    setIsMenuOpen(false); // Close the menu after clicking a link
  }
  
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [theme, setTheme] = useState(localStorage.getItem('selected-theme') || 'light');
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    // const toggleTheme = () => {
    //   const newTheme = theme === 'light' ? 'dark' : 'light';
    //   setTheme(newTheme);
    //   localStorage.setItem('selected-theme', newTheme);
    // };
  
    useEffect(() => {
      const toggle = document.getElementById('nav-toggle');
      const nav = document.getElementById('nav-menu');
  
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
      }

  
      const navLink = document.querySelectorAll('.nav__link');   
  
      navLink.forEach(n => n.addEventListener('click', linkAction));
  
      // const themeButton = document.getElementById('theme-button');
      // const darkTheme = 'dark-theme';
      // const iconTheme = 'uil-sun';
  
      // const selectedTheme = localStorage.getItem('selected-theme');
      // const selectedIcon = localStorage.getItem('selected-icon');
  
      // const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
      // const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
  
      // if (selectedTheme) {
      //   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      //   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
      // }
  
      // themeButton.addEventListener('click', () => {
      //   document.body.classList.toggle(darkTheme);
      //   themeButton.classList.toggle(iconTheme);
      //   localStorage.setItem('selected-theme', getCurrentTheme());
      //   localStorage.setItem('selected-icon', getCurrentIcon());
      // });
      // const themeButton = document.getElementById('theme-button');
      // const darkTheme = 'dark-theme';
      // const iconTheme = 'uil-moon';
  
      // const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
      // const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

  
      // const handleThemeToggle = () => {
      //   document.body.classList.toggle(darkTheme);
      //   themeButton.classList.toggle(iconTheme);
      //   localStorage.setItem('selected-theme', getCurrentTheme());
      //   localStorage.setItem('selected-icon', getCurrentIcon());
      // };
  
      // if (themeButton) {
      //   themeButton.addEventListener('click', handleThemeToggle);
      // }
  
      // const selectedTheme = localStorage.getItem('selected-theme');
      // const selectedIcon = localStorage.getItem('selected-icon');
  
      // if (selectedTheme) {
      //   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      // }
  
      // if (selectedIcon) {
      //   themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme);
      // }
  
    //   return () => {
    //     // Clean up event listeners
    //     if (themeButton) {
    //       themeButton.removeEventListener('click', handleThemeToggle);
    //     }
    //   };
    }, []);
  
  return (
    <>
    <header className={`l-header `}>
            <nav className="nav bd-grid">
                <div>
                    <a href="#home" className="nav__logo">Sanket <span className="home__title-color">Shendge</span></a>
                </div>

                <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link" onClick={closeMenu}>Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link" onClick={linkAction}>About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link" onClick={linkAction}>Skills</a></li>
                        <li className="nav__item"><a href="#project" className="nav__link" onClick={linkAction}>Projects</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link" onClick={linkAction}>Contact</a></li>
                        {/* <li className="nav__item"><i className={`uil ${
                    theme === 'dark' ? 'uil-sun' : 'uil-moon'
                  } `}
                  id="theme-button"
                  onClick={toggleTheme}></i></li> */}
                    </ul>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar