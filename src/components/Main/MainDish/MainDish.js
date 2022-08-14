import React from "react";
import Dish from "./Dish";
import Side from "./Side";
import classes from "./MainDish.module.css";
import Filter from "../Filter/Filter";
const MainDish = () => {
  return (
    <div className={classes.main_dish}>
      <div className="side">
        <Side />
      </div>
      <div className={classes.dish}>
        <Filter />
        <Dish />
      </div>
    </div>
  );
};

export default MainDish;
