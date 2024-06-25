import React from 'react';

const PrintButton = ({ contentRef }) => {
  const handlePrint = () => {
    const printContent = contentRef.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // To reset the page content after printing
  };

  return (
    <button onClick={handlePrint}>Print</button>
  );
};

export default PrintButton;
