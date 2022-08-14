import React from "react";
import HeaderCard from "../UI/HeaderCard";
import SearchIcon from "@mui/icons-material/Search";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/eatsure_logo.svg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <HeaderCard>
      <div className={classes.main}>
        <div className={classes.first_half}>
          <div className="logo">
            <img src={Logo} className={classes.logo} alt="eatsure" />
          </div>
          <div className="select_location">
            <select name="city" id="city">
              <option value="bangalore">bangalore</option>
              <option value="chennai"></option>
              <option value="Hyderabad"></option>
            </select>
          </div>
          <div className={classes.input_box}>
            <input type="text" />
            <SearchIcon className={classes.searchIcon} />
          </div>
        </div>
        <div className={classes.second_half}>
          <div className="other_screen">
            <HeadsetMicIcon className={classes.headset} />
            <ShoppingCartIcon className={classes.cart} />
            <MenuIcon className={classes.menu} />
          </div>
        </div>
      </div>
    </HeaderCard>
  );
};

export default Header;
