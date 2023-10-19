import React, { useState } from 'react';
import './dropDown.css'

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu} >
      </button>
      {isOpen && <div className="dropdown-menu" >{children}</div>}
    </div>
  );
};

export default DropdownMenu;