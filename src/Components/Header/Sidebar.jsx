import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../data";
import drishtilogo from "../../assets/Images/drishti-logo.png";
import { IoHome } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const getNextLevelKey = (item) => {
  if (item.firstData) return "firstData";
  if (item.secondData) return "secondData";
  if (item.thirdData) return "thirdData";
  if (item.fourthData) return "fourthData";
  return null;
};

const levelColors = ["whitesmoke", "#e7e7e7", "#dcdcdc", "#c8c8c8", "#808080"];

const SidebarItem = ({ item, level, openMap, handleToggle }) => {
  const navigate = useNavigate();
  const childrenKey = getNextLevelKey(item);
  const children = childrenKey ? item[childrenKey] : [];
  const hasChildren = children?.length > 0;

  if (item.permission_status === 0) return null;

  const isOpen = openMap[level] === item.id;

  return (
    <div
      className="sidebar-item"
      style={{ backgroundColor: levelColors[level] || "#808080", paddingLeft: `${level * 5}px`, }}>
      <div className="item-title" onClick={ hasChildren ? () => handleToggle(level, item.id, hasChildren) : () => navigate(item?.moduleLink)}>
        {item.Icon && <img src={item.Icon} alt="icon" className="sidebar-icon" />}
        <span>{item.moduleDisplayName}</span>
        {hasChildren && <span className="arrow">{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>}
      </div>

      {hasChildren && isOpen && (
        <div className="item-children">
          {children.map((child) => (
            <SidebarItem
              key={child.id}
              item={child}
              level={level + 1}
              openMap={openMap}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [openMap, setOpenMap] = useState({});
  const handleToggle = (level, id, hasChildren) => {
    setOpenMap((prev) => {
      const updated = { ...prev };
      if (prev[level] === id) {
        delete updated[level];
      } else {
        updated[level] = id;
      }

      Object.keys(updated).forEach((key) => {
        if (parseInt(key) > level) {
          delete updated[key];
        }
      });
      return updated;
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="side-scroll">
          <h4><IoHome /> Home</h4>
          {config.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              level={0}
              openMap={openMap}
              handleToggle={handleToggle}
            />
          ))}
          <h4><HiDocumentArrowDown /> Documents</h4>
          <h4><MdLogout /> Log Out</h4>
        </div>

        <div className="drishti-div"><img className="drishtilogo" src={drishtilogo} alt="Drishti" /></div>
      </div>
    </div>
  );
};

export default Sidebar;
