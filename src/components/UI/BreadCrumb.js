import React from "react";
import classes from "./BreadCrumb.module.css";
const BreadCrumb = ({ children, className }) => {
  return <div className={`${classes.bread} ${className}`}>{children}</div>;
};

export default BreadCrumb;
