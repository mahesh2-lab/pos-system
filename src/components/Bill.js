import React, { useRef } from 'react';
import PrintButton from './PrintButton';
import '../tableStyles.css';

const Bill = ({ items, onReset, totalAmount }) => {
  const billRef = useRef();

  return (
    <div className="content" ref={billRef}>
      <h2>Bill</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr className="total">
            <td colSpan="3">Total</td>
            <td>${totalAmount}</td>
          </tr>
        </tbody>
      </table>
      <div className="actions">
        <button onClick={onReset}>New Transaction</button>
        <PrintButton contentRef={billRef} />
      </div>
    </div>
  );
};

export default Bill;
