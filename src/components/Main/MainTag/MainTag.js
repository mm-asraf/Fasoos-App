import React from "react";
import BreadCrumb from "../../UI/BreadCrumb";
import BreadRouteShow from "./BreadRouteShow";
import classes from "./MainTag.module.css";
import burger_banner from "../../../assets/burger_background.jpg";
import food_banner from "../../../assets/food_banner_img.webp";
import fasoos_stick from "../../../assets/fasoos_stick.webp";
const MainTag = () => {
  return (
    <>
      <BreadRouteShow />

      <BreadCrumb className={classes.bred}>
        <div className={classes.divide_cont}>
          <div className="first">
            <img
              src={food_banner}
              alt="food_banner"
              className={classes.logo_banner}
            />
          </div>
          <div className="second">
            <div className={classes.first_inner}>
              <div className={classes.img_fasoos}>
                <img src={fasoos_stick} alt="" width="100px" />
              </div>
              <div className={classes.contents}>
                <span> Fasoos-Wraps & Rolls</span>
                <br />
                <span>Flavourful Wraps Meals & Rice Bowls</span>
              </div>
            </div>
            <div className="second_inner">
              <p>Applicable offers</p>
              <div>Get upto 40% off-Use Code IAMSURE</div>
            </div>
          </div>
        </div>
      </BreadCrumb>
    </>
  );
};

export default MainTag;
