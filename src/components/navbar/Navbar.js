import React, { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <div className="Navbar">
      <div className="left-side">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <button> Open</button>
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default Navbar;
