import React from 'react';

const Checkout = ({ items, totalAmount, onCheckout }) => {
  return (
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
      <div>
        <hr />
        <p>Total Amount: ${totalAmount}</p>
        <button onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
