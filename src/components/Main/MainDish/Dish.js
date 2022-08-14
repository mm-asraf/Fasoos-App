import React from "react";
import MainCard from "../../UI/MainCard";
import classes from "./Dish.module.css";
import Card from "../../UI/Card";
const Dish = () => {
  return (
    <MainCard className={classes.card}>
      <Card className={classes.card_set}>h</Card>
    </MainCard>
  );
};

export default Dish;
