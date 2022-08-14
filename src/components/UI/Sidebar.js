import React from "react";
import classes from "./Sidebar.module.css";
const Sidebar = ({ children, className }) => {
  return <div className={`${classes.sidebar} ${className}`}>{children}</div>;
};

export default Sidebar;
