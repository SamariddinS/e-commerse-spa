import {CartItemContainer, ItemDetails} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />

            <ItemDetails>
                <span>{name}</span>
                <span>
                {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;