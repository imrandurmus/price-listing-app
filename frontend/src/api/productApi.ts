import type { Product } from '../types/Product';

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('http://localhost:8080/products'); // update URL as needed
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};
