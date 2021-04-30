import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left-side">
        <div className="links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default Navbar;
