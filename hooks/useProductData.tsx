'use client'
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  qty: number
}

const useProductData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          cache: 'no-store',
        });
        const data: Product[] = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useProductData;
