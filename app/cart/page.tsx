"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem, { truncateTitle } from "@/components/Cart/CartItem";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { reSetCart } from "@/redux/slices/cartSlice";

export default function Cart() {
  const cartItems: [] = useSelector((state) => state?.cart);

  const totalPrice = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.qty;
  }, 0);

  const router = useRouter();
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    toast.success("Check out successfully");
    dispatch(reSetCart());
    router.push("/");
  };

  return (
    <div className="grid grid-cols-12 gap-14 lg:gap-24 mt-14">
      <div className="col-span-8">
        <div className="min-h-80">
          <h2 className="py-2 mb-6 text-2xl">Your Cart</h2>
          {cartItems && cartItems.length > 0 ? (
            <div>
              <div className="flex justify-between px-4 text-slate-400 pb-3 font-semibold text-sm mb-3">
                <div className="col-span-3"></div>
                <h2 className="uppercase ps-12">Name</h2>
                <h2 className="uppercase">Price</h2>
                <h2 className="uppercase">Quantity</h2>
              </div>
              {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500">
              No items found in the cart.
            </p>
          )}
        </div>
      </div>

      <div className="col-span-4 fixed w-80 h-auto right-14 mb-5 sm:block bg-white border border-gray-300 rounded-lg  text-slate-800 overflow-hidden hidden p-5 ">
        <div className="flex flex-col justify-between min-h-80">
          <div>
            <h2 className="text-2xl pb-3">Your total</h2>
            <div className="text-md pb-6">
              {cartItems?.map((item) => (
                <div className="flex items-center justify-between">
                  <span>
                    {truncateTitle(item.title, 2)}{" "}
                    <span className="text-gray-400"> X{item.qty} </span>
                  </span>
                  <span>$ {item.qty * item.price} </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between py-4 font-bold">
              <span>Total </span>
              <span>${totalPrice}</span>
            </div>
            <button
              type="button"
              className="bg-black text-white w-full rounded-lg py-2 px-4 font-normal"
              onClick={handleCheckOut}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
