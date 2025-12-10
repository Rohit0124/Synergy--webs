import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import indianoil from "../../assets/Images/indion oil logo.png";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import lines from "../../assets/Images/lines.png";


const Header = ({ toggleSidebar }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");   // OPTIONAL: Local Storage se user data remove krdo
    navigate("/");                // Login page redirect
  };

  const goToHome = () => {
    navigate("/home");            // Home page redirect
  };

  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <div className="menu-icon" onClick={toggleSidebar}><img src={lines} alt="" /></div>
          <img src={indianoil} alt="logo" className="nav-logo" onClick={goToHome}/>
        </div>
        <button className="guestbt"><FaUser /> Guest (Super User)</button>
        <button className="logoutbt" onClick={handleLogout}><MdLogout /></button>
      </div>
    </>
  );
};

export default Header;
