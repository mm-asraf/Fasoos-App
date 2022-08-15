import React from "react";
import classes from "./Filter.module.css";
import SearchIcon from "@mui/icons-material/Search";
const Filter = ({ onSearch, onSetPrice }) => {
  return (
    <div className={classes.filter}>
      <div className={classes.inp}>
        <input
          type="text"
          placeholder="Search Your Foods..."
          onInput={onSearch}
        />
        <SearchIcon className={classes.search} />
      </div>

      <div className={classes.filter_btns}>
        <span>Filter By Price</span>
        <br />
        <button onClick={() => onSetPrice("low to high")}>Low to High</button>
        <button onClick={() => onSetPrice("high to low")}>High to Low</button>
      </div>
    </div>
  );
};

export default Filter;
