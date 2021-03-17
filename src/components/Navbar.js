import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
      <div>
        <ul>
          <li>home</li>
          <li>informacje</li>
          <li>kontakt</li>
        </ul>
      </div>
    );
  }

  return (
    <nav>
      <span>
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {menu}
    </nav>
  );
};

export default Navbar;
