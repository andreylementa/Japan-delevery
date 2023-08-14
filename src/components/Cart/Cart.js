import style from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={style["cart-items"]}>
      {[{ id: "m1", name: "sushi", amount: 2, price: 10.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={style.total}>
        <div>Итого</div>
        <div className="">49.99</div>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onCloseCart}>
          Закрыть
        </button>
        <button className={style.button}>Заказать</button>
      </div>
    </Modal>
  );
};

export default Cart;
