import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logos from "../img/logo-modified.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);
  return (
    <div>
      <div className="App__navbar">
        <div className="App__navbar-logo">
          <Link to="/">
            <img src={logos} alt="logo" />
          </Link>
        </div>
        <div className="App__navbar-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="App__navbar-smallscreen">
          <GiHamburgerMenu
            color="#0d367e"
            cursor="pointer"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="App__navbar-smallscreen-overlay flex__center slide-bottom">
              <AiOutlineCloseCircle
                color="#f26722"
                fontSize={30}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <Link to="">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
