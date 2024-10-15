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

export const Card: React.FC = () => {
  const [quantities, setQuantities] = useState<number[]>([]);
  const [enableBtn, setEnableBtn] = useState<boolean>(false);

  useEffect(() => {
    const initialQuantities = data.map((product) => product.quantity);
    setQuantities(initialQuantities);
  }, []);

  const increaseQuantity = (index: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((item, i) => (i === index ? item + 1 : item))
    );
  };

  const decreaseQuantity = (index: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((item, i) =>
        i === index && item > 0 ? item - 1 : item
      )
    );
  };

  const totalPrice = quantities.reduce(
    (sum, quantity, index) => sum + quantity * data[index].price,
    0
  );

  useEffect(() => {
    if (quantities) {
      const result = quantities.every((el) => {
        return el == 0;
      });
      setEnableBtn(result);
    }
  }, [quantities]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-semibold my-7 mt-10">
        Starbucks online coffee order
      </div>
      <div className="flex gap-4 mobile:grid mobile:grid-cols-3">
        {data.map((el, index) => (
          <section
            key={index}
            className="bg-[#007143] py-4 px-3 w-32 rounded-md flex flex-col font-semibold"
          >
            <img src={"./assets/" + el.img} alt={el.name} />
            <span className="text-white">{el.name}</span>
            <span className="text-[#E9C9A2] font-semibold">${el.price}</span>
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
      <div className="flex gap-4 mobile:grid mobile:grid-cols-3 mt-8">
        {data.map((el, index) => (
          <section
            key={index}
            className="bg-[#007143] py-4 px-3 w-32 rounded-md flex flex-col font-semibold"
          >
            <img src={"./assets/" + el.img} alt={el.name} />
            <span className="text-white">{el.name}</span>
            <span className="text-[#E9C9A2] font-semibold">
              ${el.price * quantities[index]}
            </span>
            <span className="text-white text-sm">Qty: {quantities[index]}</span>
          </section>
        ))}
      </div>
      <div className="mt-5 text-[#007143] text-lg font-bold">
        Total Price: ${totalPrice.toFixed(2)}
      </div>
      <button
        disabled={!enableBtn}
        className={`bg-[#E9C9A2] text-white font-semibold text-xl h-10 w-1/3 my-3 rounded-md ${
          enableBtn ? "bg-[#c6c6c6]" : "bg-[#E9C9A2]"
        }`}
      >
        Submit Order
      </button>
    </div>
  );
};
