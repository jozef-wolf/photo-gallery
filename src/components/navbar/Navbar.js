import React, { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="left-side">
        <a href="/home">Josef Wolf</a>
      </div>
      <div className="right-side">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/about">About</a>
          <a href="/photos">Photos</a>
          <a href="/contact">Contact</a>
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
