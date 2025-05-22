import React, { useState, useRef } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    setIsMenuOpen(true);
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuRef.current.style.right = "-350px";
  };

  return (
    <>
      {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}

      <div className="navbar">
        <div className="navlogo">
          <h1>Anshit</h1>
          <img src="src/assets/theme_pattern.svg" alt="theme pattern" />
        </div>

        <img
          src="src/assets/menu_open.svg"
          onClick={openMenu}
          alt="open menu"
          className="nav-mob-open"
        />

        <ul ref={menuRef} className="nav-menu">
          <img
            src="src/assets/menu_close.svg"
            onClick={closeMenu}
            alt="close menu"
            className="nav-mob-close"
          />
          <li>
            <AnchorLink className="anchor-link" offset={0} href="#">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" && <img src="src/assets/nav_underline.svg" alt="underline" />}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={0} href="#about">
              <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" && <img src="src/assets/nav_underline.svg" alt="underline" />}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={0} href="#projects">
              <p onClick={() => setMenu("projects")}>My Projects</p>
            </AnchorLink>
            {menu === "projects" && <img src="src/assets/nav_underline.svg" alt="underline" />}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("contact")}>Contact Me</p>
            </AnchorLink>
            {menu === "contact" && <img src="src/assets/nav_underline.svg" alt="underline" />}
          </li>
        </ul>

        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
