import type { Product } from '../types/Product';

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://price-listing-app-production.up.railway.app/products');
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};
