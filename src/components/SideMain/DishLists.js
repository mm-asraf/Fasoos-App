import React, { useState } from "react";
import Breads from "./Breads";
import Burgers from "./Burgers";
import Chocholates from "./Chocholates";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import FriedChicken from "./FriedChicken";
import IceCream from "./IceCream";
import Pizzas from "./Pizzas";
import Sandwiches from "./Sandwiches";

const DishLists = () => {
  const [dish, setDish] = useState([]);

  const getData = (data) => {
    setDish(data);
  };

  return (
    <div>
      <Breads />
      <Burgers />
      <Chocholates />
      <Desserts />
      <Drinks />
      <FriedChicken />
      <Drinks />
      <IceCream />
      <Pizzas />
      <Sandwiches />
    </div>
  );
};

export default DishLists;
