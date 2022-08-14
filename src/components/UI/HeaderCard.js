import React from "react";
import classes from "./HeaderCard.module.css";
const HeaderCard = ({ children, className }) => {
  return <div className={`${classes.header} ${className}`}>{children}</div>;
};

export default HeaderCard;
