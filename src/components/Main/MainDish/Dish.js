import React, { useEffect, useState } from "react";
import MainCard from "../../UI/MainCard";
import classes from "./Dish.module.css";
import Card from "../../UI/Card";
import { DataFood } from "../../../apis/Data";
import DishItem from "./DishItem";

const Dish = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      const response = await fetch(
        "https://ig-food-menus.herokuapp.com/best-foods"
      );
      const data = await response.json();
      setFoodData(data);
    };
    getFood();
  }, []);

  return (
    <MainCard className={classes.card}>
      {foodData.slice(0, 20).map((item) => {
        return <DishItem data={item} />;
      })}
    </MainCard>
  );
};

export default Dish;
