import React, { useState, ChangeEvent } from "react";
import Card from "./Components/Card";


import "./App.css";



function App() {
  const [label, setLabel] = useState<string>("");
  const [customerName, setcustomerName] = useState<string>("");
  const [cardNumber, setcardNumber] = useState<string>("");
  const [expiryDate, setexpiryDate] = useState<string>("");

  const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleCustomerNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setcustomerName(e.target.value);
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    setcardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{2})/, "$1/")
      .trim();
    setexpiryDate(formattedValue);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-red-500 to-red-100">
      <div className="flex justify-center items-center py-12">
        <h2 className="text-3xl text-gray-700 font-bold font-serif">Hover me!</h2>
      </div>
      {/* <div className="userInputs">
        <input
          maxLength={20}
          type="text"
          placeholder="Label"
          onChange={handleLabelChange}
        />
        <input
          type="text"
          placeholder="Customer Name"
          onChange={handleCustomerNameChange}
        />
        <input
          type="text"
          maxLength={19}
          placeholder="0000 0000 0000 0000"
          onChange={handleCardNumberChange}
        />
        <input
          maxLength={5}
          type="text"
          placeholder="MM/YY"
          onChange={handleExpiryDateChange}
        />
      </div> */}
      <Card
        label={label}
        customerName={customerName}
        cardNumber={cardNumber}
        expiryDate={expiryDate}
      />
    </div>
  );
}

export default App;
