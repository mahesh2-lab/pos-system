import React, { useState } from 'react';
import Webcam from 'react-webcam-barcode-scanner';

const BarcodeScanner = ({ addItem }) => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState('');

  const handleScan = (err, data) => {
    if (data) {
      setResult(data.text);
      const scannedItem = {
        name: `Item ${data.text}`,
        price: Math.floor(Math.random() * 100).toFixed(2), // Random price for demo
        quantity: 1, // Default quantity for demo
      };
      addItem(scannedItem);
      setScanning(false);
    }
    if (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Barcode Scanner</h2>
      <button onClick={() => setScanning(!scanning)}>
        {scanning ? 'Stop Scanning' : 'Start Scanning'}
      </button>
      {scanning && (
        <Webcam
          width={500}
          height={500}
          onUpdate={handleScan}
        />
      )}
      {result && <p>Scanned Code: {result}</p>}
    </div>
  );
};

export default BarcodeScanner;
