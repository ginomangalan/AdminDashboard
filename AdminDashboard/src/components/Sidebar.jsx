import React, { useState } from "react";
import "./Sidebar.css";
import { motion } from "framer-motion";
import Logo from "../images/logo.png";
import UilSignOutAlt from "@iconscout/react-unicons/icons/uil-sign-out-alt";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import { SidebarData } from "../Data/data";

function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div
          className="bars"
          style={expanded ? { left: "50%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
          <UilBars />
        </div>
        {/*logo */}
        <div className="logo">
          {/* <img src={Logo} alt="" /> */}
          <span>
            Work<span>key</span>
          </span>
        </div>
        {/* Menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <span>
              <UilSignOutAlt />
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
