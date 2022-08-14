import React from "react";
import Card from "../../UI/Card";
import classes from "./Dish.module.css";
const DishItem = ({ data }) => {
  return (
    <div>
      <Card className={classes.card_set}>
        <div className={classes.container}>
          <div className={classes.contain_img}>
            <img src={data.img} alt="food" />
          </div>
          <h4>{data.name}</h4>
          <p>{data.dsc}</p>

          <p>{data.rate}</p>
          <div className={classes.bt}>
            <p>
              {"₹ "}
              {data.price}
            </p>
            <button>Add</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DishItem;
