import {
  CartItemContainer,
  StyledImg,
  ItemDetails,
  Name,
} from "./cart-item.styles";

const CartItem = ({ cartItem: { name, quantity, price, imageUrl } }) => {
  return (
    <CartItemContainer>
      <StyledImg src={imageUrl} alt={`${name}`} />
      <ItemDetails className="item-details">
        <Name>{name}</Name>
        <span className="price">
          {quantity} x {price}$
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
