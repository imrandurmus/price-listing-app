import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import type { Product } from "../types/Product";
import ProductCarousel from "../components/ProductCarousel";

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // const colorOrder = [
  //   'Yellow Gold',
  //   'White Gold',
  //   'Rose Gold'
  // ];

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Product List</h1>
      <div className="mb-4 text-blue-600">Loaded products: {products.length}</div>
      <ProductCarousel products={products} />
    </div>
  );
};

export default ProductListPage;
