import Header from "./components/Layout/Header/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cartVisibilityHandler = () => {
    setCartIsVisible((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      {cartIsVisible && <Cart onCloseCart={cartVisibilityHandler}></Cart>}
      <Header onShowCart={cartVisibilityHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
