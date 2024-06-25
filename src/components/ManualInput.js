import React, { useState } from 'react';
import Select from 'react-select';
import '../manualInputStyles.css';

const ManualInput = ({ addItem }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);

  // Example list of items - replace with your actual data source
  const itemsList = [
    { value: 'item1', label: 'Item 1', price: 10 },
    { value: 'item2', label: 'Item 2', price: 15 },
    { value: 'item3', label: 'Item 3', price: 20 },
    { value: 'item4', label: 'Item 4', price: 25 },
    // Add more items as needed
  ];

  const handleItemChange = (selectedOption) => {
    setSelectedItem(selectedOption);
    setItemPrice(selectedOption ? selectedOption.price : '');
  };

  const handleQuantityChange = (increment) => {
    setItemQuantity(prevQuantity => Math.max(1, prevQuantity + increment));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedItem || !itemQuantity) return;
    addItem({ name: selectedItem.label, price: selectedItem.price, quantity: parseInt(itemQuantity) });
    setSelectedItem(null);
    setItemPrice('');
    setItemQuantity(1);
  };

  return (
    <div className="manual-input-container">
      <div className="manual-input-grid">
        <div className="select-item">
          <Select
            value={selectedItem}
            onChange={handleItemChange}
            options={itemsList}
            placeholder="Select Item"
            isClearable
            isSearchable
          />
        </div>
        <div className="price-item">
          <input
            type="number"
            placeholder="Price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            readOnly
          />
        </div>
        <div className="quantity-item">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <input
            type="number"
            placeholder="Quantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(parseInt(e.target.value) || 1)}
          />
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <div className="button-item">
          <button onClick={handleSubmit}>Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default ManualInput;
