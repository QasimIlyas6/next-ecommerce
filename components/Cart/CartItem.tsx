'use client'
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "@/redux/slices/cartSlice";

export const truncateTitle = (title, wordsCount = 5) => {
  const words = title.split(" ");
  return words.slice(0, wordsCount).join(" ");
};

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(item?.id))
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(item?.id))
    }
  const truncatedTitle = truncateTitle(item.title);

  
  return (
    <div className="flex items-center justify-between px-4 bg-white rounded shadow  pb-3 font-semibold text-sm mb-4">
      <div className="flex items-center mt-4">
        <Image
          src={item.image}
          width={249}
          height={249}
          alt="Alt text"
          className="rounded-xl w-20 h-20"
        />
      </div>

      <div className="flex items-center">
        <h2> {truncatedTitle} </h2>
      </div>

      <div className="flex items-center gap-2">
        <h4>${item.price}</h4>
      </div>

      <div className=" rounded-xl flex  items-center ">
        <button 
        type="button" 
        className="bg-black rounded-lg text-white border-r border-gray-400 p-1 px-3"
        onClick={handleDecreaseQuantity}
        >
          -
        </button>
        <p className="flex-grow text-black px-3">{item?.qty}</p>
        <button 
        type="button" 
        className="bg-black rounded-lg text-white border-l border-gray-400 p-1 px-3"
        onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
