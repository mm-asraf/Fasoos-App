import React from "react";
import MainCard from "../../UI/MainCard";
import classes from "./Dish.module.css";
import Card from "../../UI/Card";
import { DataFood } from "../../../apis/Data";

const Dish = () => {
  return (
    <MainCard className={classes.card}>
      {DataFood.map((item) => {
        return (
          <Card className={classes.card_set}>
            <div>{item.title}</div>
          </Card>
        );
      })}
    </MainCard>
  );
};

export default Dish;
