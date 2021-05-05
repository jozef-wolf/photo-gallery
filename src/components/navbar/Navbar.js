import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar active">
      <div className="left-side">
        <Link to="/">Josef Wolf</Link>
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
