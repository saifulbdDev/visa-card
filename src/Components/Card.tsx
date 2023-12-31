import React from "react";
import Chips from "../Logos/Chips.svg";
import Visa from "../Logos/Visa.svg";
import "../Styles/Card.css";

interface CardProps {
  label: string;
  customerName: string;
  cardNumber: string;
  expiryDate: string;
}

function Card({ label, customerName, cardNumber, expiryDate }: CardProps) {
  return (
    <div
      id="card"
      className="relative w-96 h-60 rounded-2xl font-mono text-white overflow-hidden cursor-pointer transition-all duration-500"
      style={{
        transition: "0.6s",
        transformStyle: "preserve-3d"
      }}>
      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-cover p-6 bg-[url('/public/bg.svg')]  transition-all duration-100 delay-200 z-20"
        style={{
          transform: "rotateY(0deg)"
        }}>
        <div className="flex justify-between items-center">
          <img src="/public/1.svg" alt="Smart card" className="w-12" />

          <img src="/public/2.svg" alt="Visa image"  />
        </div>
        <div className="">
          <label className="hidden">Card Number</label>
          <input
            type="text"
            id=""
            value="**** **** **** 2345"
            className="outline-none w-full bg-transparent text-center text-2xl"
          />
        </div>

        <div className="w-full flex flex-row justify-between">
          <div className="w-full flex flex-col">
            <label>Card holder</label>
            <input
              type="text"
              id=""
              value="Mohammad Hossain"
              className="outline-none bg-transparent text-base"
            />
          </div>

          <div className="w-1/4 flex flex-col">
            <label>Expires</label>
            <input
              type="text"
              id=""
              value="12/34"
              className="outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute  top-0 left-0 w-full h-full flex flex-col gap-3 justify-center bg-gradient-to-tr from-gray-900 to-gray-700 transition-all z-10"
        style={{
          transform: "rotateY(180deg)"
        }}>
        <div className="w-full h-12 bg-black"></div>

        <div className="px-6 flex flex-col gap-6 justify-center">
          <div className="flex flex-col items-end">
            <label>CVV</label>
            <input
              type="text"
              id=""
              value="123"
              className="outline-none rounded text-black w-full h-8 text-right"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px)"
              }}
            />
          </div>

          {/* <div className="flex justify-start items-center">
            <img
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
              alt=""
              className="w-12"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
