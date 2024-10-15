import React, { useState, useEffect } from "react";

interface Product {
    name: string;
    img: string;
    price: number;
    quantity: number;
  }
  
  const data: Product[] = [
    {
      name: "Cappuccino",
      img: "Cappuccino.png",
      price: 3.5,
      quantity: 0,
    },
    {
      name: "Latte",
      img: "/Latte.png",
      price: 4,
      quantity: 0,
    },
    {
      name: "Espresso",
      img: "/Espresso.png",
      price: 2.5,
      quantity: 0,
    },
    {
      name: "Mocha",
      img: "/Mocha.png",
      price: 4.5,
      quantity: 0,
    },
    {
      name: "Americano",
      img: "/Americano.png",
      price: 3,
      quantity: 0,
    },
  ];
export const Totals: React.FC = (quan) => {
  return (
    <div className="flex gap-4">
      {data.map((el, index) => (
        <section
          key={index}
          className="bg-[#007143] py-4 px-3 w-32 rounded-md flex flex-col font-semibold"
        >
          <img src={"./assets/" + el.img} alt={el.name} />
          <span className="text-white">{el.name}</span>
          <span className="text-[#E9C9A2] font-semibold">${el.price * quan}</span>
          <main className="bg-white flex justify-between w-20 mx-auto rounded-sm overflow-hidden">
            <button
              className="plus bg-[#E9C9A2] w-6 flex justify-center items-center"
              onClick={() => increaseQuantity(index)}
            >
              +
            </button>
            <span>{quantities[index] || 0}</span>
            <button
              className="minus bg-[#E9C9A2] w-6 flex justify-center items-center"
              onClick={() => decreaseQuantity(index)}
            >
              -
            </button>
          </main>
        </section>
      ))}
    </div>
  );
};
