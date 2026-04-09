import './App.css';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const addProduct = () => {
    if (productName && productPrice) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1
      };

      const existingItem = cartItems.find(item => item.name === productName);
      
      if (existingItem) {
        setCartItems(cartItems.map(item =>
          item.name === productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCartItems([...cartItems, newProduct]);
      }

      setProductName('');
      setProductPrice('');
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addProduct()}
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addProduct()}
        />
        <button onClick={addProduct}>Add</button>
      </div>

      <div className="cart-section">
        <h2>Items</h2>
        {cartItems.length === 0 ? (
          <p className="empty">No items</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">{item.price}</span>
                </div>
                <div className="item-controls">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <button onClick={() => removeItem(item.id)}>Delete</button>
                </div>
              </div>
            ))}
            <div className="total">
              <strong>Total: {total.toFixed(2)}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;