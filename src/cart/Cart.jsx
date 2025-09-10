import "./Cart.css";
import CartItem from "./CartItem";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your Cart is Empty</p>
      ) : (
        <ul>
          {cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}
