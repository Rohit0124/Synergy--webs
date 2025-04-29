import React, { useState } from "react";
import indianoil from "../../assets/Images/indion oil logo.png";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import lines from "../../assets/Images/lines.png";

const Header = ({ toggleSidebar }) => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <div className="menu-icon" onClick={toggleSidebar}><img src={lines} alt="" /></div>
          <img src={indianoil} alt="logo" class="nav-logo" />
        </div>
        <button className="guestbt"><FaUser /> Guest (Super User)</button>
        <button className="logbt"><MdLogout /></button>
      </div>
    </>
  );
};

export default Header;
