import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeAllFromCart, removeFromCart } =
    useContext(CartContext);

  return (
    // <div className="checkout-container">
    <div>
      <h1>I am the checkout page</h1>
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeFromCart(cartItem)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
            <br />
            <span onClick={() => removeAllFromCart(cartItem)}>X</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
