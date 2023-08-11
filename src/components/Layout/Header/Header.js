import React from "react";

import sushiImage from "../../../assets/img/sushi.jpg";
import style from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>Япона Кухня</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={style["main-image"]}>
        <img src={sushiImage} alt="Блюда японской кухни" />
      </div>
    </React.Fragment>
  );
};

export default Header;
