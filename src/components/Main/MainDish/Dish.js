import React, { useEffect, useState } from "react";
import MainCard from "../../UI/MainCard";
import classes from "./Dish.module.css";
import Card from "../../UI/Card";
import { DataFood } from "../../../apis/Data";
import DishItem from "./DishItem";
import Filter from "../Filter/Filter";

const Dish = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      const response = await fetch(
        "https://ig-food-menus.herokuapp.com/best-foods"
      );
      const data = await response.json();
      setFoodData(data);
      // console.log(data);
    };
    getFood();
  }, []);

  const search = (event) => {
    const val = event.target.value.toLowerCase();
    const filterByName = foodData.filter((food) =>
      `${food.name}`.toLowerCase().includes(val)
    );

    setFoodData(filterByName);

    console.log(filterByName);
  };

  return (
    <>
      <Filter onSearch={search} />
      <MainCard className={classes.card}>
        {foodData.slice(0, 20).map((item) => {
          return <DishItem data={item} />;
        })}
      </MainCard>
    </>
  );
};

export default Dish;
