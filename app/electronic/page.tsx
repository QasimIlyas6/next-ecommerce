'use client'
import React from "react";
import Product from "@/components/Product/Product";
import useProductData from "@/hooks/useProductData";

const ElectronicPage = () => {
  const { products } = useProductData();

  const electronicProducts = products?.filter(
    (product) => product.category === "electronics"
  );

  return (
    <div className="flex flex-wrap -mx-2">
      {electronicProducts?.map((product) => (
        <div
          key={product.id}
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-4"
        >
          <Product
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            description={product.description}
            image={product.image}
            quantity={product?.qty}
          />
        </div>
      ))}
    </div>
  );
};

export default ElectronicPage;
