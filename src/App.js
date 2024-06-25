import React, { useState } from 'react';
import ManualInput from './components/ManualInput';
import ItemList from './components/ItemList';
import Checkout from './components/Checkout';
import Bill from './components/Bill';
import './App.css'; // Importing regular app styles
import './manualInputStyles.css'; // Importing manual input styles
import './checkoutStyles.css'; // Importing checkout styles
import './itemListStyles.css'; // Importing item list styles
import './billl.css'; // Importing bill styles

function App() {
  const [items, setItems] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const addItem = (newItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(item => item.name === newItem.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === newItem.name
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const editItem = (updatedItem) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map(item =>
        item.name === updatedItem.name ? updatedItem : item
      );
      return updatedItems;
    });
  };

  const handleCheckout = () => {
    setCheckout(true);
  };

  const handleReset = () => {
    setItems([]);
    setCheckout(false);
  };

  const totalAmount = items.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0).toFixed(2);

  return (
    <div className="container">
      <div className="header">
        <h1>POS System</h1>
      </div>
      <div className="content">
        <div className="left-column">
          {!checkout ? (
            <>
              <ManualInput addItem={addItem} />
              <ItemList items={items} onEditItem={editItem} />
            </>
          ) : (
            <Bill items={items} onReset={handleReset} totalAmount={totalAmount} />
          )}
        </div>
        {!checkout && (
          <div className="right-column">
            <div className="checkout-container">
              <h2>Checkout</h2>
              <div>
                {items.map(item => (
                  <div key={item.name}>
                    <p>{item.name} - Quantity: {item.quantity}</p>
                    <p>Price per unit: ${item.price}</p>
                  </div>
                ))}
              </div>
              <hr />
              <p>Total Amount: ${totalAmount}</p>
              <button onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
