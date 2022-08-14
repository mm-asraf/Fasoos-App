import React from "react";
import classes from "./StripeBar.module.css";
const StripBar = ({ children, className }) => {
  return <div className={`${classes.strip} ${className}`}>{children}</div>;
};

export default StripBar;
