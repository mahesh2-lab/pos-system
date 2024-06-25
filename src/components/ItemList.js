import React from 'react';
import '../itemListStyles.css';

const ItemList = ({ items, onEditItem }) => {
  const handleEdit = (item) => {
    // Example implementation: prompt the user for new quantity
    const newQuantity = prompt(`Enter new quantity for ${item.name}:`, item.quantity);
    if (newQuantity !== null && !isNaN(newQuantity)) {
      const updatedItem = { ...item, quantity: parseInt(newQuantity, 10) };
      onEditItem(updatedItem);
    }
  };

  return (
    <div className="item-list-container">
      <h2>Item List</h2>
      {items.map((item, index) => (
        <div key={index} className="item-list-item">
          <div className="item-name">{item.name}</div>
          <div className="item-details">
            <span>Price: ${item.price.toFixed(2)}</span>
            <span>Quantity: {item.quantity}</span>
          </div>
          <button className="edit-button" onClick={() => handleEdit(item)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
