import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="left-side">
        <Link to="/home">Josef Wolf</Link>
      </div>
      <div className="right-side">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/about">About</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="hamburger" onClick={() => setShowLinks(!showLinks)}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
