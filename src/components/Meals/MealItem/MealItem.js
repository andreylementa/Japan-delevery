import React from "react";
import style from "./mealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={style.description}>{props.description}</p>
        <span className={style.price}>{props.price}$</span>
      </div>
      <div>
        <MealItemForm id={props.id}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
