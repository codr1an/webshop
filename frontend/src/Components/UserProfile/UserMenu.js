// UserMenu.js

import React, { useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const UserMenu = ({ onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    // Function to close the menu when clicked outside of it
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={menuRef} className="user-menu">
      <button onClick={() => console.log("Profile clicked")}>Profile</button>
      <button onClick={() => console.log("Logout clicked")}>Logout</button>
    </div>
  );
};

export default UserMenu;
