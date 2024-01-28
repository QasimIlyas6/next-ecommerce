"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function SingleProduct({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`, {cache:'no-store'})
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const {id, title, price, description, image, category} = product

  const handleAddToCart = () => {
    router.push('/cart')
    dispatch(addToCart({id, title, price, description, category, image}))
    
  }

  return (
    <div className="container flex items-center justify-around w-full h-96 mt-10">
      <div className="image w-1/2">
        <div className="rounded-lg w-80 shadow-xl bg-white p-2">
          <Image
            src={product.image}
            alt={product.image}
            width={300}
            height={180}
            className="object-cover object-center rounded-lg "
          />
        </div>
      </div>
      <div className="w-1/2 h-80 flex flex-col justify-between">
        <p className="text-xl"> {product.title}</p>
        <div>
          <p className="text-sm text-gray-500">Category</p>
          <p className="text-sm"> {product.category} </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Description</p>
          <p className="text-sm ">{product.description}.</p>
        </div>

        <div>
          <p className="text-sm">Price</p>
          <p className="font-bold">
            {" "}
            {"$"} {product.price.toFixed(2)}
          </p>
        </div>

        <button 
        className="bg-black text-white text-sm rounded-xl py-2  font-light"
        onClick={handleAddToCart}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
