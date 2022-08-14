import React from "react";
import DishLists from "../../SideMain/DishLists";
import Sidebar from "../../UI/Sidebar";
import classes from "./Side.mdoule.css";
const Side = () => {
  return (
    <Sidebar className={classes.side}>
      <DishLists />
    </Sidebar>
  );
};

export default Side;
