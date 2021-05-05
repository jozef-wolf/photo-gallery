import React, { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="left-side">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="hamburger" onClick={() => setShowLinks(!showLinks)}>
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default Navbar;
