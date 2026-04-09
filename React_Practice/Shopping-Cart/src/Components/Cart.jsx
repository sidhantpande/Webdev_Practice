const Cart = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-section">
        <h2>Shopping Cart</h2>
        <p className="empty-cart">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-section">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-image">{item.image}</div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <div className="item-quantity">
              <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button 
              className="remove-btn"
              onClick={() => onRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
