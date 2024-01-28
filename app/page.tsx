"use client";
import React, { useEffect } from "react";
import Product from "@/components/Product/Product";
import useProductData from "@/hooks/useProductData";
import { useDispatch, useSelector } from "react-redux";
import { resetSearch } from "@/redux/slices/searchSlice";

const ProductsPage = () => {
  const { products, loading } = useProductData();
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => (state as any)?.search);

  const filteredProducts = searchQuery
    ? products?.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  useEffect(() => {
    dispatch(resetSearch(""));
  }, [dispatch]);

  return (
    <div className="flex flex-wrap -mx-2">
      {loading ? (
        <p className="h-screen flex items-center justify-center">Loading...</p>
      ) : (
        filteredProducts?.map((product) => (
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
              quantity={product.qty}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsPage;
