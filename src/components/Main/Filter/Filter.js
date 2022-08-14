import React from "react";
import classes from "./Filter.module.css";
import SearchIcon from "@mui/icons-material/Search";
const Filter = ({ onSearch }) => {
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
    </div>
  );
};

export default Filter;
