import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsDisplayed, setcartIsDisplayed] = useState(false);

  const displayCartHandler= ()=>{
    setcartIsDisplayed(true)
  }
  const hideCartHandler= ()=>{
    setcartIsDisplayed(false)
  }

  return (
    <CartProvider>
      {cartIsDisplayed && <Cart onClose={hideCartHandler}/>}
      <Header onDisplay={displayCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
