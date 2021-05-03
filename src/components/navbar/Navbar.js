import React, { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="left-side">
        <div className="links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <button> Open</button>
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default Navbar;
