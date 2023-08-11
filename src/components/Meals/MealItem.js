import style from "./mealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={style.meal}>
      <h3>{props.name}</h3>
      <p className={style.description}>{props.description}</p>
      <span className={style.price}>{props.price}</span>
    </li>
  );
};

export default MealItem;
