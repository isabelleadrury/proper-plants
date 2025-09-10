import CartItemQuantity from "./CartItemQuantity";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <li className="cart-item">
      <div>
        {item.image} {item.name}
      </div>
      <CartItemQuantity
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </li>
  );
}
