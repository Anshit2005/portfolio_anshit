import React, { useState, useRef } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

import themePattern from "../../assets/theme_pattern.svg";
import menuOpenIcon from "../../assets/menu_open.svg";
import menuCloseIcon from "../../assets/menu_close.svg";
import underlineIcon from "../../assets/nav_underline.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
  if (window.innerWidth <= 480) {
    setIsMenuOpen(true);
    menuRef.current.style.position = "absolute";
    menuRef.current.style.top = "0";
    menuRef.current.style.right = "0";
  }
};

const closeMenu = () => {
  if (window.innerWidth <= 480) {
    setIsMenuOpen(false);
    menuRef.current.style.position = "absolute";
    menuRef.current.style.right = "-350px";
  }
};

  return (
    <>
      {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}

      <div className="navbar">
        <div className="navlogo">
          <h1>Anshit</h1>
          <img src={themePattern} alt="theme pattern" />
        </div>

        <img
          src={menuOpenIcon}
          onClick={openMenu}
          alt="open menu"
          className="nav-mob-open"
        />

        <ul ref={menuRef} className="nav-menu">
          <img
            src={menuCloseIcon}
            onClick={closeMenu}
            alt="close menu"
            className="nav-mob-close"
          />
          <li>
            <AnchorLink className="anchor-link" offset={0} href="#home">
              <p onClick={() => {setMenu("home") ; closeMenu();}}>Home</p>
            </AnchorLink>
            {menu === "home" && <img src={underlineIcon} alt="underline" />}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={0} href="#about">
              <p onClick={() => {setMenu("about") ; closeMenu();}}>About Me</p>
            </AnchorLink>
            {menu === "about" && <img src={underlineIcon} alt="underline" />}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={0} href="#projects">
              <p onClick={() => {setMenu("projects") ; closeMenu();}}>My Projects</p>
            </AnchorLink>
            {menu === "projects" && <img src={underlineIcon} alt="underline" />}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => {setMenu("contact") ; closeMenu();}}>Contact Me</p>
            </AnchorLink>
            {menu === "contact" && <img src={underlineIcon} alt="underline" />}
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
