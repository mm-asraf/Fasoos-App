import React from "react";
import classes from "./MainCard.module.css";
const MainCard = ({ children, className }) => {
  return <div className={`${classes.main_card} ${className}`}>{children}</div>;
};

export default MainCard;
