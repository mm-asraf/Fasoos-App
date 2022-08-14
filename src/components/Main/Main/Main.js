import React from "react";
import BreadCrumb from "../../UI/BreadCrumb";
import MainDish from "../MainDish/MainDish";
import MainTag from "../MainTag/MainTag";

const Main = () => {
  return (
    <div>
      <MainTag />
      <MainDish />
    </div>
  );
};

export default Main;
