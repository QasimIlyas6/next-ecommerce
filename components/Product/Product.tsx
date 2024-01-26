'use client'
import React, { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { CgShoppingCart } from "react-icons/cg";
import toast from "react-hot-toast";

interface ProductProps {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

const Product: React.FC<ProductProps> = ({
  id,
  title,
  category,
  price,
  description,
  image,
  quantity

}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart);

//   console.log("the cart data is :", cartData);

  const isInCart = cartData.some((product) => product.id === id);

//   console.log("filter is :", isInCart);

  const handleProductClick = (id: number) => {
    router.push(`/product-detail/${id}`);
  };

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    dispatch(addToCart({ id, title, category, price, description, image }));
    toast.success("Added to cart successfully")
  };

  const handleRemoveFromCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    dispatch(removeFromCart(id));
    toast.error("Removed from cart successfully")
  };

  return (
    <div className="w-full mb-5">
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer p-2"
        onClick={() => handleProductClick(id)}
      >
        <div className="relative">
          <Image
            src={image}
            alt="product image"
            width={300}
            height={200}
            className="object-cover object-center w-full rounded-lg h-32 md:h-32 lg:h-32"
          />
        </div>
        <div className="py-4 px-2">
          <div className="text-black-500 font-medium text-md h-7 overflow-hidden">
            {title}
          </div>
          <div className="text-slate-700 dark:text-slate-500 text-sm mb-2">
            {category}
          </div>
          <p className="text-xs h-16 overflow-hidden">{description}</p>
          <div className="font-light text-sm">
            Price: <span className="mt-2 text-md font-bold"> ${price} </span>{" "}
          </div>
          <div>
            {isInCart && isInCart  ? (
              <button
                type="button"
                onClick={handleRemoveFromCart}
                className="bg-[#FFC1C1] w-full rounded py-2 mt-4 text-[#D20000] font-light"
              >
                Remove from cart
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex items-center justify-center bg-black w-full rounded py-2 mt-4 text-white font-light"
              >
                Add to cart
                <CgShoppingCart className="text-white ms-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
