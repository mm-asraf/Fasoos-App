import React, { useEffect, useState } from "react";
import MainCard from "../../UI/MainCard";
import classes from "./Dish.module.css";
import Card from "../../UI/Card";
import { DataFood } from "../../../apis/Data";
import DishItem from "./DishItem";
import Filter from "../Filter/Filter";

const Dish = () => {
  const [foodData, setFoodData] = useState([]);
  const [price, setPrice] = useState([]);

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

  const filterSearch = async (event) => {
    const val = event.target.value.toLowerCase();
    const filterByName = foodData.filter((food) =>
      `${food.name} ${food.dsc}`.toLowerCase().includes(val)
    );

    if (val) {
      setFoodData(filterByName);
    } else {
      setFoodData(foodData);
    }

    console.log(filterByName);
  };

  useEffect(() => {
    const res = foodData.sort((a, b) => {
      if (price === "high to low") {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });
    // setFoodData(res);
    setPrice(res);
    console.log(res);
  }, [price]);

  return (
    <>
      <Filter onSearch={filterSearch} onSetPrice={setPrice} />
      <MainCard className={classes.card}>
        {foodData.slice(0, 20).map((item) => {
          if (item) {
            return <DishItem key={item.id} data={item} />;
          } else {
            return null;
          }
        })}
      </MainCard>
    </>
  );
};

export default Dish;
