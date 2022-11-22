import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;

  const { addItemToCart } = useContext(CartContext);

  return (
    <tr className="checkout-item-container ">
      <td className="image-container">
        <img src={imageUrl} />
      </td>
      <td className="name">{name}</td>
      <td className="quantity">
        <span>-</span>
        {quantity}
        <span onClick={() => addItemToCart(item)}>+</span>
      </td>
      <td className="price">{price}</td>
      <td>
        <span>X</span>
      </td>
    </tr>
  );
};

export default CheckoutItem;
